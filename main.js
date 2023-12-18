document.write("12.Compute the sum and product of an array of integers"+"<br>");
function test12(arr){
    let sum=0;
    let p=1;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
        p=p*arr[i];
    }
    return "sum :"+sum+" "+" provide :"+p;
}
document.write("([1,2,3,4,5,6]) => "+test12([1,2,3,4,5,6])+"<br><br>");