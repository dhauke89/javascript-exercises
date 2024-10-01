const sumAll = function(x,y) {
    
    const runCalculation = function(numberOne,numberTwo){
        totalSum = 0;
        for(i = numberOne; i<= numberTwo; i++){
            totalSum+= parseInt(i);
        }
        return totalSum;
    }

    if (x < 0 || y < 0 || x == NaN || y == NaN || Number.isInteger(x) == false || Number.isInteger(y)== false){
        return "ERROR";
    }else if(x < y){
        const numberOne = x;
        const numberTwo = y;
        return runCalculation(numberOne,numberTwo);
    }else if(y < x){
        const numberOne = y;
        const numberTwo = x;
        return runCalculation(numberOne,numberTwo);
    }

};


// Do not edit below this line
module.exports = sumAll;
