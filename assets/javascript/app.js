

function start() {
    $("#questionsContainer").hide();
    $("#resultsContainer").hide()
}
start();

$("#start").on("click", function () {
    $("#startGameContainer").hide();
    $("#questionsContainer").show();
    $("#resultsContainer").hide()

    var count = 91;
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
    
    $("#resultsContainer").reset();
});

$("#done").on("click", function () {
    $("#startGameContainer").hide();
    $("#questionsContainer").hide();
    $("#resultsContainer").show();

});

var valOne = "true";
var valTwo = "true";
var valThree = "false";
var valFour = "true";
var valFive = "true";
var valSix = "false";
var valSeven = "true";
var valEight = "false";
var valNine = "true";
var valTen = "true";


correct = 0;
incorrect = 0;



$("input:radio[name='group1']").click(function () {
    var radioOneValue = $("input:radio[name='group1']:checked").attr("data-value");
    console.log(radioOneValue);
    if (radioOneValue === "true") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});



$("input:radio[name='group2']").click(function () {
    var radioTwoValue = $("input:radio[name='group2']:checked").attr("data-value");
    console.log(radioTwoValue);
    if (radioTwoValue === "true") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});

$("input:radio[name='group3']").click(function () {
    var radioThreeValue = $("input:radio[name='group3']:checked").attr("data-value");
    console.log(radioThreeValue);
    if (radioThreeValue === "false") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});

$("input:radio[name='group4']").click(function () {
    var radioFourValue = $("input:radio[name='group4']:checked").attr("data-value");
    console.log(radioFourValue);
    if (radioFourValue === "true") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});

$("input:radio[name='group5']").click(function () {
    var radioFiveValue = $("input:radio[name='group5']:checked").attr("data-value");
    console.log(radioFiveValue);
    if (radioFiveValue === "true") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});

$("input:radio[name='group6']").click(function () {
    var radioSixValue = $("input:radio[name='group6']:checked").attr("data-value");
    console.log(radioSixValue);
    if (radioSixValue === "false") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});

$("input:radio[name='group7']").click(function () {
    var radioSevenValue = $("input:radio[name='group7']:checked").attr("data-value");
    console.log(radioSevenValue);
    if (radioSevenValue === "true") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});

$("input:radio[name='group8']").click(function () {
    var radioEightValue = $("input:radio[name='group8']:checked").attr("data-value");
    console.log(radioEightValue);
    if (radioEightValue === "false") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});

$("input:radio[name='group9']").click(function () {
    var radioNineValue = $("input:radio[name='group9']:checked").attr("data-value");
    console.log(radioNineValue);
    if (radioNineValue === "true") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});

$("input:radio[name='group10']").click(function () {
    var radioTenValue = $("input:radio[name='group10']:checked").attr("data-value");
    console.log(radioTenValue);
    if (radioTenValue === "true") {
        correct++;
    }
    else {
        incorrect++;
    }
    $("#correctAn").text(correct);
    $("#incorrectAn").text(incorrect);
});























