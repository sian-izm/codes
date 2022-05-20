type DescribableFunction = {
  description: string;
  someProperty: (someArg: number) => boolean;
};

export function doSomething(fn: DescribableFunction): string {
  return fn.description + " returned " + fn.someProperty(6);
}

