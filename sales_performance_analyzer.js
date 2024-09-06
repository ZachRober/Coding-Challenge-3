const salesFigures = [5500,3000,2200,2600,6700];
let length = salesFigures.length;
function calculateAverageSales (arr)
{
total = salesFigures.reduce((x,y) => x+y,0);
let Average = total/length;
return Average;
}
console.log(calculateAverageSales(salesFigures));
    
function determinePerformanceRating(x)
    {
let Avg = calculateAverageSales(salesFigures);
 if (Avg > 10000) {
    return "Excellent";//returning values if one is true
    }
else if (Avg > 7000){
    return "Good";
    }
else if (Avg > 4000){
    return "Satisfactory";
    }
else if (Avg <= 4000){
    return "Needs improvement";}
else  {
    return "not a valid input";
}
    }
    
let rating = determinePerformanceRating(salesFigures);
console.log(rating);
    
    
function findTopAndBottomPerformers(x){
    
    }
let employees = [{name: "JIm", sales:4500}, {name: "Billy", sales: 8400}, {name: "Samantha",sales: 6700}];
console.log(findTopAndBottomPerformers(employees));