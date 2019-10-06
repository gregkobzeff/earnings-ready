import moment from "moment";
import { API } from "aws-amplify";
import EarningsConverter from "../converters/EarningsConverter";
import SymbolConnections from "../models/SymbolConnections";
import Connection from "../models/Connection";
import CompanyList from "./CompanyList";

//Test
export async function trace() {
  const response = await API.get("api", "/test/trace");
  console.log("Trace result: ", response);
  return response;
}

//SymbolSelector
export async function getSymbols() {
  const symbols = CompanyList.list().map(c => c.symbol);
  symbols.sort();
  return new Promise(resolve => resolve(symbols));
}

//WatchList
export async function getWatchListData() {
  const response = await API.get("api", "/watchlist");
  const stocks = new EarningsConverter().toStocks(response);
  return stocks;
}

//EditWatchList
export async function getWatchListSymbols() {
  const response = await API.get("api", "/watchlist/symbols");
  return response;
}

//EditWatchList
export async function saveWatchList(symbols) {
  symbols.sort();
  const data = JSON.stringify({ "symbols": symbols });
  const response = await API.put("api", "/watchlist", { body: data });
  return response;
}

//EditConnections
export async function saveSymbolConnections(symbolConnections) {
  const symbol = symbolConnections.symbol;
  const symbols = symbolConnections.connections.map(c => c.symbol);
  if (symbols.length > 0) {
    const data = JSON.stringify({ "symbol": symbol, "symbols": symbols.sort() });
    const response = await API.put("api", "/connections/symbols", { body: data });
    return response;
  } else {
    const response = await API.del("api", `/connections/${symbol}`);
    return response;
  }
}

//EditConnections
export async function getAllSymbolConnections() {
  const response = await API.get("api", "/connections/symbols");
  const connections = response.map(item => {
    var connections = item.Symbols.map(symbol => new Connection(symbol, ""));
    return new SymbolConnections(item.Symbol, connections);
  });
  return connections;
}

//StockDetails
export async function getConnectedStocks(symbol) {
  const response = await API.get("api", `/connections/${symbol}`);
  const stocks = new EarningsConverter().toStocks(response);
  return stocks;
}

//Heatmap
export async function getHeatMap() {
  const response = await API.get("api", "/heatmap");
  const stocks = new EarningsConverter().toStocks(response);
  return stocks;
}

//Calendar
export async function getCalendar() {
  const response = await API.get("api", "/calendar");
  const stocks = new EarningsConverter().toStocks(response);
  return stocks;
}

//StockDetails
export async function getStockDetails(symbol) {
  //response has two properties: details and earnings
  const response = await API.get("api", `/details/${symbol}`);
  const earnings = new EarningsConverter().toStocks(response.earnings);
  return earnings.length > 0 ? earnings[0] : null;
}

//StockDetails and Compare
export async function getEarnings(symbols) {
  const q = symbols.join(",");
  const response = await API.get("api", `/earnings?symbols=${q}`);
  const earnings = new EarningsConverter().toEarnings(response);
  const today = moment().startOf("day");
  const pastEarnings = earnings.filter(earning => earning.earningsDate.isSameOrBefore(today));
  return pastEarnings;
}