class Shape
{
  constructor(name, renderer)
  {
    this.renderer = renderer
    this.name = name
  }

  toString() {
    return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`
  }
}

class Renderer
{
  get whatToRenderAs() {}
}

class VectorRenderer extends Renderer
{
    get whatToRenderAs() {
    return 'lines'
    }
}

class RasterRenderer extends Renderer
{
  get whatToRenderAs() {
    return 'pixels'
  }
}

class Triangle extends Shape
{
  constructor(renderer)
  {
    super('triangle', renderer);
  }
}

class Square extends Shape
{
  constructor(renderer)
  {
    super('square', renderer);
  }
}


const rasteredTri = new Triangle(new RasterRenderer())
const vectoredTri = new Triangle(new VectorRenderer())
const rasteredSq = new Square(new RasterRenderer())
const vectoredSq = new Square(new VectorRenderer())

console.log(rasteredSq.toString())