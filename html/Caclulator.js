// JavaScript source code

var InputOutput = 0;
var InputOutputReset = 0;
var InputOutputChoice = 99;
var InputOutputStorage = 0;
var InputOutputPercent = 0;
var ItsON = 0;
var MRC;


// used to clear the leading zero when the user clicks the on button

function ClearLeadingZero(Zero) {
    if (Zero == ".0") {
        document.getElementById('InputOutput').value = ".";
    } else if (Zero == 0) {
        document.getElementById('InputOutput').value = "";
    } else if (InputOutputReset == 1) {

        // check to seee if an opperation has just been chosen
        // if so then input box needs to be cleared 
        if (InputOutputChoice == 1) {
            document.getElementById('InputOutput').value = "";
        } else if (InputOutputChoice == 2) {
            document.getElementById('InputOutput').value = "";
        } else if (InputOutputChoice == 3) {
            document.getElementById('InputOutput').value = "";
        } else if (InputOutputChoice == 4) {
            document.getElementById('InputOutput').value = "";
        }
    }



}

// function called when MRC is clicked
// stores current input into the MRC variable and 
// sets the input screen back to 0
function mrcClicked(On) {  
    if (On == 1) {
        MRC = document.getElementById('InputOutput').value;
        document.getElementById('InputOutput').value = 0;
    }
}

// function when m+ is clicked
// takes the MRC and adds what is in the 
// input currently 

function MplusClicked(On) {

    if (On == 1) {
        MRC = ReverseTheNumber(MRC);

        InputOne = document.getElementById('InputOutput').value
        InputOne = ReverseTheNumber(InputOne);
        InputOne = parseFloat(InputOne);
        MRC = parseFloat(MRC);
        MRC = MRC + InputOne;

        MRC = parseFloat(MRC).toFixed(5);
        MRC = RemoveZeroes(MRC);

        MRC = ReverseTheNumber(MRC);

        document.getElementById('InputOutput').value = MRC;
    }

}

// function when m- is clicked
// takes the MRC and subtracts what is in the 
// input currently 

function MminusClicked(On) {
    if (On == 1) {

        MRC = ReverseTheNumber(MRC);
        InputOne = document.getElementById('InputOutput').value
        InputOne = ReverseTheNumber(InputOne);
        InputOne = parseFloat(InputOne);
        MRC = parseFloat(MRC);
        MRC = MRC - InputOne;
        MRC = parseFloat(MRC).toFixed(5);
        MRC = RemoveZeroes(MRC);
        MRC = ReverseTheNumber(MRC);
        document.getElementById('InputOutput').value = MRC;
    }
}

// changes the sign of the input box when +/- button is called
function plusMinusClicked(On) {

    if (On == 1) {
        InputOne = document.getElementById('InputOutput').value
        InputOne = ReverseTheNumber(InputOne);
        InputOne = parseFloat(InputOne);
        InputOne = InputOne * (-1);
        InputOne = parseFloat(InputOne).toFixed(5);
        InputOne = RemoveZeroes(InputOne);
        InputOne = ReverseTheNumber(InputOne);
        document.getElementById('InputOutput').value = InputOne;
    }
}

// adds a decimal to the number after checking for other decimals 
function IsOnAddDecimal(On) {
    if (On == 1) {
       
        Check = CheckForDecimal(); // check to make sure there isnt a decimal already in the number

        if (Check == 1) {
            document.getElementById('InputOutput').value = (document.getElementById('DecimalButton').value + document.getElementById('InputOutput').value);
            InputOutputReset = 0;
        }
        
    }
}

// I spent a good deal of time wondering why my string was always backwards...
// ended up having to add a reverseTheNumber function to fix it...
// Realized just now... 7/14/2020 at 8:17... now that im basically done...
// ive realized what the problem was... i did (1 + inputoutput) and not (inputoutput + 1)
// to honor my stupidity, even though it should be fixxed...
// I have decided to leave all the code as it is so others can understand my mistakes
// sos to my sanity


// checks to see if it is on... adds one if so 
// if not on nothing is done
function IsOnAddOne(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (1 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 2 if so
// if not on nothing is done
function IsOnAddTwo(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (2 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 3 if so
// if not on nothing is done
function IsOnAddThree(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (3 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 4 if so
// if not on nothing is done
function IsOnAddFour(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (4 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 5 if so
// if not on nothing is done
function IsOnAddFive(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (5 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 6 if so
// if not on nothing is done
function IsOnAddSix(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (6 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 7 if so
// if not on nothing is done
function IsOnAddSeven(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (7 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 8 if so
// if not on nothing is done
function IsOnAddEight(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (8 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 9 if so
// if not on nothing is done
function IsOnAddNine(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (9 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// checks to see if it is on... adds 0 if so
// if not on nothing is done
function IsOnAddZero(On) {
    if (On == 1) {
        document.getElementById('InputOutput').value = (0 + document.getElementById('InputOutput').value);
        InputOutputReset = 0;
    }
}

// uses a for loop to check to see which operation is called
// loops through after = button is clicked
function Operations(InputOne, InputTwo, Choice, Percent) {

    var Result = 0.00;
    var PercentPlus = 0.00;

    InputOne = ReverseTheNumber(InputOne);
    InputTwo = ReverseTheNumber(InputTwo);

    // Plus is clicked
    if (Choice == 1) {

        InputOne = parseFloat(InputOne);
        InputTwo = parseFloat(InputTwo);

        // percent is involved...
        if (Percent == 1) {

            PercentPlus = (InputOne * InputTwo) / 100;
            Result = InputTwo + PercentPlus;

            // checks to see if the operation resulted in 0
            // used to remove the decimal if so
            if (Result == .0) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else if (Result == 0.) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else {

                Results = parseFloat(Result).toFixed(5);
                Results = RemoveZeroes(Results);

                Result = ReverseTheNumber(Results);

                document.getElementById('InputOutput').value = Result;
            }

            // percent not involved
        } else {

            Result = InputTwo + InputOne;

            // checks to see if the operation resulted in 0
            // used to remove the decimal if so
            if (Result == .0) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else if (Result == 0.) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else {

                Results = parseFloat(Result).toFixed(5);
                Results = RemoveZeroes(Results);

                Result = ReverseTheNumber(Results);


                document.getElementById('InputOutput').value = Result;
            }

        }
        // subtraction is called     
    } else if (Choice == 2) {

        InputOne = parseFloat(InputOne);
        InputTwo = parseFloat(InputTwo);

        // percent is involved...
        if (Percent == 1) {

            PercentPlus = (InputOne * InputTwo) / 100;
            Result = InputTwo - PercentPlus;
            // checks to see if the operation resulted in 0
            // used to remove the decimal if so
            if (Result == .0) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else if (Result == 0.) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else {

                Results = parseFloat(Result).toFixed(5);
                Results = RemoveZeroes(Results);
                Result = ReverseTheNumber(Results);

                document.getElementById('InputOutput').value = Result;
            }

        } else {

            Result = InputTwo - InputOne;
            // checks to see if the operation resulted in 0
            // used to remove the decimal if so
            if (Result == .0) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else if (Result == 0.) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else {

                Results = parseFloat(Result).toFixed(5);
                Results = RemoveZeroes(Results);
                Result = ReverseTheNumber(Results);

                document.getElementById('InputOutput').value = Result;
            }

        }
        // multiplication is called 
    } else if (Choice == 3) {


        InputOne = parseFloat(InputOne);
        InputTwo = parseFloat(InputTwo);

        // percent is involved...
        if (Percent == 1) {

            PercentPlus = InputOne / 100;
            Result = InputTwo * PercentPlus;

            // checks to see if the operation resulted in 0
            // used to remove the decimal if so
            if (Result == .0) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else if (Result == 0.) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else {

                Results = parseFloat(Result).toFixed(5);
                Results = RemoveZeroes(Results);
                Result = ReverseTheNumber(Results);

                document.getElementById('InputOutput').value = Result;
            }

        } else {

            Result = InputTwo * InputOne;
            // checks to see if the operation resulted in 0
            // used to remove the decimal if so
            if (Result == .0) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else if (Result == 0.) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else {

                Results = parseFloat(Result).toFixed(5);
                Results = RemoveZeroes(Results);
                Result = ReverseTheNumber(Results);

                document.getElementById('InputOutput').value = Result;
            }

        }

        // division is called 
    } else if (Choice == 4) {

        InputOne = parseFloat(InputOne);
        InputTwo = parseFloat(InputTwo);

        // percent is involved...
        if (Percent == 1) {

            PercentPlus = InputOne / 100;
            Result = InputTwo / PercentPlus;

            // checks to see if the operation resulted in 0
            // used to remove the decimal if so
            if (Result == .0) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else if (Result == 0.) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else {

                Results = parseFloat(Result).toFixed(5);
                Results = RemoveZeroes(Results);
                Result = ReverseTheNumber(Results);

                document.getElementById('InputOutput').value = Result;
            }

        } else {

            Result = InputTwo / InputOne;
            // checks to see if the operation resulted in 0
            // used to remove the decimal if so
            if (Result == .0) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else if (Result == 0.) {
                Result = 0;
                document.getElementById('InputOutput').value = Result;
            } else {


                Results = parseFloat(Result).toFixed(5);
                Results = RemoveZeroes(Results);
                Result = ReverseTheNumber(Results);

                document.getElementById('InputOutput').value = Result;
            }

        }

        // sqrt is called 
    } else if (Choice == 5) {

        Result = parseFloat(InputOne);
        Result = Math.sqrt(Result).toFixed(5);
        Results = RemoveZeroes(Results);

        Result = ReverseTheNumber(Result);

        document.getElementById('InputOutput').value = Result;

        // called to display MRC value 
    } else if (Choice == 6) {

        document.getElementById('InputOutput').value = MRC;
               
        // no operation is selected so give percent of current number
    } else if (Percent == 1 || Choice == 0) {


        InputOne = parseFloat(InputOne);
        InputTwo = parseFloat(InputTwo);

        Result = InputOne / 100;

        Result = ReverseTheNumber(Result);

        document.getElementById('InputOutput').value = Result;

         // not too sure why i made this else if... will look into it later
    } else if (InputOutputStorage == 0) {

        Result = parseFloat(InputOne);
        Result = parseFloat(Result).toFixed(5);
        Results = RemoveZeroes(Results);

        Result = ReverseTheNumber(Result);

        document.getElementById('InputOutput').value = Result;
    }
    
}

// function used to reverse the number in the input
// also...  didnt actually need this
// i caused myself problems early on... see above 
function ReverseTheNumber(x) {
    x = x + "";
    return x.split("").reverse().join("");
}

// function to remove extra zeroes 
function RemoveZeroes(x) {

    
    var temp = 1;
    var temp2 = 1;
    lastChar = x.charAt(x.length - temp);

    while (lastChar == "0") {

        secondToLast = x.charAt(x.length - temp2);
        temp2 = temp2 + 1;

        if (secondToLast == "0") {
            x = x.slice(0, -1);
            temp = temp + 1;
            lastChar = x.charAt(x.length - temp);
            

        } else {
            x = x.slice(0, -1);
            return x;
        }
    }
    x = x.slice(0, -1);
    return x
}

// function to check and see if there is a decimal already in the number 
function CheckForDecimal() {

    var Decimaltemp = 1;
    var InputOutputs = document.getElementById('InputOutput').value;
    var temp2 = InputOutputs.length;
    currentChar = InputOutputs.charAt(0);
    var i = 0;
    
    while (temp2 >= i) {

        if (currentChar == ".") {
            var check = 0;
            return check;
         
        } else {
            InputOutputs = InputOutputs.slice(0, -1);
            currentChar = InputOutputs.charAt(Decimaltemp);
            Decimaltemp = Decimaltemp + 1;
            i = i + 1;
        }
        
    }
    var check = 1;
    return check;
}

