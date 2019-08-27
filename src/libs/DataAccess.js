import moment from "moment";
import Stock from '../models/Stock';

export function getStocks(earningsStartDate, earningsEndDate) {

  //https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  var stocks = Array(500).fill().map((e, i) => {

    const seedSymbol = "S" + i;
    const seedEarningsTime = "BTO";

    const addMinutes = 60 * (seedEarningsTime === "BTO") ? 6.5 : 13;     //6:30AM or 1:00PM
    const now = moment().startOf("day");
    const lastEarningsDate = now.clone().add(i - 499, 'day').add(addMinutes, "minute");
    const lastEarningsTime = seedEarningsTime;
    const nextEarningsDate = now.clone().add(i + 1, 'day');
    const nextEarningsTime = seedEarningsTime;
    const min = -10;
    const max = 10;
    const lastEarningsChange = (Math.random() * (max - min + 1) + min).toFixed(2);
    const lastEarningsChangePct = lastEarningsChange;

    const properties = {
      symbol: seedSymbol,
      lastEarningsDate: lastEarningsDate,
      lastEarningsTime: lastEarningsTime,
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