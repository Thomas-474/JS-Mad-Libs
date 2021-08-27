var adjective
var place
var number
var creature
var verb

// Hiding the results and reset button
document.getElementById('endResult').style.display = 'none';

function MadLibSetUp(){
    // Assigning the words users typed to the variables
    adjective = document.getElementById('adjInput').value;
    place = document.getElementById('placeInput').value;
    number = document.getElementById('numbInput').value;
    creature = document.getElementById('creatureInput').value;
    verb = document.getElementById('verbInput').value;
 
    // Setting alert if a text box is left empty
    if (document.getElementById('adjInput').value == '' || document.getElementById('placeInput').value == '' || document.getElementById('numbInput').value == '' || document.getElementById('creatureInput').value == '' || document.getElementById('verbInput').value == ''){
        alert('You must fill out each text box!');
        return;
    }

    // Hiding all the input related elements
    document.getElementById('userInput').style.display = 'none';
    document.getElementById('endResult').style.display = 'block';
}

function MadLib1(){
    MadLibSetUp();

    document.getElementById('result').innerHTML = `The party of ${adjective} adventurers were traveling to the next ${place}. On the way there they were attacked by ${number} ${creature}. The adventurers won the battle and proudly ${verb} the rest of the way to the next city.`;
}
 
function MadLib2(){
    MadLibSetUp();

    document.getElementById('result').innerHTML = `The adventurers entered the ${place}. The ${place} was ${adjective} and had a population of around ${number} people. The adventurers left their ${creature} at a stable and ${verb} the ${place}.`;
}
 
function MadLib3(){
    MadLibSetUp();

    document.getElementById('result').innerHTML = `Suddenly, while the adventurers were exploring the ${place}, ${number} ${creature} flew down from the sky and ${verb} the ${place}. The ${adjective} adventurers fought off the ${creature} and saved the ${place}.`;
}
 
function MadLibRandom(){
    var x = (Math.floor(Math.random() * 3));
  
    if (x == 1){
        MadLib1();
    } else if (x == 2){
        MadLib2();
    } else{
        MadLib3();
    }
}
