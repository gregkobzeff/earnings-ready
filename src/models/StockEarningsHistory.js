import moment from "moment";
import { getProximity } from "../helpers/EarningsHelper";

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
    this.earningsProximity = getProximity(properties.earningsDate, moment().add(1, 'year'));

  }

}
