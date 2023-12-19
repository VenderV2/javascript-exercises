const sumAll = function(firstNum, secNum) {
    let result = 0;
    if (typeof(firstNum) != "number" || typeof(secNum) != "number") {
        return "ERROR";
    }
    else {
        if (firstNum > -1 && secNum > -1 ) {
            if (firstNum<secNum) {
                for (let i = firstNum; i < secNum+1; i++) {
                    result += i;
                }
            }
            else if (firstNum>secNum) {
                for (let i = secNum; i < firstNum+1; i++) {
                    result += i;
                }
            }
        }
        else {
            return "ERROR";
        }
    }


    return result;
};

// Do not edit below this line
module.exports = sumAll;
