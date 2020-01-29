
let result;
let  x = Math.floor(Math.random() * 100) + 1 ; //random number from 1 to 100
function gradeAmerecan(score) {
    switch (typeof score === 'number'){
        case score >= 90 && score <= 100:
                result='A';
                break;
         case score >= 80 && score <= 89:
                result='B';
                 break;
        case score >= 70 && score <= 79:
                result='C';
                break;
        case score >= 60 && score <= 69:
                result='D';
                break;
        case score >= 50 && score <= 59:
                result='E';
                break;
        case score >= 0 && score <= 49:
                result='F';
                break;

            default:
                result='INVAILD SCORE';
        
    }
    return "You got a "+result+"("+ score+ "%"+")";
}

console.log(gradeAmerecan(x));
