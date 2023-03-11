export const isEven = (num) => (num % 2 === 0);

export const randomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};
