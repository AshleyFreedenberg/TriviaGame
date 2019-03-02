

function start() {
    $("#questionsContainer").hide();
    $("#resultsContainer").hide()
}
start();

$("#start").on("click", function () {
    $("#startGameContainer").hide();
    $("#questionsContainer").show();
    $("#resultsContainer").hide()

    var count = 120;
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

$("#done").on("click", function () {
    $("#startGameContainer").hide();
    $("#questionsContainer").hide();
    $("#resultsContainer").show();

    correct = 0;
    incorrect = 0;
    unanswered = 0;

    valOne = "1";
    valTwo = "1";
    valThree = "0";
    valFour = "1";
    valFive = "1";
    valSix = "0";
    valSeven = "1";
    valEight = "0";
    valNine = "1";
    valTen = "1";


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



});


























