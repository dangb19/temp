import { alertMapping } from "./mapping";

export const formatNumber = (number, unit) => {
  const locale = navigator.language;

  const formattedNumber = new Intl.NumberFormat(locale, {
    style: unit ? "unit" : undefined,
    unit: unit || undefined,
  }).format(Math.round(number));

  return formattedNumber;
};

export const formatDateIntl = (dateTimeString, option = "hour:minute") => {
  const options = {
    "hour:minute": {
      hour: "numeric",
      minute: "numeric",
    },
    hour: {
      hour: "numeric",
    },
    dayweek: {
      weekday: "short",
    },
    "day-month": {
      day: "numeric",
      month: "short",
    },
  };

  const formattedDate = new Intl.DateTimeFormat(
    "en-US",
    options[option]
  ).format(new Date(dateTimeString));

  return formattedDate;
};

export const getWeatherCodeDayNight = (weatherCode, timeStamps) => {
  const date = new Date(timeStamps);
  const hours = date.getHours();

  if (hours >= 6 && hours < 18) {
    return weatherCode * 10;
  } else {
    return weatherCode * 10 + 1;
  }
};

export const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export const getWeatherAlert = (weatherCode) => {
  if (!alertMapping.weatherCodes[weatherCode]) return null;

  return {
    title:
      alertMapping.alert[alertMapping.weatherCodes[weatherCode]].split(
        " * "
      )[0],
    message:
      alertMapping.alert[alertMapping.weatherCodes[weatherCode]].split(
        " * "
      )[1],
  };
};
