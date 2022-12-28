export const retryAfterCustomTime = ({
  callback,
  intervalTime,
  quitRetryCondition,
}) => {
  // let numberOfTries = 0;
  return new Promise((resolve) => {
    const interval = setInterval(async () => {
      // numberOfTries++;
      // console.log(`Trying... (${numberOfTries})`);
      try {
        await callback();
        if (quitRetryCondition()) {
          clearInterval(interval);
          // console.log(`Successful after retried ${numberOfTries} times.`);
          resolve();
        }
      } catch (err) {}
    }, intervalTime);
  });
};
