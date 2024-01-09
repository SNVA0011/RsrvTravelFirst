export const addDate = (date, day) => {
  date.setDate(date.getDate() + day);
  return date;
};

export const totalTravelTime = (time) => {
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}h ${minutes}m`;
};
