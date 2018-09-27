
let seconds = 0;

class Tomagochi {
    constructor(name){
        this.name = name 
        this.sleepiness = 0;
        this.hunger = 0;
        this.boredom = 0;
        this.age = 0;
    }
    isAlive() {
        if(this.hunger > 0 || this.sleepiness > 0 || this.boredome > 0) {
            return true;
        } else {
            return false;
        }

    }
    
}


$('.container').hide();
const $input = $('input').val();
let pet = new Tomagochi($input);


const timePasses = () => {
   // $('.time').text(`${seconds}`);
    seconds++; 
    if (seconds%10 === 0){
        pet.hunger++;
        console.log('pet is hungry')
        
    }
    if (seconds%15 === 0){
         pet.sleepiness++;
         console.log('pet is sleepy')
    }
    if (seconds%18 === 0){
        pet.boredom++;
        console.log('pet is bored')
    } if (seconds%20 === 0){
        pet.age++;
        console.log('pet got older')
    } if(pet.age === 2){
       $('#img').attr('src','img/orc_attack2.gif');
       
    }
    if(pet.sleepiness === 5 || pet.hunger === 5 || pet.boredom === 5){
        pet.isAlive = false;
        $('#img').attr('src','img/game_over.gif');
        $('#gameOver').text('YOU KILLED YOUR PET! ' + ' GAME OVER!');
        clearInterval();
        return;

    } 

$('#levels1').text(`Hunger level ${pet.hunger}`);
$('#levels2').text(`Sleepiness level ${pet.sleepiness}`);
$('#levels3').text(`Boredom level ${pet.boredom}`);
$('#levels4').text(`Age: ${pet.age}`)


}


$('#pickName').on('click', () => {
    $('.start-game').hide();
    $('.container').show();
    $('#name').text($input);
    setInterval(timePasses, 1000);
    
   
    
})

let eat = $('#eat').on('click', () =>{
    if(pet.hunger > 0){
        pet.hunger--;
    } ;
})
let sleep = $('#sleep').on('click', () => {
    if(pet.sleepiness > 0){
        pet.sleepiness--;
    }
})
let play = $('#play').on('click', () => {  
    if(pet.boredom > 0){
        pet.boredom--;
    }
})

$('#img').velocity({
    left: '500px',
    right:'1000px',
}, {
    duration: 3000,
    easing: 'linear',
    loop: true 
});