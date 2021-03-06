let currentSceneName = "startingScene" 
/**
 * These are the objects. The different scenes where information
 * is caught from and displayed with functions. 
 */
const scenes = {
    
    startingScene: {
        description: "Hej och välkommen NAME. Du kommer nu få spela ett äventyr där du får göra ett antal val. Hur äventyret slutar avgör du!",
        choices: ["Starta äventyret"],
        nextScene: ["mountain"]
    },

    mountain: {
        description: "Du vaknar till.. det sista du minns var att du och dina vapendragare Tola Sparv och Monika Plöjer var på ett uppdrag där ni skulle hämta hem en förtrollad dolk från Ravens Rövare. Du ställer dig upp och inser att du befinner dig på en bergstopp",
        choices: ["Skrik", "Gå neråt"],
        nextScene: ["fly", "goDown"]
    },
    
    fly: {
        description: "Du valde att skrika och en Grip kommer nu och lyfter dig i sina klor. Du funderar på om du ska slå mot klorna med din dolk eller om du ska njuta av utsikten. Vad väljer du att göra?",
        choices: ["Slå gripen", "Njut av utsikten"],
        nextScene: ["hit", "view"]
    },
    
    goDown: {
        description: "Du börjar gå ner för berget men ramlar ner i en glaciärspricka och dör omedelbart. Vill du börja om?",
        choices: ["Ja", "Nej"],
        nextScene: ["mountain", "endGame"]
    },

    hit: {
        description: "Du valde att slå, Gripen släpper taget. Du faller nu handlöst från hög höjd och störtar snabbt mot din död. Vill du börja om?",
        choices: ["Ja", "Nej"],
        nextScene: ["mountain", "endGame"]
    },
    
    view: {
        description: "Gripen flyger vidare med dig i sina klor, efter ett tag börjar gripen flyga lägre och du ser en stad. Du känner igen staden från..",
        choices: ["..ett av dina tidigare äventyr", "..en berättelse du hört av Monika"],
        nextScene: ["adventure", "story"]
    },

    adventure: {
        description: "Gripen går ner för landning och sätter försiktigt ner dig på marken. Du står nu utanför Gittes Värdshus och Gitte kommer ut för att välkomna dig! Du förstår nu att gripen som hämtat dig måste vara en av Gittes gripar. Gitte bedriver nämligen också grip-kennel. Hon bjuder med dig in på värdshuset.. ",
        choices: ["Följ med in", "Utforska staden"],
        nextScene: ["follow", "exploreCity"]
    },

    follow: {
        description: "Så snart du kommer in hör du bekanta röster! Monika och Tola sitter vid ett bord och dricker mjöd. De skiner upp när de ser dig! Ni börjar direkt diskutera vad ni ska göra härnäst för att få tag i dolken. Du vann! Vill du spela igen?",
        choices: ["Ja", "Nej"],
        nextScene: ["mountain", "endGame"]
    },

    exploreCity: {
        description: "Du tackar artigt nej till Gittes inbjudan och beger dit ut på stan. Du går mot torget där det finns en livlig marknad som du tidigare besökt, där du en gång träffade en vacker mö. Du funderar på om hon fortfarande säljer äpplen på marknaden.",
        choices: ["Leta efter den vackra mön", "Gå tillbaka till värdshuset"],
        nextScene: ["apples", "follow"]
    },

    apples: {
        description: "Du börjar leta efter den vackra mön på marknaden och får syn på ett långt blont hår. Du rör dig mot henne och hon vänder sig om. Ni får ögonkontakt och hon ler stort. Hon rusar mot dig och ni omfamnar varandra! Grattis! Du vann, vill du spela igen?",
        choices: ["Ja", "Nej"],
        nextScene: ["mountain", "endGame"]
    },

    story: {
        description: "Gripen ger ifrån sig ett skrik och flyger allt lägre, på några meters höjd släpper gripen dig och du ramlar ner på marken. Du reser dig upp och befinner dig utanför stadsmuren.",
        choices: ["Gå in i staden", "Vänd och gå bort från staden"],
        nextScene: ["inToTheCity", "leaveCity"]
    },

    inToTheCity: {
        description: "Du går in i staden. Du möts av en dyster syn.. Det är mörkt och smutsigt, inga människor syns till.",
        choices: ["Fortsätt in i staden", "Vänd och gå bort från staden"],
        nextScene: ["furtherInToTheCity", "leaveCity"]
    },
    
    furtherInToTheCity: {
        description: "Du fortsätter längre in i staden och ser en figur. Personen hör dig och vänder sig om. Det är den onda, mäktiga trollkarlen Bengt. Han skjuter en blixt och du dör. Vill du spela igen? ",
        choices: ["Ja", "Nej"],
        nextScene: ["mountain", "endGame"]
    },

    leaveCity: {
        description: "Du vänder om och lämnar staden bakom dig. Du fortsätter bort och plötsligt får du en pil i bröstet. Du dog. Vill du spela igen?",
        choices: ["Ja", "Nej"],
        nextScene: ["mountain", "endGame"]
    },

    endGame: {
        description: "Tack för att du spelat!",
        choices: [],
        nextScene: [] 
    }
};

window.onload = presentScene;

/**
 * This function gets the name the user puts in input 
 * and displays it in the first scene. 
 * @param 
 */
document.getElementById("sub-button").onclick = function() {
    const name = document.getElementById("myInput").value;
    const updatedDescription = scenes.startingScene.description.replace("NAME", name)
    scenes.startingScene.description = updatedDescription
    presentScene();
    const form = document.getElementById("nameForm") 
    form.remove();

}
/**
 * This function presents the scene 
 * @param {string} scene - Gets the info from the objects in the list  
 */
function presentScene() {
    const scene = scenes[currentSceneName];
    updateDescription(scene);
    createChoices(scene);
    
}

/**
 * This function updates the description in every new scene
 */
function updateDescription(scene) {
    const descriptionTag = document.getElementById('description');
    descriptionTag.innerText = scene.description;
    
}
/**
 * This function creates the choices for the user 
 */
function createChoices(scene) {
    const container = document.getElementById('choices-container');
    container.innerText = "";
    
    for (let i = 0; i < scene.choices.length; i++) {
        const choice = scene.choices[i];
        const nextScene = scene.nextScene[i];
        createButton(choice, nextScene, container);
    }
}
/**
 * This function creates the buttons for the different choices  
 * @param {string} choice The different choices for the scene
 * @param {string} nextScene The next scene depending on the user choice
 * @param {string} container Container for the choices
 */
function createButton(choice, nextScene, container) {

    const button = document.createElement('button'); 
    button.innerText = choice, nextScene;
    button.onclick = function() {
        handleUserChoice(nextScene); 
    }
    container.append(button);
}
/**
 * This function handles the users choice and calls the next scene
 */
function handleUserChoice(nextScene) {
    
    currentSceneName = nextScene;
    presentScene();
}