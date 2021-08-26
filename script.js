var adjective
var place
var number
var animal
var verb
 
document.getElementById('endResult').style.display = 'none';
 
function MadLib1(){
   adjective = document.getElementById('adjInput').value;
   place = document.getElementById('placeInput').value;
   number = document.getElementById('numbInput').value;
   animal = document.getElementById('animalInput').value;
   verb = document.getElementById('verbInput').value;
 
   if (document.getElementById('adjInput').value == '' || document.getElementById('placeInput').value == '' || document.getElementById('numbInput').value == '' || document.getElementById('animalInput').value == '' || document.getElementById('verbInput').value == ''){
       alert('You must fill out each text box!');
       return;
   }
 
   document.getElementById('userInput').style.display = 'none';
   document.getElementById('endResult').style.display = 'block';
 
   document.getElementById('result').innerHTML = `The party of ${adjective} adventurers were traveling to the next ${place}. On the way there they were attacked by ${number} ${animal}. The adventurers won the battle and proudly ${verb} the rest of the way to the city.`;
}
 
function MadLib2(){
   adjective = document.getElementById('adjInput').value;
   place = document.getElementById('placeInput').value;
   number = document.getElementById('numbInput').value;
   animal = document.getElementById('animalInput').value;
   verb = document.getElementById('verbInput').value;
 
   if (document.getElementById('adjInput').value == '' || document.getElementById('placeInput').value == '' || document.getElementById('numbInput').value == '' || document.getElementById('animalInput').value == '' || document.getElementById('verbInput').value == ''){
       alert('You must fill out each text box!');
       return;
   }
 
   document.getElementById('userInput').style.display = 'none';
   document.getElementById('endResult').style.display = 'block';
 
   document.getElementById('result').innerHTML = `22222222222222222222222222222222222222 The party of ${adjective} adventurers were traveling to the next ${place}. On the way there they were attacked by ${number} ${animal}. The adventurers won the battle and proudly ${verb} the rest of the way to the city.`;
}
 
function MadLib3(){
   adjective = document.getElementById('adjInput').value;
   place = document.getElementById('placeInput').value;
   number = document.getElementById('numbInput').value;
   animal = document.getElementById('animalInput').value;
   verb = document.getElementById('verbInput').value;
 
   if (document.getElementById('adjInput').value == '' || document.getElementById('placeInput').value == '' || document.getElementById('numbInput').value == '' || document.getElementById('animalInput').value == '' || document.getElementById('verbInput').value == ''){
       alert('You must fill out each text box!');
       return;
   }
 
   document.getElementById('userInput').style.display = 'none';
   document.getElementById('endResult').style.display = 'block';
 
   document.getElementById('result').innerHTML = `3333333333333333333333333333333333333333333 The party of ${adjective} adventurers were traveling to the next ${place}. On the way there they were attacked by ${number} ${animal}. The adventurers won the battle and proudly ${verb} the rest of the way to the city.`;
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
 