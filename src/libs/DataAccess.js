import moment from "moment";
import { getProximity } from '../helpers/EarningsHelper';

export function getStocks(earningsStartDate, earningsEndDate) {

  //https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  var stocks = Array(500).fill().map((e, i) => {

    let symbol;
    let earningsTime;

    switch (i % 5) {
      case 0:
        symbol = "AMZN";
        earningsTime = "BTO";
        break;
      case 1:
        symbol = "GOOGL";
        earningsTime = "AMC";
        break;
      case 2:
        symbol = "AA";
        earningsTime = "BTO";
        break;
      case 3:
        symbol = "MSFT";
        earningsTime = "AMC";
        break;
      case 4:
        symbol = "NKE";
        earningsTime = "DMT";
        break;
      default:
        symbol = "COST";
        earningsTime = "BTO";
    }

    const addMinutes = 60 * (earningsTime === "BTO") ? 6.5 : 13;     //6:30AM or 1:00PM
    const now = moment().startOf("day");
    const lastEarningsDate = now.clone().add(i - 100, 'day').add(addMinutes, "minute");
    const nextEarningsDate = lastEarningsDate.clone().add(90, 'day');
    const proximity = getProximity(lastEarningsDate, nextEarningsDate);

    return { 
      symbol: symbol, 
      lastEarningsDate: lastEarningsDate,
      lastEarningsTime: earningsTime,
      nextEarningsDate: nextEarningsDate,
      nextEarningsTime: earningsTime,
      earningsProximity: proximity,
    };
  
  });

  var filteredStocks =  stocks.filter(s =>
    s.lastEarningsDate.isBetween(earningsStartDate, earningsEndDate) ||
    s.nextEarningsDate.isBetween(earningsStartDate, earningsEndDate)
  );

  return filteredStocks;
     
}