function findstr(str){
    const size= str.length;
    console.log(str,size);
    if(size%2===1)
    {
        console.log('It is odd number');
    }
    else{
        console.log('it is even number');
    }
}
findstr('Dhaka');
findstr('northDhaka');