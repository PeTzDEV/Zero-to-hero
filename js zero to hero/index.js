const text = "Hello"
//            01234
console.log(text[1])
// -------------------------
let txt1 = "Marian Online"
txt1 = txt1.toUpperCase() // reassign
console.log(txt1);
// ------------------------
txt1 = "Hello "
let txt2 = "World"
let result = txt1.concat(txt2)
console.log(result);
// ------------------------
txt1 = "Hello World Welcome to Marian Online server"
console.log(txt1.indexOf("e")) 
// ------------------------
console.log(txt1.lastIndexOf("e"))
// ----------------
let number = 2.12
console.log(number);
console.log(number.toString());
// ----------------
txt1 = "Hello World"
console.log(txt1.replace("World" , "Marian"));
// ------------------------
txt1 = "gfjisodghiurfehuithrweiuthbriuywetbg"
console.log(txt1.includes("z"));
// ------------------------
txt1 = "Hello World"
console.log(txt1.charCodeAt(0))
txt1 = "Hello World"
console.log(txt1.slice(0,1)) // end n+1 start < end -->  [start , end) [0 , 1)
// ------------------------
txt1 = "Hello World Marian Online"
console.log(txt1.split(" "))
txt1 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14"
console.log(txt1.split(","))
