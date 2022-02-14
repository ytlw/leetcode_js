module.exports = class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    static strintToTreeNode(str) {
        const strArray = str.trim().slice(1, -1).split(",");
        const n = strArray.length;
        if (n === 0) {
            return null;
        }
        let root = new TreeNode(+(strArray[0]), null, null);
        let q = [root];
        let index = 1;
        let qLen = q.length;
        while (qLen > 0 && index < n) {
            for (let i = 0; i < qLen && index < n; ++i) {
                let myRoot = q.shift();
                if (strArray[index] != "null") {
                    myRoot.left = new TreeNode(+(strArray[index]), null, null);
                    q.push(myRoot.left);
                }
                ++index;
                if (index < n) {
                    if (strArray[index] != "null") {
                        myRoot.right = new TreeNode(+(strArray[index]), null, null);
                        q.push(myRoot.right);
                    }
                    ++index;
                }
            }
        }
        return root;
    }
}
