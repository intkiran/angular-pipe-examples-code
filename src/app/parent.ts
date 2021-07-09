export class Parent {
  id: number;
  child: Child;
}

export class Child {
  name: string;
  parent: Parent;
}
