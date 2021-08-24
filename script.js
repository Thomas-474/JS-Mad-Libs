var adjective
var place
var numb
var animal
var verb

document.getElementById('wordNeeded').innerHTML = 'Enter an adjective below';

function SubmitClick(){
    if (document.getElementById('wordNeeded').innerHTML == 'Enter an adjective'){
        adjective = document.getElementById('varInput').value;
        document.getElementById('varInput').value = '';
        document.getElementById('wordNeeded').innerHTML = 'Enter a place';
    }
    // else if (document.getElementById('wordNeeded').innerHTML == 'Enter a place below'){
    //     place = document.getElementById('varInput').value;
    //     document.getElementById('varInput').value = '';
    //     document.getElementById('wordNeeded').innerHTML = 'Enter a number greater than 1';
    // }
}

// console.log(adjective)
// console.log(place)
// console.log(numb)
// console.log(animal)
// console.log(verb)


// MadLib_1 Function
// MadLib_2 Function
// MadLib_3 Function
