
// No. of buttsons in drum


let n = document.querySelectorAll('.drum').length;

// Accessing each button through DOM manipulation

for(let i=0;i<n;i++)
{
    document.querySelectorAll('.drum')[i].addEventListener("click",function (){
        
        // using this keyword that has the current element with class drum which is clicked 


        

        // playSound to play different sound on different key press compared with switch case on the basis of button

        playSound(this.innerHTML)

        // keypress animation on a particular button
        buttonAnimation(this.innerHTML);
    })
}

// Adding event listener to the keypress an object event will be fired which has a key as its property which maintain the pressed button

document.addEventListener("keypress",function(event)
{
    // Playsound on the respective key press

    playSound(event.key);

    // Animation on these particular key presses only 

    const arr = ['w','W','a','A','S','s','d','D','j','J','k','K','l','L']
    if(arr.includes(event.key))
    buttonAnimation(event.key);
   
    
})


// Function implementing different play audio on the basis of different keys

function playSound(key)
{
    switch (key) {
        case 'w':
        case 'W':
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case 'a':
        case 'A':
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':
        case 'S':
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'd':
        case 'D':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j':
        case 'J':
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case 'k':
        case 'K':
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
        case 'l':
        case 'L':
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        default:
            break;
    }
}

// Animate the press key feature

function buttonAnimation(key) {
    // in case the caps lock is on;
    key = key.toLowerCase();
    

    // Connecting the key pressed with onScreen keys on this basis of class provided

   let activeKey = document.getElementsByClassName(`${key}`)[0];
   activeKey.style.color='black';
//    adding pressed class to that element

   activeKey.classList.add("pressed");

//    Removing the pressed class in order to create pressing effect removal
    setTimeout(() => {
        activeKey.classList.remove("pressed");
        activeKey.style.color='#ff0000'
        
    }, 500);
    
}