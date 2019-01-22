var success = false;
var gameOver = false;

var boxContent = document.getElementById("instBox");
var buttons = document.querySelector("#buttons");
var collectionOfExercises = document.querySelector("#exercises");


buttons.addEventListener("click", exerciseRoutine, false);
buttons.addEventListener("click", buttonClick, false);



for (i = 0; i < buttons.childElementCount; i++) {
    buttons.children[i].innerText = "Step " + (i + 1);
}

//etTimeout(function() { exerciseRoutine() }, 5000);


// var el = document.getElementById('button1')
// el.addEventListener('click', boxContent.innerHTML = "button1 clicked!");


function buttonClick(e) {
    if (gameOver === false) {
        if (e.target !== e.currentTarget) {
            var clickedItem = e.target.id;
            if (exercise.length === 0) {
                success = true;
                Success();
            }
            else {
                var foo = " Now Perform " + "Step " + exercise[0].match(/\d+/)[0];
                boxContent.innerHTML = "Step " + clickedItem.match(/\d+/)[0] + " Complete." + foo;
            }
        }
    }
}

var bar = 0;
var currentExercise;
var exercise = [];

function startex1() {
    //exercise = ["button1", "button8", "button2", "button4", "button5"];
    exercise = ["button4", "button2", "button5"];
    boxContent.innerHTML = "Start Exercise 1. Start with Step " + exercise[0].match(/\d+/)[0];
    gameOver = false;
}

function startex2() {
    //exercise = ["button1", "button8", "button2", "button4", "button5"];
    exercise = ["button8", "button1", "button11"];
    boxContent.innerHTML = "Start Exercise 2. Start with Step " + exercise[0].match(/\d+/)[0];
    gameOver = false;
}

//var steps = ["button1", "button8", "button2", "button4", "button5"];

function exerciseRoutine(e) {
    button = e.target.id;
    if (e.target !== e.currentTarget) {
        if (button === exercise[0]) {
            exercise.shift();
        }
        else {
            //  exercise.length === 1 ? bar = "" : bar = ". Now Click " + "Button " + exercise[1].match(/\d+/)[0];
            //  boxContent.innerHTML = "Clicked " + button.match(/\d+/)[0] +  bar ;
            gameOver = true;
            GameOver();
        }
    }


    /* boxContent.innerHTML = "Perform Step 8";
     boxContent.innerHTML = "Perform Step 2";
     boxContent.innerHTML = "Perform Step 4";
     boxContent.innerHTML = "Perform Step 5";
     boxContent.innerHTML = "Success";*/
}



window.setInterval(function () {
    
    disableExercises();
    ActiveExercise();
    foo1();
}, 60)

function disableExercises() {
    $(collectionOfExercises.children).prop('disabled', true);
}

function ActiveExercise() {
    currentExercise = collectionOfExercises.children[bar];
    $(currentExercise).prop('disabled', false);
}

function foo1() {
    if (bar === collectionOfExercises.childElementCount) {
        $(collectionOfExercises.children).prop('disabled', false);
    }
}

function Success() {
    if (success === true) {
        boxContent.innerHTML = "Success!";
        bar = bar + 1;
    }
}

function GameOver() {
    if (gameOver === true)
        boxContent.innerHTML = "Not it. Try again";
}

function disableWindow(window1)
{
    $("#" +window1+ " *").prop("disabled", true)
}
