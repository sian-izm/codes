export function printName(first: string, last?: string): string {
  if ( last !== undefined ) {
    return last;
  } else {
    return first;
  }
}
