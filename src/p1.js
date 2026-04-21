let num = [21, 400, 8, -3 ,77, 99, -16, 55, 111, -36, 28];  

//
for(let i = 0; i < num.length; i++) {
    let temp;

    for(let j = 0; j < num.length - i - 1; j++) { // find the biggest number
        if(num[j] > num[j + 1]) {  // compare number 1 and number 2
            temp = num[j];                                        
            num[j] = num[j + 1];
            num[j + 1] = temp;   // if number 1 bigger, change the position with number 2
        }
    }
}

console.log(num);
