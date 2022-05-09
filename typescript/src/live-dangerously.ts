export function liveDangerously(x?: number) {
  if (x === undefined) {
    return "HOGE";
  } else {
    return x!.toFixed();
  }
}
