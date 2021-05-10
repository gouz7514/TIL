// 단순히 앞에 '()', 뒤에 '()', 양쪽을 '('와 ')'로 감싸면 되는 줄 알았다(DP)
// 자바스크립트로 섹시하게 forEach 사용해서 더 쉽게 풀 수 있네
var generateParenthesis = function(n) {
    let map = new Map();
    
    map.set(0, ['']);
    map.set(1, ['()']);
    map.set(2, ['()()', '(())']);
    if (n <= 2) {
        return map.get(n);
    }
    for (let i = 3; i <= n; i++) {
        let j = 0, arr = [];
        while (j < i) {
            let arrj = map.get(j), arri = map.get(i - j - 1);
            arrj.forEach(pairj => {
                arri.forEach(pairi => {
                    arr.push('(' + pairj + ')' + pairi);
                })
            })
            j++;
        }
        map.set(i, arr);
    }
    
    return map.get(n);
};