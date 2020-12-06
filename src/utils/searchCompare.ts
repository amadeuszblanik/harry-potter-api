const searchCompare = (phrase: string, compareValue: string) =>
  compareValue.toLowerCase().includes(phrase.toLowerCase());

export default searchCompare;
