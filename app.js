document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("what is your Name?");
   if ( yourName == null || yourName == "") {
    document.querySelector(".name span").innerHTML = 'unknow';

   } else {
document.querySelector(".name span").innerHTML = yourName;
   }
   document.querySelector(".control-buttons").remove();

};