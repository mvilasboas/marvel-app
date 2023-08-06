export default function limitString(string: string, limit: number): string {
  let newString = string ? string.slice(0, limit) + '...' : '';
  return newString;
}
