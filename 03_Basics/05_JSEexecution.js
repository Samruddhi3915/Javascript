//how code executes in javascript

//JS execution context
//how JS runs or executes your file
//first EC:global execution context(this) in browser it is window object in node it is this
//second EC:function execution context

//third EC is Eval execution context

//JS CODE=
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

//step1:global execution context and it is allocated in this
//cycle 1
//step 2 phase1:memory creation phase - or called as creation phase(variables are allocated space)
//val1=undefined
//val2=undefined
//addNum=definition (let total to return total)
//result1=undefined
//result2=undefined

//step 3 phase2:execution phase
//val1=10
//val2=5
//addNum-creates a new execution context which creates a new variable envt and one new execution thread therefore now global execution and memory phase will be repeated for that function again ie. memory phase will include
//val1 =undefined
//val2=undefined
//total=undefined
//now execution context will include:
//num1=10
//num2=5
//total=15
//now total will return to parent executional context ie.it will goto step1 global executional context
//this new executional context gets deleted once memory phase and execution context is done

//therefore now in result1 value is 15

//now in result2 again execution will be done
//it will include new variable environment and new execution thread
//again two phase
//memory phase
// val1,val2,total=undefined
//execution phase
//num1=10
//num2=2
//total=12
//again same part continues

//call stacks
//function is put in stack once done completion it is removed from stack
//suppose three methods one two and three
//one comes in stack executes and moves out of stack same for two and three
//but what if two gets called when one is in stack and three gets called at same time so what will be removed first ,three will be removed since LIFO is used
