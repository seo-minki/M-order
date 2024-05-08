export function comma(num: number | string) :string {
  const _num = num.toString();
  return _num.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');;
}