/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
export function makeSumList(array, start, end) {
  return array
    .slice(start, end)
    .reduce(
      (acc, obj) => (
        Object.entries(obj).forEach(
          ([key, val]) => (acc[key] = (acc[key] || 0) + val)
        ),
        acc
      ),
      {}
    );
}

export function getWeeklyData(array, start, end) {
  const selected = array.slice(start, end);
  const temp = {};
  selected.forEach((obj) =>
    Object.entries(obj).forEach(([key, val]) => {
      temp[key] ? temp[key].push(val) : (temp[key] = [val]);
    })
  );
  return temp;
}

export function setOptions(firstFilter, secondFilter) {
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false
    },
    stacked: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        ticks: {
          callback: function (value, index, ticks) {
            if (firstFilter === '광고비용' || '매출') return value + '원';
            if (firstFilter === '광고수익률') return value + '%';
            return value + '회';
          }
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: function (value, index, ticks) {
            if (secondFilter === '광고비용' || '매출') return value + '원';
            if (secondFilter === '광고수익률') return value + '%';
            return value + '회';
          }
        }
      }
    }
  };

  return options;
}
