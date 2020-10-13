// SETS

function mySet() {
    // this var holds the elements in a collection
    var collection = [];

    // method for checking the presence of an element
    this.has = function(element) {
        return collection.indexOf(element) !== -1;
    };

    // to return the values of the sets

    this.values = function() {
        return collection;
    };

    // this method is for adding an element to the set

    this.add = function(element) {
        if (!this.has(element)) {
            collection.push(element);
            return "element added";
        }

        return "element already exists";
    };

    //method for removing an element from a set
    this.remove = function(element) {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return "element removed";
        }

        return "element no in your set ";
    };

    // this will return the size of the collection
    this.size = () => collection.length;

    //this will return the union of two sets

    this.union = function(otherSet) {
        const unionSet = new Set();
        const firstSet = this.values();
        const secondSet = otherSet.values();
        firstSet.forEach((a) => unionSet.add(a));
        secondSet.forEach((a) => unionSet.add(a));

        return unionSet;
    };

    // this is to get the intersection of two sets
    this.intersection = function(otherSet) {
        const intersectionSet = new Set();
        const firstSet = this.values;
        firstSet.forEach(function(a) {
            if (otherSet.has(a)) {
                intersectionSet.add(a);
            }
        });

        return intersectionSet ? intersectionSet : undefined;
    };

    // This is to view the difference between two sets

    this.difference = function(otherSet) {
        const differenceSet = new Set();
        const firstSet = this.values;
        firstSet.forEach(function(a) {
            if (!otherSet.has(a)) {
                differenceSet.add(a);
            }
        });

        return differenceSet ? differenceSet : undefined;
    };

    // this is to check if the set is a subset of another set 
    //returns true if chosen set is Subset of otherSet
    this.subset = function(otherSet) {
        const firstSet = this.values();
        return firstSet.every((value) => otherSet.has(value))
    }
}