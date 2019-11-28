function draw() {
  var canvas = document.getElementById("canvas");
  var da = canvas.getContext("2d");
  
  
  var colors = ['#4CAD50', '#06BCA4', '#E91E63', '#FFC707', '#9E5E9E', '#CDCC39'];

  var angles = [Math.PI * 0.6, Math.PI * 0.4, Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.4];
  

  var ba = 0;
  var ea = 0;
  

  for(var i = 0; i < angles.length; i = i + 1) {
    
    ba = ea;
    // End Angle
    ea = ea + angles[i];
    
    da.beginPath();
    
    da.fillStyle = colors[i % colors.length];
    
    
    da.moveTo(200, 200);
    da.arc(200, 200, 120, ba, ea);
    da.lineTo(200, 200);
    da.stroke();
    
    
    da.fill();
  }
}
window.onload = draw;