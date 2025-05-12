function comp(a,b){
    let aSorted = a.map(x => x * x).sort((x, y) => x - y);
    let bSorted = b.sort((x, y) => x - y);

    if (aSorted.length !== bSorted.length) {
        return false;
    }
    return true;
}
let b = comp([1, 2, 3], [1, 4, 9,6]);
console.log(b); // true