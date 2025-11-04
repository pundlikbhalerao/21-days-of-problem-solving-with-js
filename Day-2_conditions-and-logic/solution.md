# 1. Find the Maximum of Three Numbers

```js
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
```

---

# 2. Check if a Number is Positive, Negative, or Zero

```js
function checkPositiveOrNegative(num = 0) {
  if (num > 0) {
    return 'Positive';
  } else if (num < 0) {
    return 'Negative';
  }
  return 'Zero';
}
```

---

# 3. Calculate Electricity Bill

```js
function calculateElectricityBill(units) {
  let total = 0;

  if (units <= 100) {
    total = units * 5;
  } else if (units <= 200) {
    total = (100 * 5) + (units - 100) * 7;
  } else if (units <= 300) {
    total = (100 * 5) + (100 * 7) + (units - 200) * 10;
  } else {
    total = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
  }

  return total;
}
```

---

# 4. Check if a Character is a Vowel or Consonant

```js
function checkVowel(char = '0') {
  if ('aeiou'.includes(char.toLowerCase()) && char !== '') {
    return 'Vowel';
  } else if (/[a-z]/.test(char.toLowerCase())) {
    return 'Consonant';
  }
  return 'Not a valid alphabet';
}
//
let vowels = "aeiouAEIOU";
let consonents = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

function checkChar(char) {
  if (vowels.includes(char)) {
    return "its vowels";
  } else if (consonents.includes(char)) {
    return "its consonents";
  } else {
    return "Not a Valid alphabet";
  }
}
console.log(checkChar("u"));
console.log(checkChar("M"));
```

---

# 5. Check if a Year is a Leap Year

```js
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  }
  return false;
}
```
---
# 6. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

```js
function checkCharacterType(ch) {
  let code = ch.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    console.log("Uppercase Letter");
  } else if (code >= 97 && code <= 122) {
    console.log("Lowercase Letter");
  } else if (code >= 48 && code <= 57) {
    console.log("Digit");
  } else {
    console.log("Special Character");
  }
}

checkCharacterType('A'); // Output: Uppercase Letter
```
---
# 7. Check Triangle Type Using Sides and Angles

```js
function checkTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Not a valid triangle");
  } 
  else if (a === b && b === c) {
    console.log("Equilateral Triangle");
  } 
  else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
  } 
  else if (a*a + b*b === c*c || a*a + c*c === b*b || b*b + c*c === a*a) {
    console.log("Right-Angled Triangle");
  } 
  else {
    console.log("Scalene Triangle");
  }
}

checkTriangle(3, 4, 5); // Right-Angled Triangle

```
---
# 8. Calculate Income Tax Based on Slabs

```js
function calculateTax(income) {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } 
  else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } 
  else if (income <= 1000000) {
    tax = (250000 * 0.05) + (income - 500000) * 0.2;
  } 
  else {
    tax = (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
  }

  console.log("Tax = ₹" + tax);
}

calculateTax(750000); // Output: Tax = ₹62500

```