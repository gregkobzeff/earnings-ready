import moment from "moment";
import Stock from "../models/Stock";
import StockEarningsHistory from "../models/StockEarningsHistory";

export function getStocks(earningsStartDate, earningsEndDate) {

  //https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  var stocks = Array(500).fill().map((e, i) => {

    const seedSymbol = "S" + i;
    const seedCompanyName = "Company" + i;
    const seedEarningsTime = "BTO";

    const addMinutes = 60 * (seedEarningsTime === "BTO") ? 6.5 : 13;     //6:30AM or 1:00PM
    const now = moment().startOf("day");
    const lastEarningsDate = now.clone().add(i - 499, "day").add(addMinutes, "minute");
    const lastEarningsTime = seedEarningsTime;
    const nextEarningsDate = now.clone().add(i + 1, "day");
    const nextEarningsTime = seedEarningsTime;
    const min = -10;
    const max = 10;
    const lastEarningsChange = (Math.random() * (max - min + 1) + min).toFixed(2);
    const lastEarningsChangePct = lastEarningsChange;

    const properties = {
      symbol: seedSymbol,
      companyName: seedCompanyName,
      lastEarningsDate: lastEarningsDate,
      lastEarningsTime: lastEarningsTime,
      lastEarningsActualEPS: 1.05,
      lastEarningsConsensusEPS: 0.95,
      lastEarningsChange: lastEarningsChange,
      lastEarningsChangePct: lastEarningsChangePct,
      nextEarningsDate: nextEarningsDate,
      nextEarningsTime: nextEarningsTime
    };

    var stock = new Stock(properties);
    return stock;

  });

  var filteredStocks = stocks.filter(s =>
    s.lastEarningsDate.isBetween(earningsStartDate, earningsEndDate) ||
    s.nextEarningsDate.isBetween(earningsStartDate, earningsEndDate)
  );

  return filteredStocks;

}

export function getStock(symbol) {

  const earningsHistories = [];

  for (let x = 1; x <= 4; x++) {
    const p1 = {
      symbol: symbol,
      companyName: `Company${symbol}`,
      earningsActualEPS: 1.00,
      earningsConsensusEPS: 0.95,
      earningsDate: moment().subtract(x * 3, "month"),
      earningsTime: "BTO",
      earningsChange: 8.50,
      earningsChangePct: 2.25,
    }
    const history = new StockEarningsHistory(p1);
    earningsHistories.push(history);
  }

  const properties = {
    symbol: symbol,
    companyName: `Company${symbol}`,
    lastEarningsDate: moment().subtract(3, "month"),
    lastEarningsTime: "BTO",
    lastEarningsChange: 5.25,
    lastEarningsChangePct: 1.25,
    nextEarningsDate: moment(),
    nextEarningsTime: "BTO",
    earningsHistories: earningsHistories
  };

  var stock = new Stock(properties);
  return stock;
}