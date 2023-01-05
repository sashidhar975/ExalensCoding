//Sample Input
blocks = [
{
    "gym": false,
    "school": true,
    "store": false,
},
{
    "gym": true,
    "school": false,
    "store": false,
},
{
    "gym": true,
    "school": true,
    "store": false,
},
{
    "gym": false,
    "school": true,
    "store": false,
},
{
"gym": false,
"school": true,
"store": true,
}
]

reqs=["gym","school","store"]

function apartmentHunting(blocks, reqs) {
  let count=0;
  let arrays=[];
  let carrays=[];
  let a;
   for(let i=0;i<blocks.length;i++){
     a=blocks[i];
       for(let j=0;j<reqs.length;j++){
         if(a[reqs[j]]==true){
           count+=1;
         }
         else{
           continue;
         }
       }
       arrays[i]=count;
       for(let l=0;l<arrays.length;l++){
         if(l==0){
           carrays[l]=arrays[l];
         }
         else{
           carrays[l]=arrays[l]-arrays[l-1];
         }
       }
   }
for(let m=0;blocks.length;m++){
 if(carrays[m]>=2 && ((blocks[m].gym==true && blocks[m].school==true) ||
  (blocks[m].school==true && blocks[m].store==true))){
  return m+1;
  }
  else{
    continue;
  }
}
}

exports.apartmentHunting = apartmentHunting(blocks, reqs)
console.log(exports.apartmentHunting)