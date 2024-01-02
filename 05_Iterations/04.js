//loops for object
//forin

const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(key);
}
/*
js
cpp
rb
swift*/

for (const key in myObject) {
  console.log(myObject[key]);
}
/*
javascript
c++
ruby
swift by apple*/

//does forin works for arrays

const prog = ["js", "rb", "py", "cpp"];
for (const key in prog) {
  console.log(key);
}
/*
0
1
2
3*/

for (const key in prog) {
  console.log(prog[key]);
}
/*
js
rb
py
cpp*/

//does forin works for map-no it is not iteratable
