export const getNewId: () => number = () => {
  return Math.floor(Math.random() * 900000 + 100000);
};
