export function greeter(fn: (a: string) => string): string {
  return fn("Hello hogehoge");
}

export function printText(s: string) {
  return `${s} + ${s}`;
}