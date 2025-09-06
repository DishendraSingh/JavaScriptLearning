class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
class Cat extends Animal {
  speak() {
    console.log(`${this.name} Moew.`);
  }
}
// Usage
const dog = new Dog("Tommy");
dog.speak(); // Tommy barks.
const cat =new Cat("Pussy")
cat.speak()
