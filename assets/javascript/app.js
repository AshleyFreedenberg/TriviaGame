

function start() {
    $("#questionsContainer").hide();
    $("#resultsContainer").hide()
}
start();

$("#start").on("click", function () {
    $("#startGameContainer").hide();
    $("#questionsContainer").show();
    $("#resultsContainer").hide()
});

$("#done").on("click", function () {
    $("#startGameContainer").hide();
    $("#questionsContainer").hide();
    $("#resultsContainer").show();
});

$(document).ready(function () {
    var count = 122;
    var counter = setInterval(timer, 1000);

    function timer() {
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
            $("#startGameContainer").hide();
            $("#questionsContainer").hide();
            $("#resultsContainer").show();
        }
        $("#timer").text(count);
    }
    timer();
});

var correct = 0;
var incorrect = 0;
var unanswered = 0;

var valOne = "1";
var valTwo = "1";
var valThree = "0";
var valFour = "1";
var valFive = "1";
var valSix = "0";
var valSeven = "1";
var valEight = "0";
var valNine = "1";
var valTen = "1";

//$(document).ready(function () {
    $("input[type='radio']").click(function () {
        var radioOneValue = $("input[name='one']:checked").val();
        console.log(radioOneValue);
        valOne = "1";
        correct = 0;
        incorrect = 0;
        if (radioOneValue === "0") {
            incorrect++; 
        }
        if (radioOneValue === "1") {
            correct++;
        }

        $("#correctAn").text(correct);
        $("#incorrectAn").text(incorrect);
    });

    $("input[type='radio']").click(function () {
        var radioTwoValue = $("input[name='two']:checked").val();
        console.log(radioTwoValue);
        valTwo = "1";
        correct = 0;
        incorrect = 0;
        if (radioTwoValue === "0") {
            incorrect++;
        }
        if (radioTwoValue === "1") {
            correct++;
        }

        $("#correctAn").text(correct);
        $("#incorrectAn").text(incorrect);
    });
















//});








