// vector3 v and a string color
//function drawVector(v, color){
  //use the builtin javascript function lineTo() to draw the vector v1. 
  // The resolution of the canvas is 400x400, so scale your v1 coordinates
  // by 20 when drawing it. This will make it easier to visualize vectors 
  // with length 1.
//}

/*
function handleDrawEvent(){
  clear canvas
  read the values of the text boxes to create v1
  drawVector(v1, "red");

  read the values of the text boxes to create v2
  drawVector(v1, "blue");
}
*/

function main() {
    // Retrieve <canvas> element                                  <- (1)
     var canvas = document.getElementById('example');
     if (!canvas) {
       console.log('Failed to retrieve the <canvas> element');
       return;
     }

   // Get the rendering context for 2DCG                          <- (2)
   var ctx = canvas.getContext('2d');

   // Draw a blue rectangle                                       <- (3)
   ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set a blue color
   // ctx.fillStyle = 'rgba(0, 0, 255, 0)';
   // drawVector(v1, "red");

   ctx.fillRect(120, 10, 150, 150); // Fill a rectangle with the color
   }

