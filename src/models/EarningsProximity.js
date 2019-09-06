import moment from "moment";

export default class EarningsProximity {

  constructor(lastEarningsDate, lastEarningsTime, nextEarningsDate, nextEarningsTime) {

    const code = this.getProximity(lastEarningsDate, nextEarningsDate);

    this.displayLast = code.startsWith("B");
    this.displayNext = !code.startsWith("B");   //if company did not recently report, show next earnings as default

    this.displayEarningsDate = this.displayLast ? lastEarningsDate : nextEarningsDate;
    this.displayEarningsTime = this.displayLast ? lastEarningsTime : nextEarningsTime;

    this.isCloseAndBeforeNow = code.startsWith("B");
    this.isCloseAndAfterNow = code.startsWith("A");

    this.isToday = (code === "B" || code === "A");
    this.isTodayBeforeNow = (code === "B");
    this.isTodayAfterNow = (code === "A");

    this.isThisWeek = (code === "B0" || code === "B" || code === "A" || code === "A0");
    this.isThisWeekBeforeNow = (code === "B0" || code === "B");
    this.isThisWeekAfterNow = (code === "A" || code === "A0");

    this.isLastWeek = (code === "B1");
    this.isNextWeek = (code === "A1");
    this.isBetweenLastWeekAndNextWeek = (code !== "");

  }

  getProximity(lastEarningsDate, nextEarningsDate) {

    const now = moment();
    const todayStart = now.clone().startOf('day');
    const thisWeekStart = now.clone().startOf('week');
    const lastWeekStart = thisWeekStart.clone().subtract(1, 'week');
    const nextWeekStart = thisWeekStart.clone().add(1, 'week');
    const twoWeeksStart = thisWeekStart.clone().add(2, 'week');
    const last = lastEarningsDate;
    const next = nextEarningsDate;

    //reported last week
    if (last.isSameOrAfter(lastWeekStart) && last.isBefore(thisWeekStart)) return "B1";

    //this week - already reported
    if (last.isSameOrAfter(thisWeekStart) && last.isBefore(todayStart)) return "B0";

    //today - before
    if (last.isSame(now, "d") && last.isBefore(now)) return "B";
    if (next.isSame(now, "d") && next.isBefore(now)) return "B";

    //today - after
    if (last.isSame(now, "d") && last.isSameOrAfter(now)) return "A";
    if (next.isSame(now, "d") && next.isSameOrAfter(now)) return "A";

    //this week - not reported yet
    if (next.isSameOrAfter(now) && next.isBefore(nextWeekStart)) return "A0";

    //reports next week
    if (next.isSameOrAfter(nextWeekStart) && next.isBefore(twoWeeksStart)) return "A1";

    //default
    return "";

  }

}