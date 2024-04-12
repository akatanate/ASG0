// Instantiate vector v1 using the Vector3 class from cuon-matrix.js
var v1 = new Vector3([2.25, 2.25, 0]);
var v2 = new Vector3([2.25, 2.25, 0]);

// vector3 v and a string color
function drawVector(v, color, ctx){
  console.log("draw_vector");
       // Set color
       ctx.strokeStyle = color;
    
       // Begin a new path
       ctx.beginPath();
       
       // Move to the center of the canvas
       ctx.moveTo(200, 200);
       
       // Draw the vector
       ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20);
       
       // Stroke the path to render the line
       ctx.stroke();
}
  /*let v1 = document.getElementById("the_canvas").ariaValueMax;
  var v1 = new cuon.Vector3(2.25, 2.25, 0);
  ctx.strokeStyle = 'red';

  let cx = canvas.width / 2;
  let cy = canvas.height / 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx * 20, cy * 20);
  ctx.stroke();
  // ctx.clearRect(0, 0, 400, 400);
*/
function handleDrawEvent(ctx){
  console.log("draw_event");

  ctx.clearRect(0, 0, 400, 400);
  ctx.fillRect(0, 0, 400, 400);

  //v1
  var v1_x = parseFloat(document.getElementById('v1_x').value);
  var v1_y = parseFloat(document.getElementById('v1_y').value);

  var v1_newVector = new Vector3([v1_x, v1_y, 1]);
  v1.set(v1_newVector);

  drawVector(v1, "red", ctx);

  //v2
  var v2_x = parseFloat(document.getElementById('v2_x').value);
  var v2_y = parseFloat(document.getElementById('v2_y').value);

  var v2_newVector = new Vector3([v2_x, v2_y, 1]);
  v2.set(v2_newVector);

  drawVector(v2, "blue", ctx);
} 

function main() {
    // Retrieve <canvas> element                                  <- (1)
     var canvas = document.getElementById('the_canvas');
     if (!canvas) {
       console.log('Failed to retrieve the <canvas> element');
       return;
     }

   // Get the rendering context for 2DCG                          <- (2)
   var ctx = canvas.getContext('2d');

   // Draw a blue rectangle                                       <- (3)
   ctx.fillStyle = 'black';
   ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

   //drawVector(v1, "red", ctx);
   var draw = document.getElementById('draw_button');
   draw.onclick = function() {
      handleDrawEvent(ctx);
   };
}

