import moment from "moment";
import Stock from "../models/Stock";
import StockEarningsHistory from "../models/StockEarningsHistory";
import Utilities from "../libs/Utilities";

export function getStocks(earningsStartDate, earningsEndDate) {

  //https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
  var stocks = Array(500).fill().map((e, i) => {

    const seedSymbol = seedSymbols[i];
    const seedCompanyName = `Company (${seedSymbol})`;
    const seedEarningsTime = i % 2 === 0 ? "BTO" : "MAC";

    const addMinutes = 60 * (seedEarningsTime === "BTO") ? 6.5 : 13;     //6:30AM or 1:00PM
    const today = moment().startOf("day");
    const lastEarningsDate = today.clone().add(i - 499, "day").add(addMinutes, "minute");
    const lastEarningsTime = seedEarningsTime;
    const nextEarningsDate = today.clone().add(i + 1, "day");
    const nextEarningsTime = seedEarningsTime;
    const lastEarningsChange = Utilities.getRandomNumber(-10, 10, 2);
    const lastEarningsChangePct = lastEarningsChange;

    const properties = {
      symbol: seedSymbol,
      companyName: seedCompanyName,
      lastEarningsDate: lastEarningsDate,
      lastEarningsTime: lastEarningsTime,
      lastEarningsActualEPS: Utilities.getRandomNumber(0, 2.50, 2),
      lastEarningsConsensusEPS: Utilities.getRandomNumber(0, 2.50, 2),
      lastEarningsChange: lastEarningsChange,
      lastEarningsChangePct: lastEarningsChangePct,
      nextEarningsDate: nextEarningsDate,
      nextEarningsTime: nextEarningsTime,
      nextEarningsConsensusEPS: Utilities.getRandomNumber(0, 2.50, 2)
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

  const properties = {
    symbol: symbol,
    companyName: `Company (${symbol})`,
    lastEarningsDate: moment().subtract(3, "month"),
    lastEarningsTime: "BTO",
    lastEarningsActualEPS: Utilities.getRandomNumber(0, 2.50, 2),
    lastEarningsConsensusEPS: Utilities.getRandomNumber(0, 2.50, 2),
    lastEarningsChange: Utilities.getRandomNumber(0, 10, 2),
    lastEarningsChangePct: Utilities.getRandomNumber(0, 10, 2),
    nextEarningsDate: moment(),
    nextEarningsTime: "BTO",
    nextEarningsConsensusEPS: Utilities.getRandomNumber(0, 2.50, 2)
  };

  var stock = new Stock(properties);
  return stock;
}

export function getStockEarningsHistory(symbol) {
  const history = [];
  for (let n = 1; n <= 4; n++) {
    const props = createEarningsHistoryProps(symbol, n);
    const stockEarningsHistory = new StockEarningsHistory(props);
    history.push(stockEarningsHistory);
  }
  return history;
}

export function getConnectedStockEarningsHistory(symbol) {
  const history = [];
  const today = moment().startOf("day");
  const count = Utilities.getRandomNumber(0, 20, 0);
  const details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
    "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
    "nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id " +
    "est laborum.";
  for (let n = 1; n <= count; n++) {
    const historySymbol = (n === 1) ? symbol : seedSymbols[n];
    const props = createEarningsHistoryProps(historySymbol, n);
    props.earningsDate = today.clone().subtract((n - 1) * 2, "day");
    props.details = n % 2 === 0 ? details : "";
    const stockEarningsHistory = new StockEarningsHistory(props);
    history.push(stockEarningsHistory);
  }
  return history;
}

const createEarningsHistoryProps = (symbol, n) => {
  const historyProps = {
    symbol: symbol,
    companyName: `Company${symbol}`,
    earningsActualEPS: Utilities.getRandomNumber(0, 2.50, 2),
    earningsConsensusEPS: Utilities.getRandomNumber(0, 2.50, 2),
    earningsDate: moment().subtract(n * 3, "month"),
    earningsTime: "BTO",
    earningsChange: Utilities.getRandomNumber(0, 10, 2),
    earningsChangePct: Utilities.getRandomNumber(0, 10, 2),
  };

  return historyProps;
}

const seedSymbols = ['ABT', 'ABBV', 'ACN', 'ACE', 'ADBE', 'ADT', 'AAP', 'AES', 'AET', 'AFL', 'AMG', 'A', 'GAS', 'APD',
  'ARG', 'AKAM', 'AA', 'AGN', 'ALXN', 'ALLE', 'ADS', 'ALL', 'ALTR', 'MO', 'AMZN', 'AEE', 'AAL', 'AEP', 'AXP', 'AIG', 'AMT',
  'AMP', 'ABC', 'AME', 'AMGN', 'APH', 'APC', 'ADI', 'AON', 'APA', 'AIV', 'AMAT', 'ADM', 'AIZ', 'T', 'ADSK', 'ADP', 'AN', 'AZO',
  'AVGO', 'AVB', 'AVY', 'BHI', 'BLL', 'BAC', 'BK', 'BCR', 'BXLT', 'BAX', 'BBT', 'BDX', 'BBBY', 'BRK-B', 'BBY', 'BLX', 'HRB',
  'BA', 'BWA', 'BXP', 'BSK', 'BMY', 'BRCM', 'BF-B', 'CHRW', 'CA', 'CVC', 'COG', 'CAM', 'CPB', 'COF', 'CAH', 'HSIC', 'KMX',
  'CCL', 'CAT', 'CBG', 'CBS', 'CELG', 'CNP', 'CTL', 'CERN', 'CF', 'SCHW', 'CHK', 'CVX', 'CMG', 'CB', 'CI', 'XEC', 'CINF',
  'CTAS', 'CSCO', 'C', 'CTXS', 'CLX', 'CME', 'CMS', 'COH', 'KO', 'CCE', 'CTSH', 'CL', 'CMCSA', 'CMA', 'CSC', 'CAG', 'COP',
  'CNX', 'ED', 'STZ', 'GLW', 'COST', 'CCI', 'CSX', 'CMI', 'CVS', 'DHI', 'DHR', 'DRI', 'DVA', 'DE', 'DLPH', 'DAL', 'XRAY',
  'DVN', 'DO', 'DTV', 'DFS', 'DISCA', 'DISCK', 'DG', 'DLTR', 'D', 'DOV', 'DOW', 'DPS', 'DTE', 'DD', 'DUK', 'DNB', 'ETFC',
  'EMN', 'ETN', 'EBAY', 'ECL', 'EIX', 'EW', 'EA', 'EMC', 'EMR', 'ENDP', 'ESV', 'ETR', 'EOG', 'EQT', 'EFX', 'EQIX', 'EQR',
  'ESS', 'EL', 'ES', 'EXC', 'EXPE', 'EXPD', 'ESRX', 'XOM', 'FFIV', 'FB', 'FAST', 'FDX', 'FIS', 'FITB', 'FSLR', 'FE', 'FSIV',
  'FLIR', 'FLS', 'FLR', 'FMC', 'FTI', 'F', 'FOSL', 'BEN', 'FCX', 'FTR', 'GME', 'GPS', 'GRMN', 'GD', 'GE', 'GGP', 'GIS', 'GM',
  'GPC', 'GNW', 'GILD', 'GS', 'GT', 'GOOGL', 'GOOG', 'GWW', 'HAL', 'HBI', 'HOG', 'HAR', 'HRS', 'HIG', 'HAS', 'HCA', 'HCP',
  'HCN', 'HP', 'HES', 'HPQ', 'HD', 'HON', 'HRL', 'HSP', 'HST', 'HCBK', 'HUM', 'HBAN', 'ITW', 'IR', 'INTC', 'ICE', 'IBM', 'IP',
  'IPG', 'IFF', 'INTU', 'ISRG', 'IVZ', 'IRM', 'JEC', 'JBHT', 'JNJ', 'JCI', 'JOY', 'JPM', 'JNPR', 'KSU', 'K', 'KEY', 'GMCR',
  'KMB', 'KIM', 'KMI', 'KLAC', 'KSS', 'KRFT', 'KR', 'LB', 'LLL', 'LH', 'LRCX', 'LM', 'LEG', 'LEN', 'LVLT', 'LUK', 'LLY', 'LNC',
  'LLTC', 'LMT', 'L', 'LOW', 'LYB', 'MTB', 'MAC', 'M', 'MNK', 'MRO', 'MPC', 'MAR', 'MMC', 'MLM', 'MAS', 'MA', 'MAT', 'MKC',
  'MCD', 'MHFI', 'MCK', 'MJN', 'MMV', 'MDT', 'MRK', 'MET', 'KORS', 'MCHP', 'MU', 'MSFT', 'MHK', 'TAP', 'MDLZ', 'MON', 'MNST',
  'MCO', 'MS', 'MOS', 'MSI', 'MUR', 'MYL', 'NDAQ', 'NOV', 'NAVI', 'NTAP', 'NFLX', 'NWL', 'NFX', 'NEM', 'NWSA', 'NEE', 'NLSN',
  'NKE', 'NI', 'NE', 'NBL', 'JWN', 'NSC', 'NTRS', 'NOC', 'NRG', 'NUE', 'NVDA', 'ORLY', 'OXY', 'OMC', 'OKE', 'ORCL', 'OI',
  'PCAR', 'PLL', 'PH', 'PDCO', 'PAYX', 'PNR', 'PBCT', 'POM', 'PEP', 'PKI', 'PRGO', 'PFE', 'PCG', 'PM', 'PSX', 'PNW', 'PXD',
  'PBI', 'PCL', 'PNC', 'RL', 'PPG', 'PPL', 'PX', 'PCP', 'PCLN', 'PFG', 'PG', 'PGR', 'PLD', 'PRU', 'PEG', 'PSA', 'PHM', 'PVH',
  'QRVO', 'PWR', 'QCOM', 'DGX', 'RRC', 'RTN', 'O', 'RHT', 'REGN', 'RF', 'RSG', 'RAI', 'RHI', 'ROK', 'COL', 'ROP', 'ROST', 'RLC',
  'R', 'CRM', 'SNDK', 'SCG', 'SLB', 'SNI', 'STX', 'SEE', 'SRE', 'SHW', 'SIAL', 'SPG', 'SWKS', 'SLG', 'SJM', 'SNA', 'SO', 'LUV',
  'SWN', 'SE', 'STJ', 'SWK', 'SPLS', 'SBUX', 'HOT', 'STT', 'SRCL', 'SYK', 'STI', 'SYMC', 'SYY', 'TROW', 'TGT', 'TEL', 'TE',
  'TGNA', 'THC', 'TDC', 'TSO', 'TXN', 'TXT', 'HSY', 'TRV', 'TMO', 'TIF', 'TWX', 'TWC', 'TJK', 'TMK', 'TSS', 'TSCO', 'RIG',
  'TRIP', 'FOXA', 'TSN', 'TYC', 'UA', 'UNP', 'UNH', 'UPS', 'URI', 'UTX', 'UHS', 'UNM', 'URBN', 'VFC', 'VLO', 'VAR', 'VTR',
  'VRSN', 'VZ', 'VRTX', 'VIAB', 'V', 'VNO', 'VMC', 'WMT', 'WBA', 'DIS', 'WM', 'WAT', 'ANTM', 'WFC', 'WDC', 'WU', 'WY', 'WHR',
  'WFM', 'WMB', 'WEC', 'WYN', 'WYNN', 'XEL', 'XRX', 'XLNX', 'XL', 'XYL', 'YHOO', 'YUM', 'ZBH', 'ZION', 'ZTS', 'ZXX', 'ZXY', 'ZZZ'];
