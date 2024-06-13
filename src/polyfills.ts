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
