const cancelable = fn => {
  let canceled = false;

  return {
    f: (...args) => {
      setTimeout(() =>{
        if (!canceled) return fn(...args)
      }, 0)
    },
    cancel: () => {
      canceled = true;
    }
  };
};

// Usage

const func = (cb) => {
  setTimeout(() => {
    cb({ res: 100 });
  }, 100);
};

const {f, cancel} = cancelable(func);

f(console.log);
cancel();
