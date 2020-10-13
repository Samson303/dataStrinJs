let letters = [];
let word = "racecar";
let revWord = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  revWord += letters.pop();
}

// actually create a stack
let Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and return the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) return undefined;

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //Peek, returns the value at the end of the stack

  this.peek = function () {
    return this.storage[this.count - 1];
  };

  this.size = function () {
    return this.count;
  };
};

const myStack = new Stack();
