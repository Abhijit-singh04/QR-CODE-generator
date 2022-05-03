// let qrcode =document.querySelector("img");
let qrcode =select("img");
let qrtext =select("textarea");
let qrbtn =select("button");

//instead of doing queryselector again and again lets create a function 
function select(element){
    return document.querySelector(element);
}

//adding event listener to button 
qrbtn.addEventListener("click",generateQR);

function generateQR(){
   let size = "1000x1000";
   let data=qrtext.value;
//    base url of api that we gonna use to generate the qr code
   let baseURL ="http://api.qrserver.com/v1/create-qr-code/";

   let url = `${baseURL}?data=${data}&size=${size}`;
   qrcode.src=url;//whenever this function will run it will update the image with qr code

}