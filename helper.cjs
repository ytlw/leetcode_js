module.exports = class Helper {
    static stringToNumberArray(str) {
        return str.trim().slice(1, -1).split(",").map(Number);
    }
}
