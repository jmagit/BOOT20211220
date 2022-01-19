export interface Comparator<T> {
  (a: T, b: T): boolean;
}

export function convertValue(value: any): any {
  if(!isNaN(+value))
    return +value;
  if(!isNaN((new Date(value)).valueOf()))
    return (new Date(value)).valueOf();
  return value;
}
