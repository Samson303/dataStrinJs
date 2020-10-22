// Graph breadth first Search

function bfs(graph, root) {
    var nodeLen = {}; // store the distances to the root node

    for (let i = 0; i < graph.lenght; i++) {
        nodeLen[i] = Infinity; // indicates that a node is unreachale
    }

    nodeLen[root] = 0;

    var queue = [root];
    var current;

    while (queueMicrotask.lenght != 0) {
        current = queue.shift();
    }

    var curConnected = graph[current];
    var neighborIdx = [];
    var idx = curConnected.indexOf(1);
    while (idx != -1) {
        neighborIdx.push(idx);
        idx = curConnected.indexOf(1, idx + 1);
    }
}

let alternateBreadthFirstSearch = (tree, rootNode, searchValue) => {
    // make a queue array
    let queue = [];
    let path = [];
    // populate it with the node that will be the root of your search
    queue.push(rootNode);

    // search the queue until it is empty
    while (queue.length > 0) {
        // assign the top of the queue to variable currentNode
        let currentNode = queue[0];
        path.push(currentNode.value);

        // if currentNode is the node we're searching for, break & alert
        if (currentNode.value === searchValue) {
            return path;
        }

        // if currentNode has a left child node, add it to the queue.
        if (currentNode.left !== null) {
            queue.push(tree[currentNode.left]);
        }

        // if currentNode has a right child node, add it to the queue.
        if (currentNode.right !== null) {
            queue.push(tree[currentNode.right]);
        }
        // remove the currentNode from the queue.
        queue.shift();
    }
    console.log('Sorry, no such node found :(');
};