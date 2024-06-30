const obj = {
  prop: 'prop'
}

  let copy = JSON.parse(JSON.stringify(obj));
  copy.remove = 'remove'
  console.log(copy)

// -----------------------------------------------------------------------------------------------
class Address
{
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  toString()
  {
    return `Address: ${this.streetAddress}, ` +
      `${this.city}, ${this.country}`;
  }
}

  class Person
{
  constructor(name, address)
  {
    this.name = name;
    this.address = address; //!
  }

  toString()
  {
    return `${this.name} lives at ${this.address}`;
  }

  greet()
  {
    console.log(
      `Hi, my name is ${this.name}, ` +
      `I live at ${this.address.toString()}`
    );
  }
  }

  let john = new Person('John', new Address('123 London Road', 'London', 'UK'));

  let jane = JSON.parse(JSON.stringify(john));

  jane.name = 'Jane';
  jane.address.streetAddress = '321 Angel St';

  john.greet();
  // jane.greet();
  // The reason why jane.greet() does not work is because the JSON.parse(JSON.stringify(john)) 
  // method creates a deep copy of the john object, but all methods (such as greet and toString) 
  // are removed.JSON only supports the serialization of data, not of functions.

  // Explanation:
  // When you call JSON.stringify() on an object, only the object's own enumerable properties 
  // are converted to a JSON string.Methods and prototypes are not taken into account.JSON.parse() 
  // then creates a new object from this JSON string, which only contains the original data, but no methods.

  // Solution:
  // To ensure that jane has the same methods as john, you need to create a copy of the object that retains the prototypes and methods. One way to do this is to use a manual copy method or a library like lodash, or you can explicitly reassign the constructor and methods.
  
console.log(jane)
