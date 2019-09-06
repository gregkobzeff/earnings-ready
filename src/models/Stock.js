import EarningsProximity from "./EarningsProximity";

export default class Stock {

  constructor(properties) {

    this.symbol = properties.symbol;
    this.companyName = properties.companyName;
    this.details = properties.details;

    this.lastEarningsDate = properties.lastEarningsDate;
    this.lastEarningsTime = properties.lastEarningsTime;
    this.lastEarningsActualEPS = properties.lastEarningsActualEPS;
    this.lastEarningsConsensusEPS = properties.lastEarningsConsensusEPS;
    this.nextEarningsDate = properties.nextEarningsDate;
    this.nextEarningsTime = properties.nextEarningsTime;
    this.nextEarningsConsensusEPS = properties.nextEarningsConsensusEPS;

    //matches the properties in StockEarnings class
    this.earningsProximity = new EarningsProximity(this.lastEarningsDate, this.lastEarningsTime, this.nextEarningsDate, this.nextEarningsTime);
    this.earningsDate = this.earningsProximity.displayEarningsDate;
    this.earningsTime = this.earningsProximity.displayEarningsTime;
    this.earningsActualEPS = this.earningsProximity.displayLast ? this.lastEarningsActualEPS : null;
    this.earningsConsensusEPS = this.earningsProximity.displayLast ? this.lastEarningsConsensusEPS : this.nextEarningsConsensusEPS;
    this.earningsChange = properties.lastEarningsChange;
    this.earningsChangePct = properties.lastEarningsChangePct;

  }

}
