const message: string = 'Hello! TypeScript!';
const hoge: number[] = [1,2,3];
let unuable: void = undefined;

function testFunc(message: string, count?: number) {
  console.log(count)
  return message!;
}

export default class TestTarget {
  constructor(public name){
  }
}
