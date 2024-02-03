function sumofnumbers(number){
    let sum =0;
for(const num of number){
    sum=sum+num;
}
return sum;
}
const num=[12,35,5,5,2];
const sum = sumofnumbers(num);
console.log('sum of the array:',sum);