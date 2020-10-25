module.exports = function toReadable (number) {
    let ones = number % 10;
    let tens = (number % 100 - ones) / 10;
    let hundreds = (number - (tens * 10) - ones) / 100;
    let onesDisplay, tensDisplay, hundredsDisplay;

    if (hundreds === 1) {
        hundredsDisplay = 'one hundred';
    }
    else if (hundreds === 2) {
        hundredsDisplay = 'two hundred';
    }
    else if (hundreds === 3) {
        hundredsDisplay = 'three hundred';
    }
    else if (hundreds === 4) {
        hundredsDisplay = 'four hundred';
    }
    else if (hundreds === 5) {
        hundredsDisplay = 'five hundred';
    }
    else if (hundreds === 6) {
        hundredsDisplay = 'six hundred';
    }
    else if (hundreds === 7) {
        hundredsDisplay = 'seven hundred';
    }
    else if (hundreds === 8) {
        hundredsDisplay = 'eight hundred';
    }
    else if (hundreds === 9) {
        hundredsDisplay = 'nine hundred';
    }
    else {
        hundredsDisplay = '';
    }
    
    if (tens === 1){
        if (ones === 1) {
            tensDisplay = 'eleven';
        }
        else if (ones === 2) {
            tensDisplay = 'twelve';
        }
        else if (ones === 3) {
            tensDisplay = 'thirteen';
        }
        else if (ones === 4) {
            tensDisplay = 'fourteen';
        }
        else if (ones === 5) {
            tensDisplay = 'fifteen';
        }
        else if (ones === 6) {
            tensDisplay = 'sixteen';
        }
        else if (ones === 7) {
            tensDisplay = 'seventeen';
        }
        else if (ones === 8) {
            tensDisplay = 'eighteen';
        }
        else if (ones === 9) {
            tensDisplay = 'nineteen';
        }
        else {
            tensDisplay = 'ten';
        }

    } else if (tens !== 1) {
        
        
        
        switch(ones) {
            case 1: onesDisplay = 'one';
            break;
            case 2: onesDisplay = 'two';
            break;
            case 3: onesDisplay = 'three';
            break;
            case 4: onesDisplay = 'four';
            break;
            case 5: onesDisplay = 'five';
            break;
            case 6: onesDisplay = 'six';
            break;
            case 7: onesDisplay = 'seven';
            break;
            case 8: onesDisplay = 'eight';
            break;
            case 9: onesDisplay = 'nine';
            break;
            case 0: onesDisplay = '';
            break;
        }
        switch(tens) {
            case 2: tensDisplay = 'twenty'; 
            break;
            case 3: tensDisplay = 'thirty'; 
            break;
            case 4: tensDisplay = 'forty'; 
            break;
            case 5: tensDisplay = 'fifty'; 
            break;
            case 6: tensDisplay = 'sixty'; 
            break;
            case 7: tensDisplay = 'seventy'; 
            break;
            case 8: tensDisplay = 'eighty'; 
            break;
            case 9: tensDisplay = 'ninety'; 
            break;
            case 0: tensDisplay = '';
            break;
        }
    }
    if (hundreds === 0 && tens === 0 && ones === 0){
        return 'zero';
    }
    else if (hundreds === 0 && tens === 0) {
        if (ones === 1) {
            onesDisplay = 'one';
        }
        else if (ones === 2) {
            onesDisplay = 'two';
        }
        else if (ones === 3) {
            onesDisplay = 'three';
        }
        else if (ones === 4) {
            onesDisplay = 'four';
        }
        else if (ones === 5) {
            onesDisplay = 'five';
        }
        else if (ones === 6) {
            onesDisplay = 'six';
        }
        else if (ones === 7) {
            onesDisplay = 'seven';
        }
        else if (ones === 8) {
            onesDisplay = 'eight';
        }
        else if (ones === 9) {
            onesDisplay = 'nine';
        }
        else {
            onesDisplay = '';
        }       
        
        
        return onesDisplay;
    } 
    else if (ones === 0 && tens === 0) {
        return hundredsDisplay;
    } 

    else if (hundreds === 0 && ones === 0) {
        return tensDisplay;
    } 
    else if (hundreds === 0 && tens === 1) {
        return tensDisplay;
    } 
    else if (hundreds === 0){
        return `${tensDisplay} ${onesDisplay}`;
    }
    else if (tens === 0){
        return `${hundredsDisplay} ${onesDisplay}`;
    }
    else if (tens === 1){
        return `${hundredsDisplay} ${tensDisplay}`;
    } 
    else if (ones === 0){
        return `${hundredsDisplay} ${tensDisplay}`;
    } 
    else {
        return `${hundredsDisplay} ${tensDisplay} ${onesDisplay}`;
    }
}
