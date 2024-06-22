// with callback

function getdata(data,getNextData){
     setTimeout(()=>{
         console.log(`data ${data}`);
         if(getNextData){
              getNextData();
         }
         
     },2000);
}
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
    },2000)
  })
}
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
    },2000)
  })
}
async function asyncfunction(){
  await getData(1);
  await getData(2);
}

asyncfunction();

