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
  const _selected = array.slice(start, end);
  const temp = {};
  _selected.forEach((obj) =>
    Object.entries(obj).forEach(([key, val]) => {
      temp[key] ? temp[key].push(val) : (temp[key] = [val]);
    })
  );
  return temp;
}
