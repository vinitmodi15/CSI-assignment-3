// with callback

function getData(data, getNextData, errorCallback) {
  setTimeout(() => {
    console.log(`data ${data}`);
    if (data === 2) {
      errorCallback("Error: Data 2 cannot be processed.");
    } else {
      if (getNextData) {
        getNextData();
      }
    }
  }, 3000);
}

console.log("Callback Example:");

getData(1, () => {
  getData(2, () => {
    getData(3, null, (error) => {
      console.error("Error occurred:", error);
    });
  }, (error) => {
    console.error("Error occurred:", error);
  });
}, (error) => {
  console.error("Error occurred:", error);
});
