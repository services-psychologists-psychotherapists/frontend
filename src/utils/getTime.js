export default function getTime(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  return `${hours}:00 - ${hours}:50`;
}
