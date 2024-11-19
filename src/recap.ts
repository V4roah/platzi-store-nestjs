const myName = 'Daniel';
const myAge = 30;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(1, 2);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'Nicolas');
nicolas.getSummary();
