
exports.min = function min (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  }
  else {
    let m = 0;
    for (let i = 0; i<array.length;i++) {
      if (m > array[i]) {
        m = array[i]
      }
    }
    return m;
  }
}



exports.max = function max (array) {
  if (array == undefined|| array.length == 0) {
    return 0;
  }
  else {
    let m = 0;
    for (let i = 0; i<array.length;i++) {
      if (m < array[i]) {
        m = array[i]
      }
    }
    return m;
  }
}

exports.avg = function avg (array) {
  if ( array == undefined || array.length == 0) {
    return 0;
  }
  else {
    let m = array[0];
    for (let i = 1; i<array.length;i++) {
      m += array[i]
    }
    let a = m/array.length;
    return a.toFixed(2)
  }
}
