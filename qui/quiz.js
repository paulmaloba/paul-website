let score = 0;
let currentQuiz = 0;
let currentQuizData;

function sta() {
    document.querySelector(".title").style.display = "none";
    document.querySelector(".quiz").style.display = "block";
    loadQuiz();
}

const quizData = [
    {
        question: "What is Triple M's Real name?",
        a: "Misheck Mambwe",
        b: "Moses Mulenga",
        c: "Mulenga Titus",
        correct: "Misheck Mambwe"
    }, 
    {
        question: "Who won the best album of the year for 2023 Kwacha awards?",
        a: "Yo Maps",
        b: "Chef 187",
        c: "Macky 2",
        correct: "Chef 187"
    },
    {
        question: "What's Jemax's real name ?",
        a: "James Kalaba ",
        b: "Jemude Kabwe",
        c: "James Kawale",
        correct: "James Kawale"
    },
    {
        question: "Who won the Kwacha music award for best make artist in 2022 ?",
        a: "Slap D ",
        b: "Macky 2",
        c: "Yo maps ",
        correct: "Yo maps "
    },
    
    {
        question: "Which Zambian social media influencer is known for her controversial talk show 'The Mutale Mwanza Show'?",
        a: "Martha Mwamba",
        b: "Mutale Mwanza",
        c: "Salma Sky",
        correct: "Mutale Mwanza"
    },
    {
        question: "What is the title of Chef 187’s first studio album?",
        a: "Heart of a Lion",
        b: "Amnesia",
        c: "Bon Appetit",
        correct: "Heart of a Lion"
    },
    {
        question: "Which Zambian actress starred in the South African soap 'Generations'?",
        a: "Cleopatra Simfukwe",
        b: "Cassie Kabwita",
        c: "Tasha Chansa",
        correct: "Cleopatra Simfukwe"
    },
    {
        question: "Which artist is known for the viral song 'Try Again'?",
        a: "T-Sean",
        b: "T-Bwoy",
        c: "Yo Maps",
        correct: "Yo Maps"
    },
    {
        question: "Which Zambian actress has starred in both local and international productions like 'I Am Not A Witch'?",
        a: "Lydia Mubanga",
        b: "Margaret Mulubwa",
        c: "Mable Mutale",
        correct: "Margaret Mulubwa"
    },
    {
        question: "Which Zambian musician is known for the song 'Jealous'?",
        a: "Roberto",
        b: "Slapdee",
        c: "Pompi",
        correct: "Pompi"
    },
    {
        question: "Which Zambian hip-hop artist is known as 'King of Kopala'?",
        a: "Macky 2",
        b: "Chef 187",
        c: "Drifta Trek",
        correct: "Macky 2"
    },
    {
        question: "What is the real name of Zambian musician Yo Maps?",
        a: "Elton Mulenga",
        b: "Yoane Mapulanga",
        c: "Yosiah Mweemba",
        correct: "Elton Mulenga"
    },
    {
        question: "Which Zambian actor is popularly known for his role in 'Zuba'?",
        a: "Mutale Monde",
        b: "Mwansa Bwalya",
        c: "Jackson Mwanza",
        correct: "Mwansa Bwalya"
    },
    {
        question: "Which Zambian actress gained fame for her role in the TV show 'Mpali'?",
        a: "Mutale Nalumango",
        b: "Cleopatra Simfukwe",
        c: "Natasha Van Der Maas",
        correct: "Natasha Van Der Maas"
    },
    {
        question: "Who won the Kwacha Music Award for Best Female Artist in 2021?",
        a: "Cleo Ice Queen",
        b: "Mampi",
        c: "Wezi",
        correct: "Wezi"
    },
    {
        question: "Which Zambian actor played a role in the Hollywood movie 'The Siege of Jadotville'?",
        a: "Patrick Shumba Mutukwa",
        b: "Chrispine Mwape",
        c: "Crispin Simataa",
        correct: "Patrick Shumba Mutukwa"
    },
    {
        question: "Who is the Zambian artist behind the album 'Mother Tongue'?",
        a: "Chef 187",
        b: "Sampa The Great",
        c: "Slapdee",
        correct: "Sampa The Great"
    },
    {
        question: "Which Zambian actress starred in the drama series 'Kabanana'?",
        a: "Ngosa Chungu",
        b: "Lydia Mubanga",
        c: "Malita Mwanza",
        correct: "Ngosa Chungu"
    },
    {
        question: "Which Zambian artist won the Best International Act at the 2021 AFRIMMA awards?",
        a: "Yo Maps",
        b: "Slapdee",
        c: "Macky 2",
        correct: "Slapdee"
    },
    {
        question: "Which Zambian influencer is popularly known for fitness and lifestyle content on Instagram?",
        a: "Chikabala Zulu",
        b: "Sarah Nyirenda",
        c: "Tio Nason",
        correct: "Sarah Nyirenda"
    },
    {
        question: "Which Zambian artist is known for the hit song 'Bwacha'?",
        a: "Jemax",
        b: "Yo Maps",
        c: "Chef 187",
        correct: "Yo Maps"
    },
    {
        question: "Which Zambian actor won an international award for his role in 'Black Dollar'?",
        a: "Chrispine Mwape",
        b: "Patrick Shumba Mutukwa",
        c: "Michelo Malambo",
        correct: "Chrispine Mwape"
    },
    {
        question: "Which Zambian artist is popularly known as the 'Queen Diva'?",
        a: "Mampi",
        b: "Salma Sky",
        c: "Wezi",
        correct: "Mampi"
    },
    {
        question: "Who played the role of 'Mutinta' in the Zambian series 'Zuba'?",
        a: "Suwilanji Siwale",
        b: "Kasonde Mwila",
        c: "Phenny Walubita",
        correct: "Suwilanji Siwale"
    },
    {
        question: "Which Zambian YouTuber is known for satirical political commentary?",
        a: "B'Flow",
        b: "Pilato",
        c: "Kings Malembe",
        correct: "Pilato"
    },
    {
        question: "Which actor portrays the character 'Hambe' in the Zambian series 'Mpali'?",
        a: "Robam Mwaba",
        b: "Jackson Chirwa",
        c: "Collins Chipuma",
        correct: "Collins Chipuma"
    },
    {
        question: "Which Zambian social media personality is known for her activism on women's rights?",
        a: "Pilato",
        b: "Lulu Haangala",
        c: "Iris Kaingu",
        correct: "Lulu Haangala"
    },
    {
        question: "Which Zambian musician is known for the song 'Jealous'?",
        a: "Roberto",
        b: "Slapdee",
        c: "Pompi",
        correct: "Pompi"
    },
    {
        question: "Which artist is known for the viral song 'Try Again'?",
        a: "T-Sean",
        b: "T-Bwoy",
        c: "Yo Maps",
        correct: "Yo Maps"
    }
];
    


function loadQuiz() {
    Document.querySelector("#final").style.display = "none";
    document.querySelector(".hom").style.display = "block";
    // Set current quiz data globally
    currentQuizData = quizData[currentQuiz];
    
    // Load question and choices
    document.getElementById("quest").textContent = currentQuizData.question;
    document.getElementById("a_text").textContent = currentQuizData.a;
    document.getElementById("b_text").textContent = currentQuizData.b;
    document.getElementById("c_text").textContent = currentQuizData.c;

    // Uncheck any previously selected radio button
    const radios = document.querySelectorAll('input[name="choice"]');
    radios.forEach(radio => radio.checked = false);
}

function next() {
    const chosenRadio = document.querySelector('input[name="choice"]:checked');
    
    if (chosenRadio) {
        // Access the text next to the radio button using the IDs of the spans
        let selectedAnswer;
        if (chosenRadio.id === "ansa") selectedAnswer = document.getElementById("a_text").textContent;
        else if (chosenRadio.id === "ansb") selectedAnswer = document.getElementById("b_text").textContent;
        else if (chosenRadio.id === "ansc") selectedAnswer = document.getElementById("c_text").textContent;

        if (selectedAnswer === currentQuizData.correct) {
            document.querySelector(".wr").style.display = "block";
            document.querySelector(".wrong").style.display = "none";
           document.getElementById("display"). textContent = score++ + " points";
        } else {
           document.querySelector(".wrong").style.display = "block";
           document.querySelector(".wr").style.display = "none";
        }
           // Move to the next question
        currentQuiz++;
        

        if (currentQuiz < quizData.length) {
            loadQuiz(); // Load the next quiz question
        } else {
            document.getElementById("final"). textContent = "Game Complited You scored " + (score / quizData.length).toFixed(2) * 100 + "%";
            document.querySelector("#final").style.display = "block";
            document.querySelector(".title").style.display = "none"; // Hide the quiz
            document.querySelector(".quiz").style.display = "none";
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function home() {
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".title").style.display = "block";
}
function back() {
    if (currentQuiz > 0) {
        currentQuiz--;
        loadQuiz();
    }
}
function ok() {
    loadQuiz();
}
/*let sco = currentQuiz.score;
document.getElementById("display"). textContent = sco;
*/