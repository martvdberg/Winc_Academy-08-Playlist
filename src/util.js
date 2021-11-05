// return a large random number that can be used as a key value
const createKey = () =>
  Date.now() * Math.floor(Math.random() * 100) +
  "-" +
  Date.now() * Math.floor(Math.random() * 100);

export default createKey;
