const salesFigures = [5500,3000,2200,2600,6700];
let length = salesFigures.length;
function calculateAverageSales (arr)
{
total = arr.reduce((x,y) => x+y,0);
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
let newarr = x.map(data => data.sales);//make sales and names into seperate arrays
let newarr2 = x.map(data => data.name);
let min = Math.min(...newarr);//find min and max values of number array
let max = Math.max(...newarr);
let bottomPerformer = x[newarr.indexOf(min)];//find the corresponding value to min and max
let topPerformer = x[newarr.indexOf(max)];
return {topPerformer, bottomPerformer};

    }
let employees = [{name: "JIm", sales:4500}, {name: "Billy", sales: 8400}, {name: "Samantha",sales: 6700}];
console.log(findTopAndBottomPerformers(employees));

function generatePerformanceReport(z){
    av = ``
for (let i = 0; i < z.length; i++){
    let groupAverage = calculateAverageSales(z[i].sales);
    av += `${groupAverage} `
}
tpbt = ``

for (let i = 0; i <z.length; i++){
    
    sum = z.reduce((x[i], y[i]) => x[i].sales + y[i].sales, 0);

}
}
const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
 { name: 'Bob', sales: [7000, 6000, 7500] },
  { name: 'Charlie', sales: [3000, 4000, 3500] }, 
 { name: 'Diana', sales: [9000, 8500, 9200] },];
 console.log(generatePerformanceReport(salesData));
