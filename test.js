
const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

console.log(getDistance([5, 5], [10, 5]));
console.log(getDistance([5, 5], [1, 3]));
console.log(getDistance([5, 5], [8, 4]));