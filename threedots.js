const age1=[12,13,15,20,17];
const age2=[22,24,27,29,30];
const age3=[40,36,38];
const age4=[...[200,300],100];
const maxNumber=Math.max(...age3)
//const allAge=age1.concat(age2).concat([90]).concat(age3);
const allAge=[...age1,...age2,90,...age3,...age4];
console.log(maxNumber);