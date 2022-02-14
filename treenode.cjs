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
        return root;
    }
}
