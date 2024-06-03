export const generateRandomId = (length: number = 16): string => {
  let randomId = "";
  for (let i = 0; i < length; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    randomId += randomDigit.toString();
  }
  return randomId;
};
