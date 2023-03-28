export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}
