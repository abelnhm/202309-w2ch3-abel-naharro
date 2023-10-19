import { ArrayFuntions } from "./array";

describe("LENGTH TEST - List test arrays of length function", () => {
  test("With send array, result should be array length", () => {
    const list = [1, 2, 3];
    const expectResult = 3;
    const result = ArrayFuntions.arrayLength(list);
    expect(result).toBe(expectResult);
  });
});

describe("PUSH TEST - List test arrays of push function", () => {
  test("With send array, result should be to add new last element", () => {
    const list = [1, 2];
    const newValue = 3;
    const expectResult = [1, 2, 3];
    const result = ArrayFuntions.arrayPush(list, newValue);
    expect(result).toEqual(expectResult);
  });
});

describe("POP TEST - List test arrays of pop function", () => {
  test("With send array, result should be to delete last element", () => {
    const list = [1, 2, 3];
    const expectResult = [1, 2];
    const result = ArrayFuntions.arrayPop(list);
    expect(result).toEqual(expectResult);
  });
});

describe("SHIFT TEST - List test arrays of shift function", () => {
  test("With send array, result should be to add first element", () => {
    const list = [1, 2, 3];
    const newValue = 0;
    const expectResult = [0, 1, 2, 3];
    const result = ArrayFuntions.arrayShift(list, newValue);
    expect(result).toEqual(expectResult);
  });
});

describe("UNSHIFT TEST - List test arrays of unshift function", () => {
  test("With send array, result should be to delete first element", () => {
    const list = [1, 2, 3];
    const expectResult = [2, 3];
    const result = ArrayFuntions.arrayUnshift(list);
    expect(result).toEqual(expectResult);
  });
});

describe("SOME TEST - List test arrays of some function", () => {
  test("With send array, result should be to does´t find element", () => {
    const list = [1, 2, 3];
    const valueSearch = "A";
    const expectResult = false;
    const result = ArrayFuntions.arraySome(list, valueSearch);
    expect(result).toEqual(expectResult);
  });

  test("With send array, result should be to find element", () => {
    const list = [1, 2, 3];
    const valueSearch = 2;
    const expectResult = true;
    const result = ArrayFuntions.arraySome(list, valueSearch);
    expect(result).toBe(expectResult);
  });
});

describe("FIND TEST - List test arrays of find function", () => {
  test("With send array, result should be to find element", () => {
    const list = [1, 2, 3];
    const valueSearch = 2;
    const expectResult = valueSearch;
    const result = ArrayFuntions.arrayFind(list, valueSearch);
    expect(result).toBe(expectResult);
  });
});

describe("FIND TEST - List test arrays of find function", () => {
  test("With send array, result should be to find element", () => {
    const list = [1, 2, 3];
    const valueSearch = 2;
    const expectResult = true;
    const result = ArrayFuntions.arrayInclude(list, valueSearch);
    expect(result).toBe(expectResult);
  });
});

describe("FIND TEST - List test arrays of find function", () => {
  test("With send array, result should be to find element", () => {
    const list = [1, 2, 3];
    const valueSearch = 2;
    const expectResult = true;
    const result = ArrayFuntions.arrayInclude(list, valueSearch);
    expect(result).toBe(expectResult);
  });
});

describe("FINDINDEX TEST - List test arrays of findIndex function", () => {
  test("With send array, result should be to find index element", () => {
    const list = [1, 2, 3];
    const valueSearch = 2;
    const expectResult = 1;
    const result = ArrayFuntions.arrayFindIndex(list, valueSearch);
    expect(result).toBe(expectResult);
  });
});

describe("INDEXOF TEST - List test arrays of indexOF function", () => {
  test("With send array, result should be to find index element", () => {
    const list = [1, 2, 3];
    const valueSearch = 2;
    const expectResult = 1;
    const result = ArrayFuntions.arrayIndexOf(list, valueSearch);
    expect(result).toBe(expectResult);
  });
});

describe("JOIN TEST - List test arrays of join function", () => {
  test("With send array, result should be to gather elements", () => {
    const list = ["A", "B", "E", "L"];
    const expectResult = "ABEL";
    const result = ArrayFuntions.arrayJoin(list);
    expect(result).toBe(expectResult);
  });
});
