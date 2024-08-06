// subArray


const subArray=(arr)=>{
let mx=arr[0];
let sm=0;

arr.forEach((n)=>{
    sm+=n;
    mx=Math.max(mx,n);
    if(sm<0){
        sm=0

    }
})
return mx;
}
let arr=[-2,1,-3,-4,-1,2,1,-5,4];
console.log(subArray(arr));
