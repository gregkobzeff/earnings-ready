import { getProximity } from "../helpers/EarningsHelper";

export default class Stock {

  constructor(properties) {

    //Object.assign(this, properties)

    this.symbol = properties.symbol;
    this.companyName = properties.companyName;
    this.lastEarningsDate = properties.lastEarningsDate;
    this.lastEarningsTime = properties.lastEarningsTime;
    this.nextEarningsDate = properties.nextEarningsDate;
    this.nextEarningsTime = properties.nextEarningsTime;

    this.earningsProximity = getProximity(this.lastEarningsDate, this.nextEarningsDate);
    this.earningsDate = this.earningsProximity.startsWith("B") ? this.lastEarningsDate : this.nextEarningsDate;
    this.earningsTime = this.earningsProximity.startsWith("B") ? this.lastEarningsTime : this.nextEarningsTime;
    this.earningsChange = properties.lastEarningsChange;
    this.earningsChangePct = properties.lastEarningsChangePct;

    this.earningsHistories = properties.earningsHistories;

  }

}
