//memory in JS
//stack(copy is given)
//heap(ref is given)
// Stack memory(one above another layer is stack):
// used in primitive types
//  Heap memory:
// used in reference/non-primitive types
let myyoutubename = "SamruddhiAhiredotcom";
//this will go in stack
console.log(myyoutubename);
let anothername = myyoutubename;
anothername = "SamAhiredotcom";
console.log(anothername);

let user = {
  email: "Samruddhi@gmail.com",
  upi: "sam57@ybl",
};
//this will go in heap
