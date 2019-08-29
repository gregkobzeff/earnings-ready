import moment from "moment";
import EarningsProximity from "./EarningsProximity";

export default class StockEarningsHistory {

  constructor(properties) {

    this.symbol = properties.symbol;
    this.companyName = properties.companyName;
    this.earningsActualEPS = properties.earningsActualEPS;
    this.earningsConsensusEPS = properties.earningsConsensusEPS;
    this.earningsDate = properties.earningsDate;
    this.earningsTime = properties.earningsTime;
    this.earningsChange = properties.earningsChange;
    this.earningsChangePct = properties.earningsChangePct;
    this.earningsProximity = new EarningsProximity(
      properties.earningsDate, properties.earningsTime,
      moment().add(10, "year"), "");

  }

}
