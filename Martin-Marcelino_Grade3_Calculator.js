    /* After asking grade 3 students what they want for the calculator 
	they kept yelling skibid toilet at me and saying "hi dad and hi mom"
	at me, I just had to make it as the main theme */
	
	
	
	// Button sounds that doesnt work
    // document.getElementById("soundButton").addEventListener("click", function() {
    //         var audio = document.getElementById("clickSound");
    //         audio.play();
    //     });

    // For the random text that the hero says
    // Array of phrases for the text animation
    const phrases = ["Math Is Fun", "Keep Adding", "Numbers Are Cool", "Learn Every Day", "HENRY LOVES MATH!"];
    // Function to get a random phrase
    function getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    }
    // Function to update the text at specific intervals
    function updateText() {
        const textElement = document.getElementById('randomtexts');
        textElement.textContent = getRandomPhrase(); 
    }
    setInterval(updateText, 3000);


    // for finding addition, next one is subtraction, third one is multiplication and last is division
    function additionFinder() {
        document.getElementById("img").src="superheroironman.png";
        var firstNumber = parseInt(prompt("Place your first number you want to add!"));
        var secondNumber = parseInt(prompt("Place your second number you want to add!"));
        var equalNumber = (firstNumber + secondNumber);
        document.getElementById("equals").innerHTML="The Total Number Is: " + equalNumber;
    }
    function subtactionFinder() {
        document.getElementById("img").src="superhero.png";
        var firstNumber = parseInt(prompt("Place your first number you want to subtract!"));
        var secondNumber = parseInt(prompt("Place your second number you want to subtract!"));
        var equalNumber = (firstNumber - secondNumber);
        document.getElementById("equals").innerHTML="The Total Number Is: " + equalNumber;
    }
    function multiplicationFinder() {
        document.getElementById("img").src="superherobatman.png";
        var firstNumber = parseInt(prompt("Place your first number you want to multiply!"));
        var secondNumber = parseInt(prompt("Place your second number you want to multiply!"));
        var equalNumber = (firstNumber * secondNumber);
        document.getElementById("equals").innerHTML="The Total Number Is: " + equalNumber
    }
    function divisionFinder() {
        document.getElementById("img").src="superherohulk.png";
        var firstNumber = parseInt(prompt("Place your first number you want to divide!"));
        var secondNumber = parseInt(prompt("Place your second number you want to divide!"));
        var equalNumber = (firstNumber / secondNumber);
        document.getElementById("equals").innerHTML="The Total Number Is: " + equalNumber
    }

    // Array of phrases for the random fun fact
    const mathfacts = [ "A circle has 360 degrees!",
    "The number zero was invented in India.",
    "Pi (π) never ends!",
    "A prime number can only be divided by 1 and itself.",
    "The Fibonacci sequence appears in nature!",
    "Every even number greater than 2 is the sum of two primes.",
    "The number 7 is the most popular 'lucky' number.",
    "The sum of all angles in a triangle is always 180°.",
    "Did you know a googol is a 1 followed by 100 zeros?",
    "Negative numbers were once considered impossible!"];
    // Function to get a random phrase
    function randomizedFact() {
        const randomIndex = Math.floor(Math.random() * mathfacts.length);
        const randomFact = mathfacts[randomIndex];
        window.alert(randomFact);
        return randomFact;
    }

    function hideMain() {
        var main = document.getElementById("main");
        var mathgame = document.getElementById("mathgame");

        if (main.style.display === "none") {
            main.style.display = "block";
            mathgame.style.display = "none";
        } else {
            main.style.display = "none";
            mathgame.style.display = "block";
        }
    }

    // For random themes
    function randomThemes() {
    const themes = [
		{
            backgroundImage: "url('skibiditoiletbg.webp')",
            imgSrc: "skibiditoilet.png",
            backgroundColor: "#000000"
        },
        {
            backgroundImage: "url('Superherobg.jpg')",
            imgSrc: "superheroironman.png",
            backgroundColor: "#000000"
        },
        {
            backgroundImage: "url('galaxybg.png')",
            imgSrc: "spaceastronaut.png",
            backgroundColor: "#000000"
        },
        {
            backgroundImage: "url('navybg.webp')",
            imgSrc: "navyadmiral.png",
            backgroundColor: "#00bbff"
        },
        {
            backgroundImage: "url('oceanbg.png')",
            imgSrc: "oceanfish.png",
            backgroundColor: "#00bbff"
        }
    ];

    // Generate a random index to pick a random theme
        const randomIndex = Math.floor(Math.random() * themes.length);

    // Apply the selected theme to the body background and the image src
        document.body.style.backgroundImage = themes[randomIndex].backgroundImage;
        document.body.style.backgroundColor = themes[randomIndex].backgroundColor;
        document.getElementById("img").src = themes[randomIndex].imgSrc;
    }   


    function firstNumber() {
        document.getElementById("code").innerHTML="You got it!";
        var button = document.getElementById("button2","button3");
            button.style.visibility = "hidden"
        }  
        function secondNumber() {
        document.getElementById("code").innerHTML="You lose, you didnt get it!"
        }
        function thirdNumber() {
        document.getElementById("code").innerHTML="You lose, you didnt get it! Not even close" 
        }