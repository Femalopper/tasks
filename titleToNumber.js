// This file contains solution to the following problem:
// https://leetcode.com/problems/excel-sheet-column-number/

const titleToNumber = (columnTitle) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const { length } = alphabet;
  let result = 0;
  let letterIndex = 0;
  for (let i = columnTitle.length - 1; i >= 0; i -= 1) {
    const columnTitleLetterPosition = alphabet.indexOf(columnTitle[letterIndex]) + 1;
    result += length ** i * columnTitleLetterPosition;
    letterIndex += 1;
  }
  return result;
};
