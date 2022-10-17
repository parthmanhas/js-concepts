const dummyAPI = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 2000) {
        reject("Time less than 2000");
      } else {
        resolve(time);
      }
    }, time);
  });
};

const taskArray = [dummyAPI(1000), dummyAPI(2000), dummyAPI(5000)];

const promiseAllPolyfill = (taskArray) => {
  return new Promise((resolve, reject) => {
    const output = [];
    taskArray.forEach((task, index) => {
      task
        .then((res) => {
          output.push(res);
          if (index === taskArray.length - 1) {
            resolve(output);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

promiseAllPolyfill(taskArray)
  .then((res) => console.log(res))
  .catch(console.error);
