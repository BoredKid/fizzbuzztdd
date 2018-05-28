exports.NumberToFizzBuzz = (num) => {
  if (num && Number.isInteger(num)) {
    let result = '';
    if (num % 3 === 0) result += 'fizz';
    if (num % 5 === 0) result += 'buzz';
    return result.length > 0 ? result : num;
  }
  return -1;
};

exports.CountWithFizzBuzz = (num) => {
  const tab = [];
  if (num && Number.isInteger(num) && num > 0) {
    for (let i = 1; i <= num; i += 1) {
      tab.push(this.NumberToFizzBuzz(i));
    }
  }
  return tab;
};
