export const karatsuba = (x: number, y: number): number => {
  if (x < 10 || y < 10) {
    return x * y;
  }

  const xStr = x.toString();
  const yStr = y.toString();

  const len = Math.max(xStr.length, yStr.length);
  const halfLen = Math.ceil(len / 2);

  const a = Math.floor(x / Math.pow(10, halfLen));
  const b = x % Math.pow(10, halfLen);
  const c = Math.floor(y / Math.pow(10, halfLen));
  const d = y % Math.pow(10, halfLen);

  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);
  const adPlusBc = karatsuba(a + b, c + d) - ac - bd;

  const result = ac * Math.pow(10, len) + adPlusBc * Math.pow(10, halfLen) + bd;

  console.log(x, y, result);
  return result;
};
