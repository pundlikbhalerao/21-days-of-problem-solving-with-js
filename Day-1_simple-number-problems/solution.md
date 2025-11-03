### 1. Print Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

---

### 2. Print Numbers from N to 1 without changing the loop condition of above question

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(num - i + 1);
}
```

---

### 3. Print All Even Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

### 4. Sum of First N Natural Numbers

**Brute Force Solution**

```js
// Time Complexity O(n)
console.time();

const num = 1000000000n;
let sum = 0n;

for (let i = 1n; i <= num; i++) {
  sum += i;
}

console.log(sum);
console.timeEnd();
```

**Optimized Solution**

```js
// Time Complexity O(1)
console.time();

const num = 1000000000;
let sum = (num * (num + 1)) / 2;

console.log(sum);
console.timeEnd();
```

---

### 5. Product (Factorial) of N

```js
// Time Complexity O(n)
console.time();

const num = 10n;
let product = 1n;

for (let i = 1n; i <= num; i++) {
  product *= i;
}

console.log(product);
console.timeEnd();
```

---

### 6. Sum of All Even Numbers up to N

```js
// Time Complexity O(n)
console.time();

const num = 10n;
let sum = 0n;

for (let i = 1n; i <= num; i++) {
  if (i % 2n === 0n) sum += i;
}

console.log(sum);
console.timeEnd();
```

---

### 7. Print Squares of Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  // console.log(i ** 2n);
  // console.log(i * i);
  console.log(Math.pow(i, 2));
}
```

---

### 8. Print all numbers divisible by 3 and 5 up to N

```js
// Time Complexity O(n)
const number = 30;

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
```

---

### 9. Find the sum of all odd numbers up to N

```js
// Time Complexity O(n)
const number = 10;
let sum = 0;
for (let i = 0; i <= number; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}
console.log(sum);
```

---

### 10. Print the cubes of numbers from 1 to N

```js
// Time Complexity O(n)
const number = 5;

for (let i = 1; i <= number; i++) {
  console.log(i * i * i);
}
```

---

### 11.Print only the numbers that are both even and perfect squares

```js
// Time Complexity O(n)
let number = 20;

for (let i = 1; i <= number; i++) {
  if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
    console.log(i);
  }
}
```
---