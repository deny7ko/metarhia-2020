const thenable = {
  then(onFulfilled) {
    setTimeout(() => onFulfilled(42), 10);
  }
};

(async () => {
  const v = await thenable;
  console.log(v)
})();
