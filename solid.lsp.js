class Rectangle
{
  constructor(width, height)
  {
    this._width = width;
    this._height = height;
  }

  get width() { return this._width; }
  get height() { return this._height; }

  set width(value) { this._width = value; }
  set height(value) { this._height = value; }

  get area()
  {
    return this._width * this._height;
  }

  toString()
  {
    return `${this._width}×${this._height}`;
  }
}

class Square extends Rectangle
{
  constructor(size)
  {
    super(size, size);
  }

  set width(value)
  {
    this._width = this._height = value;
  }

  set height(value)
  {
    this._width = this._height = value;
  }
}

// liskov says a func that can handle a base class can also
// handle a derived class without breaking the functionality 
// which fails here because useIt will not be able to give the correct area for both
let useIt = function(rc)
{
  let width = rc._width;
  rc.height = 10;
  console.log(
    `Expected area of ${10*width}, ` +
    `got ${rc.area}`
  );
};

let rc = new Rectangle(2,3);
useIt(rc);

let sq = new Square(5);
useIt(sq);