$(document).ready(function() {
    $("#formContainerTF").slideUp(10);
    $("#formContainerUT").slideUp(10);
    $("#quizContainer").slideUp(50);
    $("#resultsContainer").slideUp(50);
    
        var time = 1;
        intervalId;
//replicate stopwatch's timer and converter into seconds, only decreasing instead of increasing, change time interval after testing the Quiz for what a reasonable time limit would be
        var winsTF = 0;
        var lossesTF = 0;
        var winsUT = 0;
        var lossesUT = 0;
        var myArrayIndex = 0;
        var userAnswers = [];
        // var Qs = 0; Qs < arrayLength; Qs++;
        var myArray = {
            
            uselessTrivia: [
            //Q1
                {
                answer: "C. Through their knees",
                q: "1. How do crickets hear?",
                options: [
                    "A. Through their wings",
                    "B. Through their belly",
                    "C. Through their knees",
                    "D. Through their tongue",
                    ]
                },
                //Q2
                {
                answer: "A. Chicago",
                q: "2. Which American city invented plastic vomit?",
                options: [
                    "A. Chicago",
                    "B. Detroit",
                    "C. Columbus",
                    "D. Baltimore",
                    ]
                },
                // Q3
                {
                answer: "B. A car",
                q: "3. In ʻBen Hurʼ, which modern thing can be seen during the chariot scene?",
                options: [
                    "A. A waitress",
                    "B. A car",
                    "C. A postbox",
                    "D. A street lamp",
                    ]
                },
                // Q4
                {
                answer: "C. Red",
                q: "4. What was Karl Marxʼs favorite color?",
                options: [
                    "A. Brown",
                    "B. Blue",
                    "C. Red",
                    "D. Purple",
                    ]
                },
                // Q5
                {
                answer: "D. Chew gum",
                q: "5. Whatʼs the best way to stop crying while peeling onions?",
                options: [
                    "A. Sniff almonds",
                    "B. Suck Lemons",
                    "C. Eat Cheese",
                    "D. Chew gum",
                    ]
                },
                // Q6
                {
                answer: "A. Laugh",
                q: "6. On average, what do you do 15 times a day?",
                options: [
                    "A. Laugh",
                    "B. Burb",
                    "C. Fart",
                    "D. Lick your lips",
                    ]
                },
                //Q7
                {
                answer: "D. Green",
                q: "6. What color was Coca-Cola originally?",
                options: [
                    "A. Red",
                    "B. Purple",
                    "C. Beige",
                    "D. Green",
                    ]
                },            
            
            ],
            trueFalse: [
            {    
                q: "Is the sky blue?",
                a: "t",
            },
            {
                q: "Is Gandalf an Elf?",
                a: "f",
            },
            {
                q: "An ostrich&#39;s eye is bigger than its brain.",
                a: "t",
            },
            {
                q: "The phrase &#39;O.M.G.&#39; was used in 1917 in a letter to Winston Churchill.",
                a: "t",
            },
            {
                q: "A duck&#39;s quack doesn&#39;t echo.",
                a: "f",
            },
            {
                q: "When David Hasselhoff divorced, he lost possession of the catchphrase &#34;Don&#39;t Hassle the Hoff.&#34;",
                a: "f",
            },
            {
                q: "Bubble gum contains rubber.",
                a: "t",
            },
            {
                q: "Camels have three sets of eyelids.",
                a: "t",
            },
            {
                q: "A jellyfish is 95 percent water.",
                a: "t",
            },
            {
                q: "Los Angeles is farther west than Reno.",
                a: "f",
            },
            ]
        }

    $("#start").click(function() {
        $("#quizContainer").slideDown(1000);
        $("#start").slideUp(300);
        $("#trueFQuiz").click(function() {
            $("#formContainerTF").slideDown(1000, function() {
                $("#categoryTF").text("True or False?");
                for(i = 0; i < myArray.trueFalse.length; i++) 
                var cloneCount = 1;;
                $("#next").click(function() {
                    $("#formContainerTF")
                        .clone()
                        .attr('id', 'id'+ cloneCount++)
                        .prependTo("resultsContainer");
                });
// once the clone works properly, use jQuery to grab the #questionTF h4 and use .html to insert each question into the form, as it is cloned.


//use an event listener to push the user choices into the userAnswers empty array for comparison at the end with the correct answers 
//Alternatively, run the comparison each time and provide the answers, then instead of cloning the form, replace the previous question with a new one, and do not use a for loop.


            })
        })
//when uselessTrivia is picked, run slideDown on formContainerUT instead and run almost the same code as before except for this one we will need to add a couple of extra steps


        $("#uselessTrivia").click(function() {
            $("#formContainerUT").slideDown(1000, function() {
                 $("#categoryUT").text("Useless Trivia!");
//we will need to grab each radio button using their value (or else assign them an id/class, either way) and use that to .html or .text the multiple choice options into the radio inputs. 

            });
        });    
    });

    

    $("#submit").click(function() {
        $("#resultsContainer").slideDown(1500, function() {
//use an if else to also slideDown the results for either the trueFalse or the uselessTrivia, depending on which of the two quizzes was taken, easiest way would be to tag each of the submit buttons with its own id and create separate functions that do the same thing for each set of results. In that case I could probably get rid of the overall resultsContainer as well as it is a hold over from when I was going to mix and match both sets of Q's
            $("#correctTF").html(winsTF);
            $("#incorrectTF").html(lossesTF);
            $("#scoreTF").html(winsTF/myArray.trueFalse.length);
        });
        
    });

    
//    <form id="Q1">
{/* <fieldset>
<label class="radio-inline">
    <input type="radio" name="gender" value="male" checked> Male<br>
</label>
<label class="radio-inline">
    <input type="radio" name="gender" value="female"> Female<br>
</label>
<label class="radio-inline">
    <input type="radio" name="gender" value="other"> Other
</label>
</fieldset>
</form> */}
// $("#formContainerTF").clone(i).appendTo("formContainerTF");
//                 var formFill = function() {
//                     questionPickTF;
//                     $(".true").
//                 }
        // function renderQuestion() {
        //     if (questionIndex <= (questions.length - 1)) {
        //     document.querySelector("#question").innerHTML = questions[questionIndex].q;
        //     }
        //     else {
        //     document.querySelector("#question").innerHTML = "Game Over!";
        //     document.querySelector("#score").innerHTML = "Final Score: " + wins + " out of " + myArray.length;
        //     }
        // }

        // $("")



        // document.onkeyup = function (event) {

        //     if (myArrayIndex === myArray.length) {
        //         return;
        //     }

        //     var userGuess = event.key;



        //     if ((userGuess === "t") || (userGuess === "f")) {

        //         if (userGuess === myArray[myArrayIndex].a) {
        //             alert("Correct!");
        //             wins++;

        //         } else {
        //             alert("Wrong! ")
        //             losses--;
        //         }
        //         myArrayIndex++;
        //         document.write(myArray[myArrayIndex].q);


            // }{
                // var questionPickTF = $("#questonTF").html(myArray.trueFalse[i].q);
                // console.log(questionPickTF);
});
