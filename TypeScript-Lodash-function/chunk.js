var ArrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Chunk(ArrElements, sizeOfChunk) {
    var temp = [];
    var j = 0;
    if (sizeOfChunk <= 0) {
        return temp;
    }
    while (ArrElements.length) {
        temp[j++] = ArrElements.splice(0, sizeOfChunk);
    }
    return temp;
}
console.log(Chunk(ArrElements, 3));
