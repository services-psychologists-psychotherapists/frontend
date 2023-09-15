import { MONTH_NAME } from '../constants/constants';

export default function getMonthName(date) {
  const month = MONTH_NAME[date.getMonth() + 1];
  if (month.slice(-1) === 'т') {
    return `${month.slice(0, month.length - 1)}а`;
  }
  return `${month.slice(0, month.length - 1)}я`;
}
