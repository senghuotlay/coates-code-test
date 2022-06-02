export const getWeekDayFromTimeStamp = (dateTimeString: EpochTimeStamp) =>
  new Date(dateTimeString * 1000).toLocaleString("en-us", {
    weekday: "long",
  });
