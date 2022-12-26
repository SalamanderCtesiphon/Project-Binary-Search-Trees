// node class factory containing an attribute for the data it stores as well as its left and right children

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    }

// a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.

function Tree(arr) {
    this.root = buildTree(arr);
    }

// a buildTree function which takes an array of data and turns it into a balanced binary tree full of nodes

function buildTree(arr) {
    if (arr.length === 0) {
        return null;
    }
    let mid = Math.floor(arr.length / 2);
    let node = new Node(arr[mid]);
    node.left = buildTree(arr.slice(0, mid));
    node.right = buildTree(arr.slice(mid + 1));
    return node;
    }


function insertNode(root, data) {
    if (root === null) {
        root = new Node(data);
        return root;
    }
    if (data < root.data) {
        root.left = insertNode(root.left, data);
    } else if (data > root.data) {
        root.right = insertNode(root.right, data);
    }
    return root;
    }

function deleteNode(root, data) {
    if (root === null) {
        return root;
    }
    if (data < root.data) {
        root.left = deleteNode(root.left, data);
    } else if (data > root.data) {
        root.right = deleteNode(root.right, data);
    } else {
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }
        root.data = minValue(root.right);
        root.right = deleteNode(root.right, root.data);
    }
    return root;
    }


function find(value) {
    let current = this.root;
    while (current.data !== value) {
        if (value < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
        if (current === null) {
            return null;
        }
    }
    return current;
    }

