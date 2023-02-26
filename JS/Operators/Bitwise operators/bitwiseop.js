//-------------------------------------------------------
//--------------------Bitwise operators------------------
//-------------------------------------------------------

/*Bitwise operator treats their operands as a set of 32 bits(0 and 1),  rather than as decimal , hexadecimal or octal numbers. For example the decimal number 9 has binary representation of 1001. Bitwise operator performs their operations on such binary repreesentations, but they return standard javascript numerical values*/

// 5 - 00000101
// 1 - 00000001

// AND bitwise operator (&)
console.log(5 & 1);

//OR bitwise operator (|)
console.log(5 | 1);

//NOT bitwise operator (!)
//5 -   00000000000000000000000000000101
// ~5 - 11111111111111111111111111111010  -> 1's complement
// (2 ^ 32) - 1 - 5   ----> -1 - 5 = -6
console.log(~5);


//XOR bitwise operator (^)
console.log(5 ^ 1);



//Zero fill left  shift (<<)
console.log(5 << 1);

//Signed right  shift (>>)
console.log(5 >> 1);

//Zero fill right  shift (>>>)
console.log(5 >>> 1);

//convert decimal to binary
console.log((10).toString(2));

//convert binary to decimal
console.log((0b1010).toString(10));  //must add 0b to front of the binary number 

console.log(parseInt("1010",2));