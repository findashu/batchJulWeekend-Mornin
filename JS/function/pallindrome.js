function isPallindrome(num) {

    var temp = num;

    var rem ,rev = 0;
    while(num>0) {
        rem = num %10; 
        num = parseInt(num /10);
        rev = rev*10+rem;
    }

    if(temp == rev) {
        return true;
    }else {
        return false;
    }
    
}


var res = isPallindrome(121);

console.log(res);