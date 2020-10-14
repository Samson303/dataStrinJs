// Hash Tables
// key values are put through a hasch function and given a hash

var hash = (string, max) => {
    var hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }

    // divide by number of buckets and return remainder
    return hash % max;
};

let HashTable = function() {
    let storage = [];
    const storageLimit = 4;

    this.print = function() {
        console.log(storage);
    };

    this.add = function(key, vlaue) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, vlaue]
            ];
        } else {
            var inserted = false;
            // to check if the key has already been inserted
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };
    this.remove = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].lenght; i++) {
                if (storage[index][0] === key) {
                    delete Storage[index][i];
                }
            }
        }
    };
    this.lookup = function(key) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < storage[index].lenght; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };
};

console.log(hash('Sam', 20));

const ht = new HashTable();
ht.add('sam', 20);
ht.add('Malte', 22);
ht.add('yo', 24);
ht.add('jjj', 2);
ht.print();