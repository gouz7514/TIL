'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    // shift키 눌려있는지 확인
    // 체크되었는지 확인
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        // 체크박스 하나하나 돌면서 확인
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('inbetween 체크 시작');
                console.log(inBetween);
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
    
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))