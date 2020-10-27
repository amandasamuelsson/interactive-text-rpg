let currentScene = 0 

const scenes = [
    {
        descritption: "Du befinner dig på en bergstopp, skrika eller gå neråt",
        chioces: ["Ja", "Nej"],
        nextScene: [2, 1]
    },
    {
        descritption: "Du valde att skrika och en Grip kommer nu och lyfter dig i sina klor",
        chioces: ["slå", "kolla utsikten"],
        nextScene: [2, 1]
    },
    {
        descritption: "Du valde att slå, Gripen släpper taget. Du faller nu handlöst 400 meter och störtar snabbt mot din död. Game over.",
        chioces: ["slå", "kolla utsikten"],
        nextScene: [0, 0]
    },
];

window.onload = presentScene;

function presentScene() {
    const answer = prompt(scenes[currentScene].descritption);
    handleUserChoice(answer);

}

function handleUserChoice(answer) {
    console.log(answer);

    if (answer === scenes[currentScene].choices[0]) {
        currentScene = scenes[currentScene].nextScene[0]
    }
    if (answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene[1]
    }
    presentScene();
}