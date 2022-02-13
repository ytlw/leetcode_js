const Helper = require("./helper.cjs");
const filePath = process.env.IS_DEBUG_JS == "true" ? "in.txt" : "/dev/stdin";

const Main = input => {
    const nums = Helper.stringToNumberArray(input);
    console.log(typeof nums);
    console.log(nums);
};

Main(require("fs").readFileSync(filePath, "utf8"));
