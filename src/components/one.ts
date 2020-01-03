interface BasicClass {
  sayHello: () => string;
}

export class One implements BasicClass {
  static sayHello = (): string => {
    return "hello one!";
  };
}
