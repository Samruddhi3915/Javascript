//for

for (let nd = 0; nd < 10; nd++) {
  const element = nd;
  if (element == 5) console.log("five is best number");
  console.log(element);
} /*
0
1
2
3
4
five is best number
5
6
7
8
9*/

//nested loop
for (let i = 0; i <= 10; i++) {
  //   console.log(`Outer loop value:${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop value ${i}`);
    console.log(i + "*" + j + "=" + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//keywords-break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) break;
  console.log(index);
}
/*
1
2
3
4*/

for (let index = 1; index <= 7; index++) {
  if (index == 5) continue;
  console.log(index);
}
/*
1
2
3
4
6
7*/
