window.onload = function(){

    var seconds = "00";
    var tens = "00";
    var appendTens = document.getElementById("tens");
    var appendsSeconds = document.getElementById("seconds");
    var btnStart = document.getElementById("btn_start");
    var btnStop = document.getElementById("btn_pause");
    var btnReset = document.getElementById("btn_reset");
    var Interval;

    btnStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    btnStop.onclick = function(){
        clearInterval(Interval);
    }




    btnReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendsSeconds.innerHTML = seconds;
    }

    function startTimer(){
        tens++;
        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendsSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            appendsSeconds.innerHTML = secondsl
        }
    }

}