import moment from "moment";
import Stock from "../models/Stock";
import StockEarnings from "../models/StockEarnings";
import CompanyList from "./CompanyList"
import FakeData from "./FakeData"

export function getStocks(earningsStartDate, earningsEndDate) {

  //https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
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

export function getStockEarnings(symbol) {

  const time = FakeData.earningsTime();
  const earnings = [];

  for (let n = 1; n <= 4; n++) {
    const props = createEarningsProps(symbol);
    const stockEarnings = new StockEarnings(props);
    stockEarnings.earningsTime = time;
    earnings.push(stockEarnings);
  }

  return earnings;
}

export function getConnectedStockEarnings(symbol) {

  const earnings = [];
  const count = FakeData.number(0, 20, 0);
  const details = FakeData.paragraph(3);

  for (let n = 1; n <= count; n++) {
    const sym = FakeData.company().symbol;
    if (sym !== symbol) {
      const props = createEarningsProps(sym);
      props.details = FakeData.number(1, 3, 0) % 3 === 0 ? details : "";
      const stockEarnings = new StockEarnings(props);
      earnings.push(stockEarnings);
    }
  }

  return earnings;

}

const createStockProps = (symbol) => {

  const time = FakeData.earningsTime();
  const daysAgo = FakeData.number(1, 90, 0);
  const date = moment().subtract(daysAgo, "day");

  const props = {
    symbol: symbol,
    companyName: CompanyList.findBySymbol(symbol).name,
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

const createEarningsProps = (symbol) => {

  const daysAgo = FakeData.number(0, 90, 0);

  const props = {
    symbol: symbol,
    companyName: CompanyList.findBySymbol(symbol).name,
    earningsActualEPS: FakeData.number(0, 2.50, 2),
    earningsConsensusEPS: FakeData.number(0, 2.50, 2),
    earningsDate: moment().subtract(daysAgo, "day"),
    earningsTime: FakeData.earningsTime(),
    earningsChange: FakeData.number(0, 10, 2),
    earningsChangePct: FakeData.number(0, 10, 2),
  };

  return props;
}

