// function generatePascalsTriangle(rows) {
//     let triangle = [];
//     for (let i = 0; i < rows; i++) {
//         triangle[i] = [];
//         triangle[i][0] = 1;
//         for (let j = 1; j < i; j++) {
//             triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }
//         triangle[i][i] = 1;
//     }
//     return triangle;
// }

// function printPascalsTriangle(triangle) {
//     for (let row of triangle) {
//         console.log(row.join(' '));
//     }
// }

// // Example usage:
// const rows = 5;
// const pascalsTriangle = generatePascalsTriangle(rows);
// printPascalsTriangle(pascalsTriangle);


let n=5;
let A=[]
for (let i=0;i<n;i++){
    A[i]=[];
    for (let j=1;j<i;j++){
        A[i][j]=A[i-1]+A[i-1][j]; 
    }    
} 

