const toChartData = (chartData) => {
    const values = chartData.values.map(value => value[1]);
    const dates = chartData.values.map(value => {
      if (value[0] > 9999999999999) {
        return formatDate(new Date(value[0] / 1000000));
      } else {
        return formatDate(new Date(value[0]));
      }
    });

    return {
      values,
      dates,
    };
};

const formatDate = (date) => {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "Listopad", "Grudzień"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seckonds = date.getSeconds();

  // return `${hour}:${minutes}:${seckonds}`;
  // return `${day} ${monthNames[monthIndex]} ${year} ${hour}:${minutes}:${seckonds}`;
  return `${day}-${monthIndex + 1} ${hour}:${minutes}:${seckonds}`;
}

export const helpers = {
  toChartData,
};
