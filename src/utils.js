const randomNumber = (min, max) => {
  let result = 0;
  result = Math.floor(min + Math.random() * (max + 1 - min));
  return result;
};

export default randomNumber;
