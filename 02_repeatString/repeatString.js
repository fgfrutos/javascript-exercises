const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    else if (num === 0) {
        return "";
    }
    else {
        let text = string;
        for (let i = 1; i < num; i++) {
            string += text;
        }
        return string;
    }

};

// Do not edit below this line
module.exports = repeatString;
