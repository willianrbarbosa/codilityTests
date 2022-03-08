
const nearestLargeValue = (arr, idx) => {
    let nIdx = (idx == arr.length-1 ? 0 : arr.length);
    let nVal = arr[idx];
    return arr.reduce((prev, cur, i) => {
        let nMax = Math.max(prev, cur);
        let nIdxDiff = (i > idx ? i - idx : idx - i);
        let nIdxDiff2 = (idx > nIdx ? idx - nIdx : nIdx - idx);
        if ( (nVal < nMax) && (nIdxDiff2 > nIdxDiff) ) {
            nIdx = i;
            nVal = arr[idx] < nMax ? nMax : nVal;
        }
        return nVal;
    });
}

console.log(nearestLargeValue([1,4,3,2,150,6,5,7], 4));