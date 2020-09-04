// function doubleIt(num){
//   return num*2;
// }

// const doubleIt=function(num){
//   return num*2;
// }

const doubleIt=num=>num*2;
const addIt=(x,y)=>x+y;
const give9=()=>9;
const doMath=(x,y)=>{
  let add=x+y;
  let diff=x-y;
  let result=add+diff;
  return result;
}


console.log(doMath(7,5));