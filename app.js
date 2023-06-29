document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("what is your Name?");
   if ( yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = 'unknow';

   } else {
document.querySelector(".name span").innerHTML = yourName;
   }
   document.querySelector(".control-buttons").remove();

};
let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blocksContainer.children);
console.log(blocks.length);

let orderRange = [...Array(blocks.length).keys()];
//let orderRange = Array.from(Array(blocks.length).keys());
console.log(orderRange);

let testOrderRange = [1, 11, 13, 18, 17, 19, 0, 2, 16, 5, 7, 9, 3, 10, 4, 6, 8, 14, 15, 12];

blocks.forEach((block, index) => {
    block.style.order = index;

    block.style.order = testOrderRange[index];
});
// shufle function
function shuffle(array) {
    // settings vars
    let current = array.length
    temp,
    random;

    while (current > 0) {
        // get random number
        random = Math.floor(Math.random() * current);

    // decrease length by one
    current--;

    // 1-save current element in strach
    temp = array[current];
    // 2- current element = random element
    array[current] = array[random];
    //3- random element = get element from stash
    array[random] = temp;
    }
    return array;
}
