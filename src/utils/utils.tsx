export const limitString = (string: string, limit: number): string => {
  let newString = string ? string.slice(0, limit) + '...' : '';
  return newString;
};

export const getReadableDate = (param: string): string => {
  let readableDate = '';
  const date = new Date(param);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  readableDate = `${day}/${month}/${year}`;
  return readableDate;
};
