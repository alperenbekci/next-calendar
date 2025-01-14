export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const isPastDay = (year: number, day: number) => {
  const today = new Date();
  const dayDate = new Date(year, 0, day);
  return dayDate < today;
};

export const daysLeftText = (currentYear: number, today: Date) => {
  if (currentYear > today.getFullYear()) {
    return "We are not in this year yet.";
  } else if (currentYear < today.getFullYear()) {
    return "All days have passed for this year.";
  } else {
    const daysPassed = Math.ceil(
      (today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return `${365 + (isLeapYear(currentYear) ? 1 : 0) - daysPassed} days left`;
  }
};
