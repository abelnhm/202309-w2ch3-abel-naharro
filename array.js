export class ArrayFuntions {
  /*
    Name;
    age;

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  */

  static arrayLength(a) {
    let count = 0;
    for (const _key of a) {
      count++;
    }

    return count;
  }

  static arrayPush = (a, b) => {
    const arraySize = a.length;
    a[arraySize] = b;
    return a;
  };

  static arrayPop = (a) => {
    const arraySize = this.arrayLength(a);
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

  static arrayShift = (a, b) => {
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

  static arrayUnshift = (a) => {
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

  static arraySome = (a, b) => {
    for (const valueItem of a) {
      if (valueItem === b) return true;
    }

    return false;
  };

  static arrayFind = (a, b) => {
    for (const valueItem of a) {
      if (valueItem === b) return valueItem;
    }

    return 0;
  };

  static arrayInclude = (a, b) => {
    for (const valueItem of a) {
      if (valueItem === b) return true;
    }

    return false;
  };

  static arrayFindIndex = (a, b) => {
    let count = 0;

    for (const valueItem of a) {
      if (valueItem === b) return count;
      count++;
    }

    return -1;
  };

  static arrayIndexOf = (a, b) => {
    let count = 0;

    for (const valueItem of a) {
      if (valueItem === b) return count;
      count++;
    }

    return -1;
  };

  static arrayJoin = (a) => {
    let word = "";
    for (const valueItem of a) {
      word += valueItem;
    }

    return word;
  };
}
