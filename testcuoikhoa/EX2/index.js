// Prints help message to the console
// Returns a string
function alternatingSums(...a) {
    let WeightOfTeam1 = 0;
    let WeightOfTeam2 = 0;
    for(let i = 0;i<a.length;i++){
        if(i%2 == 0) WeightOfTeam1 += a[i]
        else WeightOfTeam2 += a[i]
    }

    return [WeightOfTeam1, WeightOfTeam2]
}
// console.log(alternatingSums(1,2,3,4,5,6,7,8,9))

