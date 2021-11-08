// return a large random number that can be used as a key value
const createKey = () =>
  Date.now() * Math.floor(Math.random() * 100) +
  "-" +
  Date.now() * Math.floor(Math.random() * 100);

// create an array from the items with a checked === true property
export const selected = (arrToFilter, typeToFilter) =>
  arrToFilter.reduce((total, current) => {
    if (current.checked) {
      total.push(current[typeToFilter]);
    }
    return total;
  }, []);

export default createKey;
