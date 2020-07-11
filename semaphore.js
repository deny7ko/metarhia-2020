const semaphore = {
  locked: false,

  then(resolve) {
    if (this.locked) {
      this.locked = false;
      setTimeout(() => resolve('timeout'), 1000);
    } else {
      this.locked = true;
      resolve('without timeout')
    }
  },

  async leave() {
    this.counter++;
  }
};

(async () => {
  await semaphore;

  console.log("===uno===")

  await semaphore;

  console.log("===duo===")
})();
