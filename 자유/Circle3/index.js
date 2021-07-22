let circle=document.getElementById('progress')
let text=document.getElementById('precent')
let r=circle.getAttribute('r') // 반지름
let c=2*Math.PI*r // 둘레
let len=0;
let interval = setInterval(function(){
  len += 1
  if(len>c){
    len=0
  }
  let percent=len/c*100;
  text.innerHTML=percent.toFixed(0)+'%'
  console.log('len, c : ', len, c)
  circle.setAttribute('stroke-dasharray',`100 100`)
  if (percent >= 80) clearInterval(interval)
},1)
