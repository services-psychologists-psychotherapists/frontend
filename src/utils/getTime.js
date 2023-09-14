export default function getTime(time) {
  const hours = `0${time}`.slice(-2);
  return `${hours}:00 - ${hours}:50`;
}
