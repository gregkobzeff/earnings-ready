import moment from "moment";
import CompanyList from "../libs/CompanyList";
import Stock from "../models/Stock";
import StockEarnings from "../models/StockEarnings";

export default class EarningsConverter {

  toStocks(data) {

    const allSymbols = data.map(item => item.Symbol);
    const symbols = [...new Set(allSymbols)];
    symbols.sort();

    const stocks = [];

    symbols.forEach(symbol => {

      const earnings = data.filter(item => item.Symbol === symbol);
      const props = {};
      props.symbol = symbol;
      props.companyName = CompanyList.findBySymbol(symbol).name;

      earnings.forEach(earning => {

        const now = moment();
        const E_Date = moment(earning.E_Date);

        if (E_Date.isBefore(now) && (!props.lastEarningsDate || E_Date.isAfter(props.lastEarningsDate))) {
          props.lastEarningsDate = E_Date;
          props.lastEarningsTime = this.toTimeString(earning.E_Time);
          props.lastEarningsActualEPS = earning.AEPS;
          props.lastEarningsConsensusEPS = earning.CEPS;
          props.lastEarningsChange = earning.ChAmt;
          props.lastEarningsChangePct = earning.ChPct;
        }

        if (E_Date.isAfter(now) && (!props.nextEarningsDate || E_Date.isBefore(props.nextEarningsDate))) {
          props.nextEarningsDate = E_Date;
          props.nextEarningsTime = this.toTimeString(earning.E_Time);
          props.nextEarningsConsensusEPS = earning.CEPS;
        }

      });

      const stock = new Stock(props);
      stocks.push(stock);
    });

    return stocks;
  }

  toEarnings(data) {

    const allStockEarnings = [];

    data.forEach(earning => {

      const props = {};
      props.symbol = earning.Symbol;
      props.companyName = CompanyList.findBySymbol(earning.Symbol).name;
      props.earningsActualEPS = earning.AEPS;
      props.earningsConsensusEPS = earning.CEPS;
      props.earningsDate = moment(earning.E_Date);
      props.earningsTime = this.toTimeString(earning.E_Time);
      props.earningsChange = earning.ChAmt;
      props.earningsChangePct = earning.ChPct;

      const stockEarnings = new StockEarnings(props);
      allStockEarnings.push(stockEarnings);
    });

    return allStockEarnings;
  }

  toTimeString(eTime) {
    return eTime === 1 ? "BMO" : eTime === 2 ? "AMC" : "";
  }

}
