import moment from "moment";
import { getProximity } from '../helpers/EarningsHelper';

export function getStocks(earningsStartDate, earningsEndDate) {

  //https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  var stocks = Array(500).fill().map((e, i) => {

    let seedSymbol;
    let seedEarningsTime;

    switch (i % 5) {
      case 0:
        seedSymbol = "AMZN";
        seedEarningsTime = "BTO";
        break;
      case 1:
        seedSymbol = "GOOGL";
        seedEarningsTime = "AMC";
        break;
      case 2:
        seedSymbol = "AA";
        seedEarningsTime = "BTO";
        break;
      case 3:
        seedSymbol = "MSFT";
        seedEarningsTime = "AMC";
        break;
      case 4:
        seedSymbol = "NKE";
        seedEarningsTime = "DMT";
        break;
      default:
        seedSymbol = "COST";
        seedEarningsTime = "BTO";
    }

    const addMinutes = 60 * (seedEarningsTime === "BTO") ? 6.5 : 13;     //6:30AM or 1:00PM
    const now = moment().startOf("day");
    const lastEarningsDate = now.clone().add(i - 100, 'day').add(addMinutes, "minute");
    const lastEarningsTime = seedEarningsTime;
    const nextEarningsDate = lastEarningsDate.clone().add(90, 'day');
    const nextEarningsTime = seedEarningsTime;
    const earningsProximity = getProximity(lastEarningsDate, nextEarningsDate);
    const earningsDate = earningsProximity.startsWith("B") ? lastEarningsDate : nextEarningsDate;
    const earningsTime = earningsProximity.startsWith("B") ? lastEarningsTime : nextEarningsTime;

    return {
      symbol: seedSymbol,
      lastEarningsDate: lastEarningsDate,
      lastEarningsTime: lastEarningsTime,
      nextEarningsDate: nextEarningsDate,
      nextEarningsTime: seedEarningsTime,
      earningsProximity: earningsProximity,
      earningsDate: earningsDate,
      earningsTime: earningsTime,
    };

  });

  var filteredStocks = stocks.filter(s =>
    s.lastEarningsDate.isBetween(earningsStartDate, earningsEndDate) ||
    s.nextEarningsDate.isBetween(earningsStartDate, earningsEndDate)
  );

  filteredStocks.sort((s1, s2) => s1.earningsDate - s2.earningsDate);
  return filteredStocks;

}