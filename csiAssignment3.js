// promise
function getData(data, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data:${data}`);
      if (data === 2) {
        reject("Error: Data 2 cannot be processed.");
      } else {
        resolve("success");
      }
      if (getNextData) {
        getNextData();
      }
    }, 3000);
  });
}

console.log("Promise Example:");

getData(1)
  .then((res) => {
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res); // This will not execute due to rejection of getData(2)
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });

// // async await

function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data ${data}`);
      if (data === 2) {
        reject("Error: Data 2 cannot be processed.");
      } else {
        resolve("success");
      }
    }, 4000);
  });
}

async function asyncFunction() {
  console.log("Async/Await Example:");
  try {
    await getData(1);
    await getData(2); // This will throw an error
    await getData(3);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

asyncFunction();
