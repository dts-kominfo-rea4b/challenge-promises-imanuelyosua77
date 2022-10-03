const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const XXI = await promiseTheaterIXX();
  const CGV = await promiseTheaterVGC();
  const filterXXI = XXI.filter(XXIrun)
  const filterCGV = CGV.filter(CGVrun);
  function XXIrun(x) { if (x.hasil == emosi) return x }
  function CGVrun(y) { if (y.hasil == emosi) return y; }

  return new Promise((resolve, reject) => {
    if (filterXXI === null && filterCGV === "") {
      reject('ERROR WOI')
    } else {
      resolve(filterXXI.length + filterCGV.length);
    }
  })
}

module.exports = {
  promiseOutput,
};
