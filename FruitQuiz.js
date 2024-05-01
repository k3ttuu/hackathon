function displayQuiz() {
    const questions = [
        {
            question: "You have just started your job at a kindergarten. What is the first activity you do with the class?",
            choices: ["Take time to observe the children interacting and join in their play", "Come up with a detailed lesson plan!!"],
            weights: [
               // {judgingScore: +3, perceivingScore: 0 }, // Weight for first choice
              //  {perceivingScore: +1, judgingScore:0 }, // Weight for second choice
                {thrifter: +1, collector: +1 }, // Weight for first choice
                {kanchiong: +1}, // Weight for second choice
            ]
        },
        {
            question: "It’s time to introduce yourself to the students!",
            choices: ["Let’s do a straightforward introduction", "Let’s get them to play an icebreaker game!"],
            weights: [
               //{thinkingScore: +1, feelingScore: 0 }, // Weight for first choice
                //{feelingScore: +3, thinkingScore: 0 } // Weight for second choice 
                {thrifter: +0, collector: +0 }, // Weight for first choice
                {kanchiong: +0}, // Weight for second choice
            ]
        },
        {
            question: "The kid is rowdy and you want to calm him / her down, what do you do?",
            choices: ["Offer them a task with a physical component (helping carry something, moving chairs) to redirect their attention", 
            "Give them two acceptable options (eg. helping to keep toys or draw a picture) and praise their efforts when they cooperate."],
            weights: [
               // {intuitionScore: +3, sensingScore: 0 } , // Weight for first choice
               // {sensingScore: +1, intuitionScore: 0 } , // Weight for second choice
                {thrifter: +1, cheapskate: +2 } , // Weight for first choice
                {angel: +1, collector: +2 } , // Weight for second choice
            ]
        },
        {
            question: "There is a kid who seems withdrawn during an activity, how would you tackle this situation",
            choices: ["Sit near them during the activity, without pressuring interaction.", "Pair them with a friendly child for a short activity"],
            weights: [
                //{perceivingScore: +1, judgingScore: 0 } , // Weight for first choice
                //{judgingScore: +3, perceivingScore: 0 }, // Weight for second choice
                {thrifter: +2, cheapskate: +1, angel: +1 } , // Weight for first choice
                {kanchiong: +0},// Weight for second choice
            ]
        },
        {
            question: "The class is noisy, how would you grab their attention?",
            choices: ["Start speaking very quietly, encouraging children to get quieter to hear you. Make it a playful challenge", 
            "Have a pre-established signal that means Time to listen."],
            weights: [
                //{sensingScore: +1, intuitionScore: 0 } , // Weight for first choice
                //{intuitionScore: +3, sensingScore: 0 } , // Weight for second choice
                {collector: +2} , // Weight for first choice
                {kanchiong: +0}
            ]
        },
        {
            question:"Yay there’s some free time for activities, what would you let the kids do?",
            choices: ["Go for outdoor play", "Do arts and crafts!"],
            weights: [
                //{thinkingScore: +1, feelingScore: 0 } , // Weight for first choice
                //{feelingScore: +3, thinkingScore: 0 } , // Weight for second choice
                {angel: +1} , // Weight for first choice
                {thrifter: +1, cheapskate: +2 } , // Weight for second choice
            ]
        },
        {
            question:"A child falls and scrapes their knee. They're crying and need comfort.",
            choices: ["Offer soothing words and a space to calm down", "Distract them with a toy while providing comfort"],
            weights: [
                //{sensingScore: +1, intuitionScore: 0 } , // Weight for first choice
                //{intuitionScore: +3, sensingScore: 0 } , // Weight for intuition 
                {scaredy: +1} , // Weight for first choice
                {kanchiong: +1} , // Weight for intuition 
            ]
        },
        {
            question:"A child comes to school visibly tired and mentions they didn't sleep well because their parents were arguing.",
            choices: ["Reach out to the child directly and ask what’s going", "Subtly bring up the incident to the child’s parents to find out more "],
            weights: [
                //{introvertScore: +1, extrovertScore: 0 } , // Weight for first choice
                {kanchiong: +2} , // Weight for first choice
                {kanchiong: +0}
            ]
        },
        {
            question:"It's snack time, and children are expected to open their own packages and clean up after themselves. Some need assistance.",
            choices: ["Pair children who are independent with those needing help, fostering peer support", "Demonstrate opening packages step-by-step, offering positive encouragement for each attempt"],
            weights: [
                //{thinkingScore: +3, feelingScore: 0 } , // Weight for first choice
                //{feelingScore: +1, thinkingScore: 0 } , // Weight for second choice
                {} , // Weight for first choice
                {scaredy: +2} , // Weight for second choice
                {kanchiong: +0},
            ]
        },
        {
            question:"During a letter-recognition activity, you notice a child struggling to identify basic shapes and sounds.",
            choices: ["Use textured letters, draw letters in sand, or form them with play dough to engage different senses.", "Play sound/letter matching games with visuals to make it fun."],
            weights: [
                //{thinkingScore: +3, feelingScore: 0 } , // Weight for first choice
                //{feelingScore: +1, thinkingScore: 0 } , // Weight for second choice
                {kanchiong: +0} , // Weight for first choice
                {scaredy: +2} , // Weight for second choice
            ]
        },
        {
            question:"You have 15 minutes of extra time after your lesson. What do you do?",
            choices: ["Revisit a song, game, or concept from the lesson in a new way.", "We have time for another short activity!"],
            weights: [
                //{extrovertScore: +3, introvertScore: 0 } , // Weight for first choice
                //{introvertScore: +1, extrovertScore: 0 } , // Weight for second choice
                {kanchiong: +1} , // Weight for first choice
                {angel: +1} , // Weight for second choice
            ]
        },
        {
            question:"It’s time to go home, Children are boarding the bus. One child realizes their usual bus partner is absent. They're getting anxious and refusing to get on.",
            choices: ["Pair them with another friendly child on the bus", "Reassure them that their bus partner is absent and will be back soon"],
            weights: [
                //{extrovertScore: +3, introvertScore: 0 } , // Weight for first choice
                //{introvertScore: +1, extrovertScore: 0 } , // Weight for second choice
                {angel: +2} , // Weight for first choice
                {kanchiong: +0}
            ]
        },
        {
            question: " It’s the end of your shift!",
            choices: ["Click to reveal your personality type!"],
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
            "1 (2).png",
            "2 (6).png",
            "3 (4).png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
            "SHRI.gif",
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
        const thumbnailImage = document.querySelector('img[src="COVER PAGE.png"]');
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
                "ACE": "BUBBLY.jpg",
                "ACF": "FIERCE.jpg", 
                "ADE": "GBB.jpg",
                "ADF": "HYPE.jpg",
                "BCE": "FIERCE.jpg",
                "BCF": "INNOVATIVE.jpg",
                "BDE": "BUBBLY.jpg",
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
// document.addEventListener('DOMContentLoaded', function() {
//    const shareButton = document.querySelector('.share-button');
//
//    shareButton.addEventListener('click', function() {
//        const url = window.location.href;

//        navigator.clipboard.writeText(url)
//            .then(() => {
//                alert('Quiz URL copied to clipboard!');
//            })
//            .catch(err => {
//                console.error('Failed to copy URL: ', err);
//            });
//   });
//});

// Select the button element
const backToHomeButton = document.getElementById('back-to-home');

// Add event listener for the button click
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-home');

    backButton.addEventListener('click', function() {
        // Redirect to the home page or perform any other action you want
        window.location.href = 'https://k3ttuu.github.io/hackathon/'; // Replace 'home.html' with the actual URL of your home page
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
