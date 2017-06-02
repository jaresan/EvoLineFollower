function multiplyMatrices(m1, m2) {
  let result = [];
  for (let i = 0; i < m1.length; i++) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function roundWithPrecision(number, precision = 0) {
  const exp = Math.pow(10, precision);
  return Math.round(number * exp) / exp;
}

function rotatePoint(cx, cy, x, y, angle) {
  const radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = (cos * (x - cx)) - (sin * (y - cy)) + cx,
    ny = (cos * (y - cy)) + (sin * (x - cx)) + cy; // myslim ze ta znamenka maji byt takhle
  return [nx, ny];
}

module.exports = { multiplyMatrices, roundWithPrecision, rotatePoint };