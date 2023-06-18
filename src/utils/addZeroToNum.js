const addZeroToNum = (number) => {
  if (number >= 10) return `${number}`;
  return `0${number}`;
};

export default addZeroToNum;
