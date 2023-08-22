var timer = 20 ;
var score = 0;
var hitrn = 0;
// jispy click kro gy wo element py event raise ho jaye ga, or event listner naa milny pr event elemnt k parent py listner dhondyga , waha bhi na milny pr event parent k parent k parent pr listner dhondyga
function increaseScore(){
    score += 10;
    document.querySelector('scorevalue').textContent= score;
}
function getNewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn;
}
function makeBubble(){
    var clutter = "";
// `in backticks ka maqsad ye hy k agr hmy koi dynamic value lgani hy to wo hm in ticks k andar lga skty hyn`
for(var i=0; i<=135; i++){
   var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML= clutter;
}
function runTimer(){
    var timing = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timing);
            document.querySelector("pbtm").innerHTML = `<h1>Game Over<\h1>`;
        }
    },1000);
}
document.querySelector("#pbtm")
.addEventListener("click", function(details){
    var clickdnum = (Number(details.target.textContent));
    if(clickdnum === hitrn){
        increaseScore();
        // makeBubble();
        // getNewhit();
    }
    // alert("abey yar too to chl rha hy")
});

getNewhit();
runTimer();
makeBubble();
increaseScore();