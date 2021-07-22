
window.onload = function() {
  var can = document.getElementById('canvas'),
      spanpercent = document.getElementById('percent'),
      c = can.getContext('2d');

  var posX = 100,
      posY = can.height / 2,
      fps = 10,
      percent = 0,
      onepercent = 360 / 100,
      result = onepercent * 60;
  
  c.lineCap = 'round';
  arcMove();
  
  function arcMove(){
    var deegres = 0;
    var acrInterval = setInterval (function() {
      deegres += 1;
      c.clearRect( 0, 0, can.width, can.height );
      percent = deegres / onepercent;

      spanpercent.innerHTML = percent.toFixed();

      c.beginPath();
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
      c.strokeStyle = '#b1b1b1';
      c.lineWidth = '10';
      c.stroke();

      c.beginPath();
      c.strokeStyle = '#3949AB';
      c.lineWidth = '10';
      c.arc( posX, posY, 70, -(Math.PI/180) * 270, -(Math.PI/180) * (270 + deegres) );
      c.stroke();
      if( deegres >= result ) clearInterval(acrInterval);
    }, fps);
    
  }
  
  
}