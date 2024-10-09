window.onload = function(){

    var seconds = "00";
    var minutes = "00";
    var appendMinutes = document.getElementById("minutes");
    var appendsSeconds = document.getElementById("seconds");
    var btnStart = document.getElementById("btn_start");
    var btnStop = document.getElementById("btn_pause");
    var btnReset = document.getElementById("btn_reset");
    var Interval;
    var dot = false;

    btnStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 500);
    }

    btnStop.onclick = function(){
        clearInterval(Interval);
        dot = false;
    }




    btnReset.onclick = function(){
        clearInterval(Interval);
        minutes = "00";
        seconds = "00";
        appendMinutes.innerHTML = minutes;
        appendsSeconds.innerHTML = seconds;
        dot = false;
    }

    function startTimer(){
        dot = !dot;
   
        if(dot){
            minutes++;
            if(minutes < 9){
                appendMinutes.innerHTML = "0" + minutes;
            }
            if(minutes > 9){
                appendMinutes.innerHTML = minutes;
            }
    
            if(minutes > 99){
                console.log("seconds");
                seconds++;
                appendsSeconds.innerHTML = "0" + seconds;
                minutes = 0;
                appendMinutes.innerHTML = "0" + 0;
            }
    
            if(seconds > 9){
                appendsSeconds.innerHTML = secondsl
            }
        }
    }

}