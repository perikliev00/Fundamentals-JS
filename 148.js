function manipulator(operation,number) {
    if(operation=="chop") {
        number=number/2;
         console.log(number);
         return number;
    } else if(operation=="dice") {
        number=Math.sqrt(number);
        console.log(number);
        return number;
    } else if(operation=="spice") {
        number=number+1;
        console.log(number);
        return number;
    } else if(operation=="bake") {
        number=number*3;
        console.log(number);
        return number;
    } else if(operation=="fillet") {
        let substract=number*0.2;
        number=number-substract;
        console.log(number);
        return number;
    }
}
function cookingByNumbers(number,firstOperation,secondOperation,thirdOperation,fourthOperation,fifthOperation) {
    
    number=Number(number);
    number=manipulator(firstOperation,number);
    number=manipulator(secondOperation,number);
    number=manipulator(thirdOperation,number);
    number=manipulator(fourthOperation,number);
    number=manipulator(fifthOperation,number);
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')