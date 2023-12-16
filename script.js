window.onload = function(){
    getRandomReade()
}

function getRandomReade(){

    let btn = document.getElementById("btn");
    let random = document.getElementById("random");

    
    btn.onclick = function (){
        let array =["Lorem ipsum dolor sit amet consectetur adipisicing.", "hello", "world", "Moiz", "chup kr"];
        let rand = Math.floor(Math.random()* array.length);
        random.innerText = array[rand];

}
}

