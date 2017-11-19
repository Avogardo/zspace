const toChartData = (chartData) => {
    const dataWithTime = chartData.values.map(value => {
        value[0] = formatDate(new Date(value[0]));
        return value;
    });

    return [chartData.columns].concat(dataWithTime);
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

  return `${day} ${monthNames[monthIndex]} ${year} ${hour}:${minutes}:${seckonds}`;
}

export const helpers = {
  toChartData,
};
