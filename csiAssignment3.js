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


// // promise

function getData(data,getNextData){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
         console.log(`data:${data}`)
         resolve("success");
         if(getNextData){
          getNextData();
         }
    },3000)
  })
}
console.log("promise");
getData(1)
  .then((res)=>{
  console.log(res);
  return getData(2);})
  .then((res)=>{
    console.log(res);
    return getData(3);});


// // async await

function getData(data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`data ${data}`);
    },4000)
  })
}
async function asyncfunction(){
  console.log("with async await");
  await getData(1);
  await getData(2);
}

asyncfunction();

