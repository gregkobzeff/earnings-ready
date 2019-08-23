export function getStocks() {

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

    let lastEarningsDate = new Date();
    lastEarningsDate.setDate(new Date().getDate() - i - 1);

    let nextEarningsDate = new Date();
    nextEarningsDate.setDate(new Date().getDate() + i);

    return { 
      symbol: symbol, 
      lastEarningsDate: lastEarningsDate,
      lastEarningsTime: earningsTime,
      nextEarningsDate: nextEarningsDate,
      nextEarningsTime: earningsTime
    };
  
  });

  console.log(stocks);
  return stocks;
}