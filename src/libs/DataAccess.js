import moment from "moment";
import Stock from "../models/Stock";
import StockEarnings from "../models/StockEarnings";
import SymbolConnections from "../models/SymbolConnections";
import Connection from "../models/Connection";
import CompanyList from "./CompanyList"
import FakeData from "./FakeData"

//Calendar (filters by proximity), HeatMap (shows past and next)
export function getStocks(earningsStartDate, earningsEndDate) {

  var stocks = Array(500).fill().map((e, i) => {
    const company = CompanyList.find(i);
    var props = createStockProps(company.symbol);
    var stock = new Stock(props);
    return stock;
  });

  var filteredStocks = stocks.filter(s =>
    s.lastEarningsDate.isBetween(earningsStartDate, earningsEndDate) ||
    s.nextEarningsDate.isBetween(earningsStartDate, earningsEndDate)
  );

  return filteredStocks;

}

export function getStock(symbol) {
  var props = createStockProps(symbol);
  var stock = new Stock(props);
  return stock;
}

//Stocks
export function getWatchList() {

  const stocks = [];
  const count = FakeData.number(0, 20, 0);

  for (let n = 1; n <= count; n++) {
    const symbol = FakeData.company().symbol;
    const props = createStockProps(symbol);
    const stock = new Stock(props);
    stocks.push(stock);
  }

  return stocks;
}

//Stocks
export function getConnectedStocks(symbol) {

  const stocks = [];
  const count = FakeData.number(0, 20, 0);
  const details = FakeData.paragraph(3);

  for (let n = 1; n <= count; n++) {
    const cSymbol = FakeData.company().symbol;
    if (cSymbol !== symbol) {
      const props = createStockProps(cSymbol);
      props.details = FakeData.number(1, 3, 0) % 3 === 0 ? details : "";
      const stock = new Stock(props);
      stocks.push(stock);
    }
  }

  return stocks;

}

//Connections - EditConnections
export function getAllSymbolConnections() {

  const allSymbolConnections = [];
  const count1 = FakeData.number(0, 5, 0);

  for (let x = 1; x <= count1; x++) {
    const connections = [];
    const count2 = FakeData.number(0, 10, 0);
    for (let y = 1; y <= count2; y++) {
      const connection = new Connection(FakeData.company().symbol, "");
      connections.push(connection);
    }
    const symbolConnection = new SymbolConnections(FakeData.company().symbol, connections);
    allSymbolConnections.push(symbolConnection);
  }

  return allSymbolConnections;

}

//StockEarnings - StockDetails (always past)
export function getStockEarnings(symbol) {

  const time = FakeData.earningsTime();
  const earnings = [];

  for (let n = 1; n <= 4; n++) {
    const props = createEarningsProps(symbol);
    if (props) {
      const stockEarnings = new StockEarnings(props);
      stockEarnings.earningsTime = time;
      earnings.push(stockEarnings);
    }
  }

  return earnings;
}

//StocksEarnings - Compare (always past)
export function getStockEarningsBySymbols(symbols) {
  let earnings = [];
  for (let i = 0; i < symbols.length; i++) {
    earnings = earnings.concat(getStockEarnings(symbols[i]));
  }
  return earnings;
}

//creates past and next (separate properties)
const createStockProps = (symbol) => {

  const time = FakeData.earningsTime();
  const daysAgo = FakeData.number(1, 90, 0);
  const date = moment().subtract(daysAgo, "day");
  const company = CompanyList.findBySymbol(symbol);

  if (!company) return null;

  const props = {
    symbol: symbol,
    companyName: company.name,
    lastEarningsDate: date,
    lastEarningsTime: time,
    lastEarningsActualEPS: FakeData.number(0, 2.50, 2),
    lastEarningsConsensusEPS: FakeData.number(0, 2.50, 2),
    lastEarningsChange: FakeData.number(0, 10, 2),
    lastEarningsChangePct: FakeData.number(0, 10, 2),
    nextEarningsDate: date.clone().add(3, "month"),
    nextEarningsTime: time,
    nextEarningsConsensusEPS: FakeData.number(0, 2.50, 2)
  };

  return props;

}

//always creates past
const createEarningsProps = (symbol) => {

  const daysAgo = FakeData.number(0, 90, 0);
  const company = CompanyList.findBySymbol(symbol);

  if (!company) return null;

  const props = {
    symbol: symbol,
    companyName: company.name,
    earningsActualEPS: FakeData.number(0, 2.50, 2),
    earningsConsensusEPS: FakeData.number(0, 2.50, 2),
    earningsDate: moment().subtract(daysAgo, "day"),
    earningsTime: FakeData.earningsTime(),
    earningsChange: FakeData.number(0, 10, 2),
    earningsChangePct: FakeData.number(0, 10, 2),
  };

  return props;
}

export function saveWatchList(symbols) {
  console.log("Saving WatchList", symbols);
}

export function saveSymbolConnections(symbolConnections) {
  console.log("Saving SymbolConnections", symbolConnections);
}