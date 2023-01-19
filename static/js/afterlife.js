var livingcheck = 1


document.getElementById("candle").addEventListener("click", function LightCandle(){
        if(livingcheck==0){
            document.getElementById("glow").style.display = "block";
            document.getElementById("flame").style.display = "block";
            document.getElementById("blinking-glow").style.display = "block";
        } else {
            document.getElementById("glow").style.display = "block";
            document.getElementById("flame").style.display = "block";
            document.getElementById("blinking-glow").style.display = "block";
            alert("恭喜你发现隐藏的开发中功能，成功点亮蜡烛！\n不过蒲槿还在人生体验中，无需祭奠与扫墓喔，蜡烛就当作对彼此最好的祝福吧~");
        }
        });