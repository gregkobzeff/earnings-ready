
export default class StockEarningsHistory {

  constructor(properties) {

    this.symbol = properties.symbol;
    this.actualEPS = properties.actualEPS;
    this.consensusEPS = properties.consensusEPS;
    this.earningsDate = properties.earningsDate;
    this.earningsTime = properties.earningsTime;
    this.earningsChange = properties.earningsChange;
    this.earningsChangePct = properties.earningsChangePct;

  }

}
