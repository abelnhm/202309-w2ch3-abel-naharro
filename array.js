export const arrayLength = (a) => {
  let count = 0;
  // eslint-disable-next-line no-unused-vars
  for (const _key of a) {
    count++;
  }

  return count;
};

export const arrayPush = (a, b) => {
  const arraySize = a.length;
  a[arraySize] = b;
  return a;
};

export const arrayPop = (a) => {
  const arraySize = arrayLength(a);
  const lastValue = arraySize - 1;

  let count = 0;
  const auxArray = [];

  for (const valueItem of a) {
    if (count !== lastValue) {
      auxArray[count] = valueItem;
    }

    count++;
  }

  return auxArray;
};

export const arrayShift = (a, b) => {
  let count = 0;
  const auxArray = [];

  for (const valueItem of a) {
    if (count === 0) {
      auxArray[count] = b;
      count++;
    }

    auxArray[count] = valueItem;
    count++;
  }

  return auxArray;
};

export const arrayUnshift = (a) => {
  let count = 0;
  const auxArray = [];

  for (const valueItem of a) {
    if (count !== 0) {
      auxArray[count - 1] = valueItem;
    }

    count++;
  }

  return auxArray;
};

export const arraySome = (a, b) => {
  for (const valueItem of a) {
    if (valueItem === b) return true;
  }

  return false;
};

export const arrayFind = (a, b) => {
  for (const valueItem of a) {
    if (valueItem === b) return valueItem;
  }

  return 0;
};

export const arrayInclude = (a, b) => {
  for (const valueItem of a) {
    if (valueItem === b) return true;
  }

  return false;
};

export const arrayFindIndex = (a, b) => {
  let count = 0;

  for (const valueItem of a) {
    if (valueItem === b) return count;
    count++;
  }

  return -1;
};

export const arrayIndexOf = (a, b) => {
  let count = 0;

  for (const valueItem of a) {
    if (valueItem === b) return count;
    count++;
  }

  return -1;
};

export const arrayJoin = (a) => {
  let word = "";
  for (const valueItem of a) {
    word += valueItem;
  }

  return word;
};
