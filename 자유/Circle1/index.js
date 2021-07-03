const numb = document.querySelector('.number')
let cnt = 0;
let view = numb.dataset.view
console.log(typeof(view), view)
document.documentElement.style.setProperty('--right', Math.min(50, view))
if (view > 50) {
	document.documentElement.style.setProperty('--left', view - 50)
}

// 숫자 올리는 속도
// * 100하면 한바퀴에 걸리는 시간
setInterval(() => {
	if (cnt == view) {
		clearInterval()
	} else {
		cnt += 1
		numb.textContent = cnt + "%"
	}
}, 20)