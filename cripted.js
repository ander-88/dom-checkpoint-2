let crip = 9463;
function cripted(crip) {
    let numCrip = crip.toString();
    let numCripi = [];
    for (let i = 0; i < numCrip.length; i++) {

        let nOfI = Number(numCrip[i]);
        let numOfI = nOfI - 1;
        numCripi.push(numOfI);
    }

    return numCripi.join('');
}


console.log(cripted(crip));


