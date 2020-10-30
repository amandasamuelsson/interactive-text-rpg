let currentSceneName = "startingScene" 

const scenes = {
    
    startingScene: {
        description: "Hej och välkommen NAME. Du kommer nu få spela ett äventyr där du får göra ett antal val. Hur äventyret slutar bestämmer du!",
        choices: ["Starta äventyret"],
        nextScene: ["mountain"]
    },
    mountain: {
        description: "Du befinner dig på en bergstopp, skrika eller gå neråt. Skriv in skrik eller gå neråt",
        choices: ["skrik", "gå neråt"],
        nextScene: ["fly", "goDown"]
    },
    
    fly: {
        description: "Du valde att skrika och en Grip kommer nu och lyfter dig i sina klor. Du funderar på om du ska slå mot klorna med din dolk eller om du ska njuta av utsikten. Vad väljer du att göra?",
        choices: ["slå", "njut av utsikten"],
        nextScene: ["hit", "view"]
    },
    
    goDown: {
        description: "Du börjar gå ner för berget men ramlar ner i en glaciärspricka och dör omedelbart. Vill du börja om?",
        choices: ["ja"],
        nextScene: ["mountain"]
    },
    
    view: {
        description: "Gripen flyger vidare med dig i sina klor, efter ett tag börjar gripen flyga lägre och du ser en stad. Du känner igen staden från",
        choices: ["ett av dina tidigare äventyr", "en berättelse du hört av din farfar"],
        nextScene: ["hit", 1]
    },
    
    hit: {
        description: "Du valde att slå, Gripen släpper taget. Du faller nu handlöst 400 meter och störtar snabbt mot din död. Vill du börja om?",
        choices: ["ja"],
        nextScene: ["mountain"]
    }
};

window.onload = presentScene;


document.getElementById("sub-button").onclick = function() {
    const name = document.getElementById("myInput").value;
    console.log(name);
    const updatedDescription = scenes.startingScene.description.replace("NAME", name)
    scenes.startingScene.description = updatedDescription
    presentScene();
    const form = document.getElementById("nameForm") 
    form.remove();
}

function presentScene() {
    const scene = scenes[currentSceneName];
    updateDescription(scene);
    createChoices(scene);
    
}
        
function updateDescription(scene) {
    const descriptionTag = document.getElementById('description');
    descriptionTag.innerText = scene.description;
    
}

function createChoices(scene) {
    const container = document.getElementById('choices-container');
    container.innerText = "";
    
    for (let i = 0; i < scene.choices.length; i++) {
        const choice = scene.choices[i];
        const nextScene = scene.nextScene[i];
        createButton(choice, nextScene, container);

    }
}

function createButton(choice, nextScene, container) {
    const button = document.createElement('button'); 
    button.innerText = choice, nextScene;
    button.onclick = function() {
        handleUserChoice(nextScene);
        
    }
    container.append(button);
}

function handleUserChoice(nextScene) {
    
    console.log("Hej")
    currentSceneName = nextScene;
    presentScene();
}