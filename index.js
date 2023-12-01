var height = prompt("Enter your height: ");
var weight = prompt("Enter your weight: ");

function bmiCalculator (weight, height) {
    var BMI = ((weight)/(Math.pow(height,2)));
    var interpretation;
    if (BMI < 18.5){
        interpretation = ("Your BMI is "+ BMI + ", so you are underweight.");
    }if(BMI >= 18.5 && BMI<= 24.9){
        interpretation = ("Your BMI is "+ BMI + ", so you have a normal weight.");
    }if(BMI > 24.9){
        interpretation = ("Your BMI is "+ BMI + ", so you are overweight.");
    }
    return interpretation;
}

bmiCalculator(weight, height);
