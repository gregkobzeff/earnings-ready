import EarningsProximity from "./EarningsProximity";

export default class Stock {

  constructor(properties) {

    //Object.assign(this, properties)

    this.symbol = properties.symbol;

    this.companyName = properties.companyName;
    this.lastEarningsDate = properties.lastEarningsDate;
    this.lastEarningsTime = properties.lastEarningsTime;
    this.lastEarningsActualEPS = properties.lastEarningsActualEPS;
    this.lastEarningsConsensusEPS = properties.lastEarningsConsensusEPS;
    this.nextEarningsDate = properties.nextEarningsDate;
    this.nextEarningsTime = properties.nextEarningsTime;

    this.earningsProximity = new EarningsProximity(this.lastEarningsDate, this.lastEarningsTime, this.nextEarningsDate, this.nextEarningsTime);
    this.earningsDate = this.earningsProximity.earningsDate;
    this.earningsTime = this.earningsProximity.earningsTime;
    this.earningsActualEPS = this.earningsProximity.isBeforeNow ? this.lastEarningsActualEPS : null;
    this.earningsConsensusEPS = this.earningsProximity.isBeforeNow ? this.lastEarningsConsensusEPS : null;
    this.earningsChange = properties.lastEarningsChange;
    this.earningsChangePct = properties.lastEarningsChangePct;

    this.earningsHistories = properties.earningsHistories;

    /*
      this.symbol = properties.symbol;
      this.companyName = properties.companyName;
      this.earningsActualEPS = properties.earningsActualEPS;
      this.earningsConsensusEPS = properties.earningsActualEPS;
      this.earningsDate = properties.earningsDate;
      this.earningsTime = properties.earningsTime;
      this.earningsChange = properties.earningsChange;
      this.earningsChangePct = properties.earningsChangePct;
      this.earningsProximity = getProximity(properties.earningsDate, moment().add(1, 'year'));
    */

  }

}
