// my
// 생노가다
function formatDuration (seconds) {
  let time = [0, 0, 0, 0, 0] // year, day, hour, minute, second
  let duration = ['year', 'day', 'hour', 'minute', 'second']
  let final = []
  let answer = ''
  
  if (seconds === 0) return 'now'
  
  while (seconds >= 60) {
    if (seconds >= 31536000) { // 년
      time[0] = parseInt(seconds / 31536000)
      seconds %= 31536000
    } else if (seconds >= 86400) { // 일
      time[1] = parseInt(seconds / 86400)
      seconds %= 86400
    } else if (seconds >= 3600) { // 시간
      time[2] = parseInt(seconds / 3600)
      seconds %= 3600
    } else if (seconds >= 60) { // 분
      time[3] = parseInt(seconds / 60)
      seconds %= 60
    }
  }
  time[4] = seconds
  
  for (let i in time) {
    if (time[i]) {
      final.push(time[i] > 1 ? String(time[i]).concat(' ', duration[i], 's') : String(time[i]).concat(' ', duration[i]))
    }
  }
  
  if (final.length > 1) {
    answer = final.slice(0,-1).join(', ')
    answer += ' and ' + final.slice(-1)
  } else {
    answer = final[0]
  }
  
  return answer
}

// clever
// 지리네
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }

  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}