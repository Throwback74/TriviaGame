$(document).ready(function() {
    $("#start").click(function() {




    }),
        var wins = 0;
        var losses = 0;
        var myArrayIndex = 0;

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


            // }
});
