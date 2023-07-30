console.log("-------final lastproject -------"); 
const list_number = [3,4,5,6,7,8,9,10,11,12,13,2,3,4,5,1,3,5,2,2,1];

const filter_number = list_number.filter((num) => num % 2 === 0); // important! exam final lastproject 


console.log(filter_number);

console.log("--------------------------------"); 
console.log("------- test 1 -------");
const show = (n) => {
  let temp = "";
  for (let row = 1; row <= n; row++) {
    for (let cols = 1; cols <= n; cols++) {
      temp += "*";
    }
    temp += "\n"
  }
  console.log(temp);
};

show(2);
show(3);
show(4);
console.log("-------------------");
console.log("------- test 2 -------");

const shows = (n) => {
  let temp = "";
  for (let row = 1; row <= n; row++) {
    for (let cols = 1; cols <= n; cols++) {
      temp += "shows";
    }
    temp += "\n"
  }
  console.log(temp);
};
shows(1);
shows(2);
shows(3);
shows(4);
console.log("-------------------");