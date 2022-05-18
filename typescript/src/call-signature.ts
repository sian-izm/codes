type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}

export function doSomething(fn: DescribableFunction) {
  return fn.description + " returned " + fn(6);
}