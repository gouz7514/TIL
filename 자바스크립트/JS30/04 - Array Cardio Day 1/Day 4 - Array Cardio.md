### Day 4 - Array Cardio
**filter**<br>
주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환<br>
```javascript
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```

**map**<br>
배열 내 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환<br>
```javascript
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
```

**sort**<br>
정렬. `sort((a,b) => a-b)` 하면 오름차순 정렬<br>

**reduce**<br>
배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환<br>
```javascript
// 4. How many years did all the inventors live all together?
const totalyears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
```

`querySelector`는 NodeList를 return하므로 배열 메소드를 사용할 수 없다.<br>
이를 사용하기 위해 `Array.from` 사용해 배열로 만든다.<br>