const imageToRgbaMatrix = require('image-to-rgba-matrix');
const fs = require('fs');

// From file path
var string = "{\n";
var fileName = "test.png"
imageToRgbaMatrix('./' + fileName).then( rgbaMatrix => {
  // console.log(rgbaMatrix);
  for (var i = 0; i < rgbaMatrix.length; ++i) {
    string += "{";
    for (var j = 0; j < rgbaMatrix[i].length; ++j) {
      for (var k = 0; k < rgbaMatrix[i][j].length; ++k) {
        
        string += (rgbaMatrix[i][j][k]).toString();
        string += ",";
      }
    } 
    string = string.substring(0, string.length - 1);
    string += "},\n";
  }
  string = string.substring(0, string.length - 2);
  string += "\n";
  string += "}";
  console.log(string);
  var parsedFileName = __dirname + "\\" + fileName + "_parsedFile.txt";
  console.log(parsedFileName + "\n");
  fs.writeFile(parsedFileName, 
              string, 
              err => {
    
   });
});
