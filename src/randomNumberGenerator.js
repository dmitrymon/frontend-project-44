const generateRandomNumber = (max = 100, min = 0) => {
  const randomized = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomized;
};
export default generateRandomNumber;
