/*
// @ts-ignore
if (typeof Object.groupBy == typeof undefined ||
  // @ts-ignore
  typeof Array.prototype.group == typeof undefined ||
  // @ts-ignore
  typeof Array.prototype.groupToMap == typeof undefined) {
  //@ts-ignore
  Object.groupBy = (arr: any[], callback: (...args: any[]) => any): { [key: string]: any[] } => {
    console.log('using polyfill')
    return arr.reduce((acc: { [key: string]: any[] } = {}, ...args) => {
      const key = callback(...args);
      acc[key] ??= [];
      acc[key].push(args[0]);
      return acc;
    }, {});
  };
}
*/

//@ts-ignore
const hasGroup = typeof Object.groupBy === typeof undefined || typeof Array.groupToMap === typeof undefined || typeof Array.group === typeof undefined;
if (hasGroup) {
  const groupBy = (arr: any[], callback:Function) => {
    return arr.reduce((acc = {}, ...args: any[]) => {
      console.log('using polyfill')
      const key = callback(...args);
      acc[key] ??= []
      acc[key].push(args[0]);
      return acc;
    }, {});
  };

  //@ts-ignore
  if (typeof Object.groupBy === typeof undefined) {
    //@ts-ignore
    Object.groupBy = groupBy;
  }

  //@ts-ignore
  if (typeof Array.groupToMap === typeof undefined) {
    //@ts-ignore
    Array.groupToMap = groupBy;
  }

  //@ts-ignore
  if (typeof Array.group === typeof undefined) {
    //@ts-ignore
    Array.group = groupBy;
  }
}

/*
interface Object {
  groupBy<T>(arr: T[], callback: (item: T) => string): Record<string, T[]>;
}

if (typeof Object.prototype.groupBy === 'undefined') {
  Object.prototype.groupBy = function <T>(arr: T[], callback: (item: T) => string): Record<string, T[]> {
    return arr.reduce((acc: Record<string, T[]>, ...args: T[]) => {
      const key = callback(...args);
      acc[key] ??= [];
      acc[key].push(args[0]);
      return acc;
    }, {});
  };
}
*/

/*
interface ObjectConstructor {
  groupBy<T>(arr: T[], callback: (item: T) => string): Record<string, T[]>;
}

if (typeof Object.prototype.groupBy === 'undefined') {
  Object.prototype.groupBy = <T>(arr: T[], callback: (item: T) => string): Record<string, T[]> => {
    return arr.reduce((acc: Record<string, T[]>, currentValue: T) => {
      const key = callback(currentValue);
      acc[key] ??= [];
      acc[key].push(currentValue);
      return acc;
    }, {});
  };
}
*/
