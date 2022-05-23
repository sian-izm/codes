interface StringConstructable { 
  new (n: string): ComesFromString;
}

interface ComesFromString {
  name: string;
}

export class MadeFromString implements ComesFromString {
  constructor(public name: string) {
    console.log('ctor invoked');
  }
}

export function makeObj(n: StringConstructable) {
  return new n('hello');
}