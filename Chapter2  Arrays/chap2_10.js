grades var12  = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
// console.log(grades.length);
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
   for (var col = 0; col < grades[row].length; ++col) {
     //  console.log(grades[row].length);
       //  console.log(row);
       console.log([row][col]);
       total += grades[row][col];
   }
   average = total / grades[row].length;
   console.log("Student " + parseInt(row+1) + " average: " +    
         average.toFixed(2));
   total = 0;
   average = 0.0;
}
