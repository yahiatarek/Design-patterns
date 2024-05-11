class Car
{
  constructor() { }
  color = ''
  model = ''

  toString()
  {
    return `Car is of model ${this.model} and a color of ${this.color}`;
  }
}

class CarBuilder {
  constructor(car = new Car) {
    this.car = car
   }
  
  ofModel(model) {
    this.car.model = model
    return this
  }

  ofColorMix(color1, color2) {
    let colB = new ColorBuilder(this.car, color1, color2)
    colB.buildColorMix()
    return this
  }

  build() {
    return this.car
  }
}

class ColorBuilder extends CarBuilder{
  constructor(car, c1, c2) {
    super(car)
    this.c1 = c1
    this.c2 = c2
  }

  colorMap = new Map([
    ["yellow red", 'green'],
    ["green red", 'yellow'],
    ["blue red", 'lila']
  ])
  
  buildColorMix() {
    let color = this.c1 + ' ' + this.c2
    this.car.color = this.colorMap.get(color)
  }
}


let cb = new CarBuilder();
let car = cb.ofModel('BMW').ofColorMix('yellow', 'red').build();
console.log(car.toString());
