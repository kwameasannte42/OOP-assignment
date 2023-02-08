//1
let duck = {
  name: "Kay",
  numLegs: 4,
};

//2
let dog = {
  name: "Spot",
  numLegs: 4,
};
console.log(dog.name);
console.log(dog.numLegs);

//3
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has 4 legs.";
  },
};
dog.sayLegs();

//4
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};
dog.sayLegs();

//5
function Dog() {
  this.name = "Fred";
  this.color = "red";
  this.numLegs = 5;
}

//6
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
let hound = new Dog();

//7
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("Harold", "green");

//8
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(7);

myHouse instanceof House;

//8
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

//9
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
