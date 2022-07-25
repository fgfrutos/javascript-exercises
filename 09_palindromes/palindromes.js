const palindromes = function (str) {
    const isAlpha = function(ch){
        return typeof ch === "string" && ch.length === 1
               && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
      }
    let text = str.toLowerCase().split("").filter(ch => isAlpha(ch));
    
    return text.join("") == text.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
