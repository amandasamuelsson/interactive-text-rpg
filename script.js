let currentScene = 0 

const scenes = [
   
    {
        descritption: "..och du befinner dig på en bergstopp, skrika eller gå neråt. Skriv in skrik eller gå neråt",
        choices: ["skrik", "gå neråt"],
        nextScene: [1, 2]
    },
    {
        descritption: "Du valde att skrika och en Grip kommer nu och lyfter dig i sina klor. Du funderar på om du ska slå mot klorna med din dolk eller om du ska njuta av utsikten. Vad väljer du att göra?",
        choices: ["slå", "njuta utsikten"],
        nextScene: [2, 1]
    },
    {
        descritption: "Du valde att slå, Gripen släpper taget. Du faller nu handlöst 400 meter och störtar snabbt mot din död. Game over. Vill du börja om?",
        choices: ["ja", "nej"],
        nextScene: [0, 4]
    }
];

window.onload = submitName;

function submitName() {
    alert ("Du kommer nu få spela ett äventyr där du själv kommer få göra ett antal val, hur äventyret slutar avgör du. Lycka till!");
    let Name = prompt("Skriv in ditt namn");
    while (Name === "") {
    alert("Vänligen skriv in ditt namn")
    let Name = prompt("Skriv in ditt namn");
    } 
    alert("Hej och välkommen " + Name);
    alert("Du är en erfaren äventyrare och har varit på många, långa äventyr med dina vapendragare Tola Sparv och Monika Plöjer men nu vaknar du upp..")


function presentScene() {
    const answer = prompt(scenes[currentScene].descritption);
    handleUserChoice(answer)

}
}

function handleUserChoice(answer) {
    console.log(answer);

    if (answer === scenes[currentScene].choices[0]) {
        currentScene = scenes[currentScene].nextScene[0]
    }

    if (answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene[1]
    }


    // else if (answer !== scenes[currentScene].choices[0, 1, 2, 3, 4]) {
    //     alert("Välkommen")
    // }
  

    // else if(answer !== scenes[currentScene].choices[0]); {
    //     alert("Felaktig inmatning"); 
    //     scenes[currentScene].nextScene[0]
    // }
    // while (answer !== scenes[currentScene].choices[0]); {
    //     alert("Felaktig inmatning"); 
    //     scenes[currentScene].nextScene[0]
    // }

    presentScene()
}