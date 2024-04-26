function displayQuiz() {
    const questions = [
        {
            question: "You’ve just opened the Carousell app and you’re excited to start shopping. What’s the first thing you do?",
            choices: ["Let’s take a look at what categories there are", "I already know what I want to get!!"],
            weights: [
               // {judgingScore: +3, perceivingScore: 0 }, // Weight for first choice
              //  {perceivingScore: +1, judgingScore:0 }, // Weight for second choice
                {thrifter: +1, collector: +1 }, // Weight for first choice
                {kanchiong: +1}, // Weight for second choice
            ]
        },
        {
            question: "You tapped onto the filter function on Carousell, what would you filter first?",
            choices: ["The price", "The condition"],
            weights: [
               //{thinkingScore: +1, feelingScore: 0 }, // Weight for first choice
                //{feelingScore: +3, thinkingScore: 0 } // Weight for second choice 
                {thrifter: +0, collector: +0 }, // Weight for first choice
                {kanchiong: +0}, // Weight for second choice
            ]
        },
        {
            question: "You find an item you love, but it’s a little over your budget.",
            choices: ["I hope the seller is open to negotiations…", "I’ll just get it even if the seller doesn't do negotiations"],
            weights: [
               // {intuitionScore: +3, sensingScore: 0 } , // Weight for first choice
               // {sensingScore: +1, intuitionScore: 0 } , // Weight for second choice
                {thrifter: +1, cheapskate: +2 } , // Weight for first choice
                {angel: +1, collector: +2 } , // Weight for second choice
            ]
        },
        {
            question: "As you scroll through, you see some sellers listing free items.",
            choices: ["Let’s check out what they have!", "Nah… not my thing"],
            weights: [
                //{perceivingScore: +1, judgingScore: 0 } , // Weight for first choice
                //{judgingScore: +3, perceivingScore: 0 }, // Weight for second choice
                {thrifter: +2, cheapskate: +1, angel: +1 } , // Weight for first choice
                {kanchiong: +0},// Weight for second choice
            ]
        },
        {
            question: "Oh hey, there’s this seller selling something i’ve been looking for! But the price is quite steep and he / she is not open to negotiations.",
            choices: ["Money is not an issue! I’ll ‘like’ the listing!", "I don’t think I’ll get it them :<"],
            weights: [
                //{sensingScore: +1, intuitionScore: 0 } , // Weight for first choice
                //{intuitionScore: +3, sensingScore: 0 } , // Weight for second choice
                {collector: +2} , // Weight for first choice
                {kanchiong: +0}
            ]
        },
        {
            question:"Two sellers are selling the same thing! Which would you get?",
            choices: ["The brand new item, but more expensive", "The used item, but cheaper"],
            weights: [
                //{thinkingScore: +1, feelingScore: 0 } , // Weight for first choice
                //{feelingScore: +3, thinkingScore: 0 } , // Weight for second choice
                {angel: +1} , // Weight for first choice
                {thrifter: +1, cheapskate: +2 } , // Weight for second choice
            ]
        },
        {
            question:"OMG! This item seems like a good steal and there’s no defects!",
            choices: ["Let’s double check the listing details before purchasing", "Buy NOW!"],
            weights: [
                //{sensingScore: +1, intuitionScore: 0 } , // Weight for first choice
                //{intuitionScore: +3, sensingScore: 0 } , // Weight for intuition 
                {scaredy: +1} , // Weight for first choice
                {kanchiong: +1} , // Weight for intuition 
            ]
        },
        {
            question:"Before you knew it, you’ve already spent an hour on Carousell! You’ve many ‘liked’ listings, what do you do?",
            choices: ["Get them ASAP before they’re gone!!", "I’ll need to think about it…"],
            weights: [
                //{introvertScore: +1, extrovertScore: 0 } , // Weight for first choice
                {kanchiong: +2} , // Weight for first choice
                {kanchiong: +0}
            ]
        },
        {
            question:"Oh? What’s this buy button thingy?",
            choices: ["Let’s use it!", "Nah doesn’t seem safe… I’ll stick to the old way of buying things"],
            weights: [
                //{thinkingScore: +3, feelingScore: 0 } , // Weight for first choice
                //{feelingScore: +1, thinkingScore: 0 } , // Weight for second choice
                {} , // Weight for first choice
                {scaredy: +2} , // Weight for second choice
                {kanchiong: +0},
            ]
        },
        {
            question:"It’s time to pay, what payment methods would you use?",
            choices: ["Online payment methods", "I want to meet up! It’s safer"],
            weights: [
                //{thinkingScore: +3, feelingScore: 0 } , // Weight for first choice
                //{feelingScore: +1, thinkingScore: 0 } , // Weight for second choice
                {kanchiong: +0} , // Weight for first choice
                {scaredy: +2} , // Weight for second choice
            ]
        },
        {
            question:"Yay! Your purchase is confirmed!",
            choices: ["I wonder when the seller will ship my item…", "Time to sit back and wait for my item to arrive!"],
            weights: [
                //{extrovertScore: +3, introvertScore: 0 } , // Weight for first choice
                //{introvertScore: +1, extrovertScore: 0 } , // Weight for second choice
                {kanchiong: +1} , // Weight for first choice
                {angel: +1} , // Weight for second choice
            ]
        },
        {
            question:"You’ve received your item and it’s exactly what you wanted!",
            choices: ["I’ll leave a review for the seller", "Time to search for my next buy!"],
            weights: [
                //{extrovertScore: +3, introvertScore: 0 } , // Weight for first choice
                //{introvertScore: +1, extrovertScore: 0 } , // Weight for second choice
                {angel: +2} , // Weight for first choice
                {kanchiong: +0}
            ]
        },
        {
            question: "Processing your Personality Type...",
            choices: ["Click to reveal!"],
            weights: [
                //{extrovertScore: 0, introvertScore: 0 }, // laceholder
                //{introvertScore: 0, extrovertScore: 0}, //Placeholder
                {angel: 0, thrifter: 0 }, // laceholder
                {thrifter: 0, angel: 0}, //Placeholder
            ]
        },
    ]


    //Variables for scores 
    let currentQuestionIndex = 0;
    let introvertScore = 0;
    let extrovertScore = 0;
    let judgingScore = 0;
    let perceivingScore = 0;
    let sensingScore = 0;
    let intuitionScore = 0;
    let thinkingScore = 0;
    let feelingScore = 0;
    let thrifter = 0
    let angel = 0
    let cheapskate = 0
    let kanchiong = 0
    let scaredy = 0
    let collector = 0


    function displayQuestionImage(questionIndex) {
        const imageURLs = [
            "qn1graphic.png",
            "qn2graphic.png",
            "qn3graphic.png",
            "qn4graphic.png",
            "qn5graphic.png",
            "qn6graphic.png",
            "qn7graphic.png",
            "qn8graphic.png",
            "qn9graphic.png",
            "qn10graphic.png",
            "qn11graphic.png",
            "qn12graphic.png",
            "qn1graphic.png",
        ];
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.src = imageURLs[questionIndex];
    }

    document.getElementById('begin-quiz').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
    });

    //Function to display the current question and choices
    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const progressImageElement = document.getElementById('question-progress-image');
        const choiceContainers = document.getElementById('choices');
        
        choiceContainers.innerHTML = '';
        
        questionElement.textContent = currentQuestion.question;
        progressImageElement.src = getQuestionProgressImage(currentQuestionIndex);
        
        displayQuestionImage(currentQuestionIndex);

        currentQuestion.choices.forEach((choice, index) => {
                //Buttons for choices
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
        }

    //Function to get progress bar image URL for the current question 
    function getQuestionProgressImage(questionIndex) {
        const progressImageURLs = [
            "Q1 progress.svg",
            "Q2 progress.svg",
            "Q3 progress.svg",
            "Q4 progress.svg",
            "Q5 progress.svg",
            "Q6 progress.svg",
            "Q7 progress.svg",
            "Q8 progress.svg",
            "Q9 progress.svg",
            "Q10 progress.svg",
            "Q11 progress.svg",
            "Q12 progress.svg",
        ];
        return progressImageURLs[questionIndex] || "";
    }

    //Function to handle choice click
    function handleChoiceClick(choiceIndex) {
        // Update scores based on user response
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        console.log("Selected choice weight:", selectedChoiceWeight);

                //Update scores based on weight of selected choice
                if (selectedChoiceWeight.hasOwnProperty('thrifter')) {
                    thrifter += selectedChoiceWeight.thrifter;
                }
                if (selectedChoiceWeight.hasOwnProperty('collector')) {
                    collector += selectedChoiceWeight.collector;
                }
                if (selectedChoiceWeight.hasOwnProperty('kanchiong')) {
                    kanchiong += selectedChoiceWeight.kanchiong;
                }
                if (selectedChoiceWeight.hasOwnProperty('scaredy')) {
                    scaredy += selectedChoiceWeight.scaredy;
                }
                if (selectedChoiceWeight.hasOwnProperty('cheapskate')) {
                    cheapskate += selectedChoiceWeight.cheapskate;
                }
                if (selectedChoiceWeight.hasOwnProperty('angel')) {
                    angel += selectedChoiceWeight.angel;
                }


            //Move to the next question
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateMBTITypeAndDisplayImage();
            }
        }
        

    //Function to calculate MBTI type based on scores and display image
    function calculateMBTITypeAndDisplayImage() {
        //Calculate introvert/extrovert dimension
        const angelcheapskate = angel >= cheapskate ? "A" :"B";
        //Calculate sensing/intuition dimension
        const collectorthrifter = collector >= thrifter ? "C" : "D";
        //Calculate thinking/feeling dimension
        const scaredyspider= scaredy >= kanchiong ? "E" : "F";
        //Calculate judging/perceiving dimension
        //Produce MBTI type string
        const mbtiTypeString = angelcheapskate + collectorthrifter + scaredyspider

        console.log("MBTI Type:", mbtiTypeString);

        document.getElementById('results').style.display = 'none';
        
        //Remove quiz-related elements from the DOM
        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        const quizContainer = document.getElementById('quiz');
        const thumbnailImage = document.querySelector('img[src="caroubuyer.png"]');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
        thumbnailImage.remove();

        displayImage(mbtiTypeString);

        document.getElementById('results').style.display = 'block'
    }
    
    //Function to calculate MBTI type and return image URL 
        function getMBTIImageUrl(mbtiTypeString) {
            const MBTIImageUrls = {
                "ACE": "resultsangel.jpg",
                "ACF": "resultsdetective.jpg", 
                "ADE": "resultscat.jpg",
                "ADF": "resultsangel.jpg",
                "BCE": "resultsdetective.jpg",
                "BCF": "resultsspider.jpg",
                "BDE": "resultscheapskate.jpg",
                "BDF": "resultsthrifter.jpg.png",
            };
            return MBTIImageUrls[mbtiTypeString] || ""
        }

        //Display image
        function displayImage(mbtiTypeString) {
            const imageURL = getMBTIImageUrl(mbtiTypeString);
            const mbtiImageContainer = document.getElementById('mbti-image');
            const imageElement = document.createElement('img');
            imageElement.src = imageURL;

            mbtiImageContainer.appendChild(imageElement);
    
    }
        //Display the first question when the quiz starts
        displayCurrentQuestion();
        document.addEventListener('DOMContentLoaded', () => {
        const choiceContainers = document.querySelectorAll('.choice-container');
        choiceContainers.forEach((container) => {
            const choices = container.querySelectorAll('button');
            choices.forEach((choice, choiceIndex) => {
                choice.addEventListener('click', () => {
                    handleChoiceClick(choiceIndex);
                });
            });
        });
    });
}

//Call function to start the quiz
displayQuiz();

// Share quiz button click event handler
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');

    shareButton.addEventListener('click', function() {
        const url = window.location.href;

        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Quiz URL copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    });
});

// Select the button element
const backToHomeButton = document.getElementById('back-to-home');

// Add event listener for the button click
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-home');

    backButton.addEventListener('click', function() {
        // Redirect to the home page or perform any other action you want
        window.location.href = 'https://k3ttuu.github.io/carou/'; // Replace 'home.html' with the actual URL of your home page
    });
});

// Function to navigate back to the home page
function navigateToHomePage() {
    // Reset quiz state if needed
    resetQuiz(); // Assuming you have a resetQuiz() function defined

    // Hide quiz page and show the home page
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}
