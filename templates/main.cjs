const Helper = require("./helper.cjs");
const TreeNode = require("./treenode.cjs");
const filePath = process.env.IS_DEBUG_JS == "true" ? "in.txt" : "/dev/stdin";

const Main = input => {
    // let nums = Helper.stringToNumberArray(input);
    // let root = TreeNode.strintToTreeNode(input);
};

Main(require("fs").readFileSync(filePath, "utf8"));
