### Day 6 - Type Ahead
#### JSON 데이터 가져오기
```javascript
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
```
`fetch`는 Promise를 return함.<br>
반환된 Promise를 json으로 바꾸면 또 다른 Promise를 return<br>
spread 연산자를 통해 cities에 push한다.

#### 정규식 사용하기
```javascript
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}
```
`gi`의 g는 문자열 내의 모든 패턴 검색, i는 대/소문자 상관 X<br>
찾을 단어 `wordToMatch`를 cities의 각 요소 place에서 찾는데, city와 state에서 한 개라도 맞으면 return<br>
