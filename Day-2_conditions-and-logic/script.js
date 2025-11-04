//# 1. Find the Maximum of Three Numbers

function maxOfThree(a, b, c) {
  let max;

  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}
