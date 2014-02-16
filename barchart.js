/*
03.11.2013
Karlis Lukstins
Bar chart
*/

var BarChart = function (canvas, data){

  var size = canvas.width;
  var offset = 20;
  var offset_h = 30;

  var ctx = canvas.getContext("2d");

  ctx.fillStyle ="rgba(151,187,205,0.5)";
  ctx.strokeStyle = "rgba(50,50,50,0.8)";
  ctx.font = 'bold 25px sans-serif';

  function calc_width(data){
    var bars = data[0].length;
    var off = offset * (bars+1);
    var bar_width = (size - off) / bars;
    return bar_width;
  }

  var original_color = true;
  var bar_w = calc_width(data);
  var bar_h_sum = data[1].reduce(function(a, b) { return a + b });
  var max_value = Math.max.apply( Math, data[1] );

  for(var i = 0; i < data[1].length; i++) {

    if (original_color){
      ctx.fillStyle = data[2][i];
    }


    var h = (size-40) * (data[1][i] / max_value);
    if (max_value == 0){ h = 0; }


    ctx.lineWidth=4;

    ctx.beginPath();
    ctx.moveTo((i+1)*offset+i*bar_w, size-offset_h);
    ctx.lineTo((i+1)*offset+i*bar_w, size-offset_h-h);
    ctx.lineTo((i+1)*offset+(i+1)*bar_w, size-offset_h-h);
    ctx.lineTo((i+1)*offset+(i+1)*bar_w, size-offset_h);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

    ctx.textAlign = "center";
    ctx.fillStyle ="#333";
    ctx.fillText(data[0][i],
                (i+1)*offset+(i)*bar_w+bar_w/2,
                size-5);

    var percent = (data[1][i]/bar_h_sum*100).toFixed(2) + "%";
    if (bar_h_sum == 0 ) percent = "-";

   ctx.fillText( percent ,
                (i+1)*offset+(i)*bar_w+bar_w/2 ,
                size-40);
  }
}
