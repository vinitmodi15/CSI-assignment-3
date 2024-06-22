// with callback

function getdata(data,getNextData){
     setTimeout(()=>{
         console.log(`data ${data}`);
         if(getNextData){
              getNextData();
         }
         
     },32000);
}
console.log("with callback");
getdata(1,()=>{
  getdata(2,()=>{
    getdata(3);
  })
})
