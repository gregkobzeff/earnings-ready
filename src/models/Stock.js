import { getProximity } from '../helpers/EarningsHelper';

export default class Stock {

  constructor(properties) {
    this.symbol = properties.symbol;
    this.lastEarningsDate = properties.lastEarningsDate;
    this.lastEarningsTime = properties.lastEarningsTime;
    this.nextEarningsDate = properties.nextEarningsDate;
    this.nextEarningsTime = properties.nextEarningsTime;
    this.earningsProximity = getProximity(this.lastEarningsDate, this.nextEarningsDate);
    this.earningsDate = this.earningsProximity.startsWith("B") ? this.lastEarningsDate : this.nextEarningsDate;
    this.earningsTime = this.earningsProximity.startsWith("B") ? this.lastEarningsTime : this.nextEarningsTime;
  }

}
