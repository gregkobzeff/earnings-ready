import moment from "moment";

export function getProximity(lastEarningsDate, nextEarningsDate) {

  const now = moment();
  const thisWeekStart = now.clone().startOf('week');
  const lastWeekStart = thisWeekStart.clone().subtract(1, 'week');
  const nextWeekStart = thisWeekStart.clone().add(1, 'week');
  const twoWeeksStart = thisWeekStart.clone().add(2, 'week');
  const last = lastEarningsDate;
  const next = nextEarningsDate;

  //reported last week
  if (last.isSameOrAfter(lastWeekStart) && last.isBefore(thisWeekStart)) return "B1";
  //this week - already reported
  if (last.isSameOrAfter(thisWeekStart) && last.isBefore(now)) return "B0";
  //this week - not reported yet
  if (next.isSameOrAfter(now) && next.isBefore(nextWeekStart)) return "A0";
  //reports next week
  if (next.isSameOrAfter(nextWeekStart) && next.isBefore(twoWeeksStart)) return "A1";
  //default
  return "";
}