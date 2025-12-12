const stone = document.getElementById('stone');
const randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber == 1) {
    stone.style.backgroundColor = "#ff0000";
} else if (randomNumber == 2) {
    stone.style.backgroundColor = "#ffa500ff";
} else if(randomNumber == 3){
    stone.style.backgroundColor = "#ffff00";   
} else if(randomNumber == 4){
    stone.style.backgroundColor = "#00ff33ff";   
}  else if(randomNumber == 5){
    stone.style.backgroundColor = "#0800ffff";   
} else if(randomNumber == 6){
    stone.style.backgroundColor = "#4169e1";   
} else if(randomNumber == 7){
    stone.style.backgroundColor = "#00008b";   
} else if(randomNumber == 8){
    stone.style.backgroundColor = "#590c7cff";   
} else{
    stone.style.backgroundColor = "#151514ff";   
}