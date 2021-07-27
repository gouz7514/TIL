// my
function solution(input, markers) {
  let answer = []
  for (let str of input.split('\n')) {
    console.log('str : ', str)
    for (let i = 0; i < str.length; i++) {
      if (markers.includes(str[i])) {
        answer.push(str.slice(0,i).trim())
        break
      }
      if (i == str.length - 1) {
        answer.push(str)
      }
    }
  }
  return answer.join('\n')
};

let result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
console.log(result)

// clever
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}