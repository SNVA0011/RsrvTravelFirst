export const currentMonths = (states) => {
  let currentMonthblanks = [];
  let currentMonthDays = [];
  let currentMonthrows = [];
  let currentMonthcells = [];
  for (
    let i = 0;
    i < new Date(states.getFullYear(), states.getMonth(), 1).getDay();
    i++
  ) {
    currentMonthblanks.push("");
  }
  const currenttotaldays = new Date(
    states.getFullYear(),
    states.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= currenttotaldays; i++) {
    currentMonthDays.push(new Date(states.getFullYear(), states.getMonth(), i));
  }
  const currentTotalSlot = [...currentMonthblanks, ...currentMonthDays];
  currentTotalSlot.forEach((row, i) => {
    if (i % 7 !== 0) {
      currentMonthcells.push(row);
    } else {
      currentMonthrows.push(currentMonthcells);
      currentMonthcells = [];
      currentMonthcells.push(row);
    }
    if (i === currentTotalSlot.length - 1) {
      currentMonthrows.push(currentMonthcells);
      currentMonthrows[0].length === 1 &&
        currentMonthrows[0].unshift("", "", "", "", "", "");
      currentMonthrows[0].length === 2 &&
        currentMonthrows[0].unshift("", "", "", "", "");
      currentMonthrows[0].length === 3 &&
        currentMonthrows[0].unshift("", "", "", "");
      currentMonthrows[0].length === 4 &&
        currentMonthrows[0].unshift("", "", "");
      currentMonthrows[0].length === 5 && currentMonthrows[0].unshift("", "");
      currentMonthrows[0].length === 6 && currentMonthrows[0].unshift("");
    }
  });
  return currentMonthrows;
};

export const nextMonths = (states) => {
  let nextMonthblanks = [];
  let nextMonthDays = [];
  let nextMonthrows = [];
  let nextMonthcells = [];
  for (
    let i = 0;
    i < new Date(states.getFullYear(), states.getMonth() + 1, 1).getDay();
    i++
  ) {
    nextMonthblanks.push("");
  }
  const nexttotalDays = new Date(
    states.getFullYear(),
    states.getMonth() + 1 + 1,
    0
  ).getDate();

  for (let i = 1; i <= nexttotalDays; i++) {
    nextMonthDays.push(
      new Date(states.getFullYear(), states.getMonth() + 1, i)
    );
  }
  const nextTotalSlot = [...nextMonthblanks, ...nextMonthDays];
  nextTotalSlot.forEach((row, i) => {
    if (new Date(row).getDay() % 7 !== 0) {
      nextMonthcells.push(row);
    } else {
      nextMonthrows.push(nextMonthcells);
      nextMonthcells = [];
      nextMonthcells.push(row);
    }
    if (i === nextTotalSlot.length - 1) {
      nextMonthrows.push(nextMonthcells);
      nextMonthrows[0].length === 1 &&
        nextMonthrows[0].unshift("", "", "", "", "", "");
      nextMonthrows[0].length === 2 &&
        nextMonthrows[0].unshift("", "", "", "", "");
      nextMonthrows[0].length === 3 && nextMonthrows[0].unshift("", "", "", "");
      nextMonthrows[0].length === 4 && nextMonthrows[0].unshift("", "", "");
      nextMonthrows[0].length === 5 && nextMonthrows[0].unshift("", "");
      nextMonthrows[0].length === 6 && nextMonthrows[0].unshift("");
    }
  });
  return nextMonthrows;
};
