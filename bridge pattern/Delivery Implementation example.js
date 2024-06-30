// connecting different components together
// through abstractions mainly separating the abstraction of something from the implementation of it e.g
// separating the implementation of a circle from the way to render it so we can extend freely 
// the rendering options

// Delivery Implementation example

class DeliveryMethod {
  deliver(item) {
    throw new Error("This method should be overridden!");
  }
}

class TruckDelivery extends DeliveryMethod {
  deliver(item) {
    console.log(`Delivering ${item} by truck`);
  }
}

class ShipDelivery extends DeliveryMethod {
  deliver(item) {
    console.log(`Delivering ${item} by ship`);
  }
}

// Abstract Class Furniture
class Furniture {
  constructor(deliveryMethod) {
    this.deliveryMethod = deliveryMethod;
  }

  manufacture() {
    throw new Error("This method should be overridden!");
  }

  deliver() {
    throw new Error("This method should be overridden!");
  }
}

// Concrete Abstraction Chair
class Chair extends Furniture {
  constructor(deliveryMethod) {
    super(deliveryMethod);
  }

  manufacture() {
    console.log("Manufacturing a chair");
  }

  deliver() {
    this.deliveryMethod.deliver("Chair");
  }
}

// Concrete Abstraction Table
class Table extends Furniture {
  constructor(deliveryMethod) {
    super(deliveryMethod);
  }

  manufacture() {
    console.log("Manufacturing a table");
  }

  deliver() {
    this.deliveryMethod.deliver("Table");
  }
}

// Implementation of Bridge Pattern
let truckDelivery = new TruckDelivery();
let shipDelivery = new ShipDelivery();

let chair = new Chair(truckDelivery);
chair.manufacture();
chair.deliver(); // Task: Manufacturing a chair, Delivering Chair by truck

let table = new Table(shipDelivery);
table.manufacture();
table.deliver(); // Task: Manufacturing a table, Delivering Table by ship
