
const arr=["tiger","elephant","bear"];

//Notice how we get a function as a first parameter that has 2 parameters those represent 'value' and 'index' in order.You can name the parameters as anything but remember the order.
arr.map((value,index)=>{
    console.log(value);
    console.log(index);
});


/*Output:
tiger
0
elephant
1
bear
2
*/


