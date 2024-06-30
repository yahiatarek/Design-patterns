// adapter pattern helps getting the interface you want from the interface you have

class Square
{
  constructor(side)
  {
    this.side = side;
  }
}

function area(rectangle)
{
  return rectangle._width * rectangle._height;
}

class SquareToRectangleAdapter {
  constructor(sq) {
    this._width = sq.side
    this._height = sq.side
  }
}

let sq = new Square(5);
area(new SquareToRectangleAdapter(sq));

console.log(area(new SquareToRectangleAdapter(sq)))