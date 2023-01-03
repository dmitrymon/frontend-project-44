// eslint-disable-next-line max-len
const generateRandomNumber = (max = 100, min = 0) => (Math.floor(Math.random() * (max - min + 1)) + min);

export default generateRandomNumber;
