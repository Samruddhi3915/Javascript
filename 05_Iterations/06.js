const coding = ["js", "java", "cpp"];

const values = coding.forEach((item) => {
  //   console.log(item);
  return item;
});

console.log(values); //undefined

//therefore proved that foreach cant return

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const values1 = myNums.filter((num) => num > 4);
console.log(values1); //[ 5, 6, 7, 8, 9 ]

const newNums1 = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums1.push(num);
  }
});
console.log(newNums1); //[ 5, 6, 7, 8, 9 ]

const books = [
  { title: "Book One", genre: "Fiction" },
  { title: "Book Two", genre: "Non-Fiction" },
];

let userBooks = books.filter((bk) => {
  return bk.genre === "Fiction";
});

console.log(userBooks);
//[ { title: 'Book One', genre: 'Fiction' } ]
