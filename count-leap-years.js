function countLeapYears(date) {
    let count = 0;

    let year = date.getFullYear()-1;
    let month = date.getMonth;
    let day = date.getDate;

    if ((month > 2) || (month === 2 && day === 29)) {
        year++;
    }

    for (let y = 1; y <= year; y++) {
      if (isLeapYear(y)) {
        count++;
      }
    }
  
    return count;
  }
  
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

console.log(countLeapYears(new Date('1664-08-31'))); // Output: 6 (Leap years between year 1 and 2024 are: 4, 8, 12, 16, 20, and 24)