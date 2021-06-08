// my
const a = "Hey fellow warriors"
const answer = []
for(let i of a.split(' ')) {
  let x = i
  if (i.length >= 5) {
    x = i.split("").reverse().join("")
  }
  answer.push(x)
}
console.log(answer)
console.log(answer.join(" "))

// clever
function spinWords(str) {
  return str.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ')
}
let res = spinWords(a);
console.log(res);