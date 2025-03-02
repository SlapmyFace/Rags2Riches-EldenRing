var colors = []

colors["consumable"] = "grey",
colors["weapon"] = "cornflowerblue";
colors["talisman"] = "aquamarine";
colors["misfortune"] = "red";
colors["legendary"] = "darkgoldenrod";
colors["armor"] = "sienna";
colors["sorcery"] = "springgreen";     
colors["miracle"] = "yellow";  
colors["pyromancy"] = "white"    

var buttonclasses = [];

buttonclasses["consumable"] = "fs-2 btn-muted",
buttonclasses["weapon"] = "fs-2 btn-primary";
buttonclasses["talisman"] = "fs-2 btn-success";
buttonclasses["misfortune"] = "fs-2 btn-danger";
buttonclasses["legendary"] = "fs-2 btn-warning";
buttonclasses["armor"] = "fs-2 btn-muted";
buttonclasses["spell"] = "fs-2 btn-info";    
	
hues = [];
saturations = [];

hues["consumable"] = 270;
saturations["consumable"] = 20;
hues["weapon"] = 60;
saturations["weapon"] = 100;
hues["talisman"] = 0;
saturations["talisman"] = 100;
hues["misfortune"] = 240;
saturations["misfortune"] = 255;
hues["legendary"] = 280;
saturations["legendary"] = 150; 
hues["armor"] = 150;
saturations["armor"] = 50;
hues["spell"] = 90;   
saturations["spell"] = 150;  

 


var allValues = [
"mode",
"consumable", 
"weapon", 
"talisman", 
"legendary", 
"misfortune", 
"armor", 
"spell", 
"misfortuneAvoidance", 
"challenge",
"misfortuneOnWin", 
"mfContinue", 
"continue", 
"addReward", 
"spellRoll", 
"skipChallenges"
];


var consumables = 0;
var weapons = 0;
var talismans = 0;
var legendaries = 0;
var misfortunes = 0;
var armors = 0;
var spells = 0;
var misfortuneInARow = 0;
var mode = "er";

var consumablesList;
var weaponList;
var talismanList;
var legendaryList;
var armorList;
var spellList;
var miracleList;
var misfortuneList;
var challengeList;
var avoidanceList = [
["Lucky! You avoided a misfortune this time.", "", 0]
];
var cookieDialogPre;
var cookieDialogPost;
var tutorial;

var currentMisfortunes = [];

var percentagesBaby = [];
percentagesBaby["consumable"] = 2.0;
percentagesBaby["weapon"] = 1.2;
percentagesBaby["talisman"] = 1.2;
percentagesBaby["legendary"] = 1.1;
percentagesBaby["misfortune"] = 0.2;
percentagesBaby["armor"] = 1.4;
percentagesBaby["spell"] = 1.2;
percentagesBaby["misfortuneAvoidance"] = 0.5;
percentagesBaby["challenge"] = 1;
percentagesBaby["misfortuneOnWin"] = 0;

var percentagesEasy = [];
percentagesEasy["consumable"] = 1.0;
percentagesEasy["weapon"] = 1.0;
percentagesEasy["talisman"] = 1.0;
percentagesEasy["legendary"] = 0.5;
percentagesEasy["misfortune"] = 0.1;
percentagesEasy["armor"] = 1.0;
percentagesEasy["spell"] = 1.0;
percentagesEasy["misfortuneAvoidance"] = 0.20;
percentagesEasy["challenge"] = 0.5;
percentagesEasy["misfortuneOnWin"] = 0.0;

var percentagesMedium = [];
percentagesMedium["consumable"] = 1.3;
percentagesMedium["weapon"] = 0.7;
percentagesMedium["talisman"] = 0.35;
percentagesMedium["legendary"] = 0.06;
percentagesMedium["misfortune"] = 0.25;
percentagesMedium["armor"] = 0.45;
percentagesMedium["spell"] = 0.7;
percentagesMedium["misfortuneAvoidance"] = 0.1;
percentagesMedium["challenge"] = 0.75;
percentagesMedium["misfortuneOnWin"] = 0.0;

var percentagesHard = [];
percentagesHard["consumable"] = 0.65;
percentagesHard["weapon"] = 0.2;
percentagesHard["talisman"] = 0.2;
percentagesHard["legendary"] = 0.03;
percentagesHard["misfortune"] = 0.5;
percentagesHard["armor"] = 0.25;
percentagesHard["spell"] = 0.1;
percentagesHard["misfortuneAvoidance"] = 0.02;
percentagesHard["challenge"] = 0.3;
percentagesHard["misfortuneOnWin"] = 0.1;

var percentagesMental = [];
percentagesMental["consumable"] = 0.25;
percentagesMental["weapon"] = 0.05;
percentagesMental["talisman"] = 0.05;
percentagesMental["legendary"] = 0.005;
percentagesMental["misfortune"] = 0.9;
percentagesMental["armor"] = 0.05;
percentagesMental["spell"] = 0.05;
percentagesMental["misfortuneAvoidance"] = 0;
percentagesMental["challenge"] = 0.3;
percentagesMental["misfortuneOnWin"] = 0.25;

setPercentageDefaults("medium");

// loadFromCookies();

loadList();

setButtonAmounts();


/////////////////////////////////////////////////////////////////////////////////////////

//OPTION CHANGING

function setValue(valueID, value) {
    
    if (valueID == "mode") {
        mode = value;
        return;
    }
    
    check = document.getElementById("v_" + valueID);
    
    if (check) {
        if (check.type == "range") {

			// console.log("Trying to set value of v_" + valueID + " to " + value);
            
            check.value = value;
            document.getElementById("l_" + valueID).innerText = valueID.charAt(0).toUpperCase() + valueID.slice(1) + ": " + (check.value*100).toFixed(1) + " %";
            
            return true;
            
        }
        
        else if (check.type == "checkbox") {
            
            // console.log("Setting value of " + valueID + " to " + (value == "true"));
            
            check.checked = (value == "true");
            
//             console.log(" to " + check.checked);
            
            return true;
            
        }
        
        else {
            
            return false;
            
        }
    } else {
        return false;
    }
    
    
}

function getValue(valueID) {
    
    if (valueID == "mode") {
        return mode;
    }
    
    check = document.getElementById("v_" + valueID);

    // console.log("Starting check for valueID " + "v_" + valueID)
    
    if (check) {
        if (check.type == "range") {
	
			// console.log("getValue() of " + valueID + ": " + check.value)
            
            return check.value;
            
        }
        
        else if (check.type == "checkbox") {
	
			// console.log("getValue() of " + valueID + ": " + check.checked)
            
            return check.checked;
            
            
        }
    } else
        // console.log("Check returned " + check)
    
}

function setPercentageDefaults(difficulty) {
    
    var percentages = [];
    
    if (difficulty == "baby") {
		percentages = percentagesBaby;
    } else if (difficulty == "easy") {
		percentages = percentagesEasy;
    } else if (difficulty == "medium") {
		percentages = percentagesMedium;
    } else if (difficulty == "hard") {
		percentages = percentagesHard;
    } else if (difficulty == "fuck") {
		percentages = percentagesMental;
    }
	
	console.log("difficulty set to " + difficulty)
    
    allValues.forEach(rarity => {
            setValue(rarity, percentages[rarity]);
    });
    
}

function setButtonAmounts() {
    
    setInnerOf("consumable", consumables);
    setInnerOf("weapon", weapons);
    setInnerOf("talisman", talismans);
    setInnerOf("legendary", legendaries);
    setInnerOf("misfortune", misfortunes);
    setInnerOf("armor", armors);
    setInnerOf("spell", spells)
}


///////////////////////////////////////////////////////////////////////////////////



function useReward(rarity) {
    var list = [];
    var randomItem;
    var addendum = "";
    var imgType = "";
    var useNestedList = false;

    switch (rarity) {
        case "consumable":
            if (getValue("CraftingMaterials")) {
                list = craftingMaterialsList;
            }
            else {
                list = consumablesList;
            }
            list.push(...uncraftablesList);

            imgType = rarity;
            break;
        case "weapon":
            list = weaponsList;
            imgType = rarity;
            break;
        case "talisman":
            list = talismansList;
            imgType = rarity;
            break;
        case "legendary":
            list = legendaryList;
            imgType = rarity;
            break;
        case "armor":
            list = armorList;
            imgType = rarity;
            useNestedList = true;
            break;
        case "spell":

            var chosen = false;

            while (!chosen)
            {
                var check = Math.random();

                if (check < 0.33) {
                    if (getValue("SpellRoll")) {
                        list = spellList;
                        imgType = "sorcery";
                        chosen = true;
                    }
                } else if (check < 0.66) {
                    if (getValue("IncantRoll")) {
                        list = miracleList;
                        imgType = "miracle";
                        chosen = true;
                    }
                } else {
                    list = ashOfWarList;
                    imgType = "pyromancy";
                    chosen = true;
                }
            }
            break;
    }

    randomItem = getRandomElementFrom(list, useNestedList);

    if (rarity == "consumable") {
        const amountOf = randomItem.replace(/[^0-9]/g, "");

        if (amountOf) {
            randomItem = randomItem.replace(amountOf, amountOf*getConsumableAmount());
        } else {
            randomItem += " (" + getConsumableAmount() + "x)";
        }
    }

    decreaseValue(rarity);

    currentMisfortunes.push(["Add: " + randomItem, "Add: " + randomItem, 1]);

    fillEffect();

    fillCard(imgType, randomItem, randomItem);
}

function fixNameFormat(string) {
    
    var newString = "";
    
    for (let c of string) {
        if (c == " ") {
            newString += "_";
        } else if (c == "'") {
            //notn
        } else if (c == "+") {
            newString = newString.slice(0, newString.length - 1);
            break;
        } else {
            newString += c;
        }
    }
    
    return newString;
}

function fillCard(rarity, name, innerText) {
	
	fixedRarity = rarity;
	
    if (rarity == "miracle") {
		fixedRarity = "Incantation"
	} else if (rarity == "pyromancy") {
		fixedRarity = "Ash Of War";
	} else if (getValue("craftingMaterials") && rarity == "consumable") {
		fixedRarity = "Crafting Material";
	}
	
	// console.log("fillCard: " + rarity + ", " + name + ", " + innerText)
	document.getElementById("cardTitle").innerText = fixedRarity.toUpperCase();
    // document.getElementById("cardTitle").innerText = "ELDEN RING";
    document.getElementById("cardTitle").style["text-shadow"] = "0 0 " + (rarity == "legendary" | rarity == "misfortune" ? "8px" : "4px") + " " + colors[rarity];
	
    if (rarity != "misfortune") {
        document.getElementById("cardText").innerText = innerText;
        document.getElementById("cardImgReward").style.display = "block";
		document.getElementById("cardImgReward").src = "img/" + rarity + ".png"
        // document.getElementById("cardImgReward").src = "items/" + mode + "/" + fixNameFormat(name) + ".webp";
    } else {
        document.getElementById("cardText").innerText = innerText;
        document.getElementById("cardImgReward").style.display = "block";
		document.getElementById("cardImgReward").src = "img/" + rarity + ".png"
    }
    
    window.scrollTo(0, 0); 
}

function fillEffect() {
    
    if (currentMisfortunes.length > 0) {
        
        document.getElementById("currentEffect").innerText = "";
        
        for (var i = 0; i < currentMisfortunes.length; i++) {
            document.getElementById("currentEffect").innerText += currentMisfortunes[i][1];
			if (currentMisfortunes[i][2] > 1 ) {
				document.getElementById("currentEffect").innerText += ", " + currentMisfortunes[i][2] + " turns";
			}
            document.getElementById("currentEffect").innerText += "\n";
			
        }
    } else {
        document.getElementById("currentEffect").innerText = "none";
    }
}

function showTutorial() {
    alert(tutorial);
}

function showLicense() {
    alert(license);
}


function setInnerOf(rarity, amount) {
    // console.log("Setting value of " + (rarity + " label") + " to: " + amount);
    
    var diamond = document.getElementById("d_" + rarity);
    var rewardbutton = document.getElementById("b_" + rarity);
	var buttontext = document.getElementById("c_" + rarity);
    
    var hueRotation = hues[rarity];
    var saturate = saturations[rarity];
    var amounts = "s";
	
    if (amount > 0) {
        rewardbutton.disabled = false;
        if (amount > 1) {
            if (amount > 2) {
                if (amount > 5) {
                    amounts = "sss";
                } else {
                    amounts = "ss";
                }
            } else {
                amounts = "s";
            }
        } else {
            amounts = "";
        }
    } else {
        rewardbutton.disabled = true;
        saturate = 0;
        amounts = "no";
    }
    
	buttontext.innerText = "x" + amount;
	rewardbutton.className = amount > 0 ? buttonclasses[rarity] : "fs-2 muted";
    diamond.style.filter = "hue-rotate(" + hueRotation + "deg) saturate(" + saturate + "%)";
    diamond.src = "img/rewardDiamond" + amounts + ".png";
}

function showMisfortuneDetails() {
    var detailsText = "Current misfortunes / challenge active:\n\n";
    var i = 0;

    if (currentMisfortunes.length < 1) {
        detailsText = "No misfortunes active.";
    } else {
        currentMisfortunes.forEach(misfortuneIter => {
            i++;
            detailsText += i + ".\n" + misfortuneIter[1] + ":\n" + misfortuneIter[0] + "\n" + misfortuneIter[2] + " turn(s) left\n\n";
        });
    }


    alert(detailsText);
}

///////////////////////////////////////////////////////////////////////////

//REWARD SYSTEM

function getRandomElementFrom(list, nestedArrayMode = false)
{
    var randomItem = ""

    if (nestedArrayMode)
    {
        let randomNestedList = list[Math.floor(list.length * Math.random())]
        let filteredList = randomNestedList[1].filter((word) => word != "")
        check = Math.random()

        if (check < 0.1) {
            if (randomNestedList[0])
            {
                randomItem = "Complete " + randomNestedList[0] + ":\n" + filteredList.join(",\n")
            } else {
                randomItem = filterFunction(filteredList[1]).join(",\n")
            }
        }
        else if (check < 0.2)
        {
            randomItem = "Any piece of " + filteredList[0] + ":\n" + filteredList.join(",\n")
        }
        else {
            if (randomNestedList[0])
            {
                randomItem = randomNestedList[0] + ":\n" + filteredList[Math.floor(filteredList.length * Math.random())]
            } else {
                randomItem = filteredList[Math.floor(filteredList.length * Math.random())]
            }
        }
    }
    else {
        randomItem = list[Math.floor(list.length * Math.random())];
    }
    // console.log(randomItem)
    return randomItem
}

function calculateRewardAmount(rarity) {
    var check;
    var percentage = getValue(rarity);
    
    // console.log("Calculating for " + rarity + ": percentage = " + percentage);
    
    while (percentage > 0) {
        
        check = Math.random();
        
        if (check < percentage) {
            increaseReward(rarity);
        }
        
        percentage -= 1;
    }
    
}

function increaseReward(rarity) {
    switch (rarity) {
        case "consumable":
            consumables++;
            break;
        case "weapon":
            weapons++;
            break;
        case "talisman":
            talismans++;
            break;
        case "legendary":
            legendaries++;
            break;
        case "misfortune":
            misfortunes++;
            break;
        case "misfortuneOnWin":
            misfortunes++;
            break;
        case "spell":
            spells++;
            break;
        case "armor":
            armors++;
            break;
    }
}

function rollRewards(win) {
    
    if (getValue("Continue") && consumables + weapons + talismans + legendaries + misfortunes + armors + spells != 0) {
        alert("You can't roll until all rewards are redeemed.");
        return;
    }
    
    if (getValue("MFContinue") && misfortunes > 0) {
        alert("You can't roll until all misfortunes have been rolled.");
        return;
    }
    
    decreaseDuration(); 
    
    if (!getValue("AddReward")) {
        consumables = 0;
        weapons = 0;
        talismans = 0;
        legendaries = 0;
        misfortunes = 0;
        armors = 0;
        spells = 0;
    }
    
    if (win) {
	
		misfortuneInARow = 0;
        
        calculateRewardAmount("consumable");
        calculateRewardAmount("weapon");
        calculateRewardAmount("talisman");
        calculateRewardAmount("legendary");
        calculateRewardAmount("misfortuneOnWin");
        calculateRewardAmount("armor");
        calculateRewardAmount("spell");
        
    } else {
        calculateRewardAmount("misfortune");
		
		calculateRewardAmount("consumable");
	
		misfortuneInARow++;
		
		// console.log("misfortuneInARow is now " + misfortuneInARow);
		
		if (misfortuneInARow > 2) {
			for (var i = 0; i < Math.min((misfortuneInARow - 4), 3); i++) {			
				calculateRewardAmount("consumable");
			}
			
		} 
		
		if (misfortuneInARow > 7) {
			calculateRewardAmount("weapon")
		} 
    }
    
    setButtonAmounts();
}

function useMisfortune() {
	
    if (decreaseValue("misfortune")) {
        
        var randomItem;
        let check;
        var prefix = "";
        
        while (!randomItem) {
            // console.log("Starting check for misfortune.")
		
			check = Math.random();
				
            if (check > getValue("misfortuneAvoidance"))
            {
                // console.log("Mf Avoidance didn't fire. Proceeding.")
                check = Math.random()

                // console.log("Challenges are " + (getValue("SkipChallenges") ? "disabled" : "enabled"))
                // console.log("Challenge chance is " + getValue("Challenge") + ", check is" + check)
                
                if (check < getValue("challenge") && !getValue("SkipChallenges")) {
                    randomItem = getRandomElementFrom(challengeList);
                    prefix = "challenge";
                } else {
					prefix = "misfortune";
                    randomItem = getRandomElementFrom(misfortuneList);
                }
                
            } else {
				// console.log("Rolled avoidance")
                prefix = "lucky"
                randomItem = getRandomElementFrom(avoidanceList);
            }
            
        }
		
		currentMisfortunes.push([randomItem[0], randomItem[1], randomItem[2]]);
        
        fillEffect();
        
        fillCard(prefix, randomItem[0], randomItem[0]);
        
//         console.log(randomItem[1] + " (" + currentDuration + " turns)");
        
        
    }
}

function decreaseValue(rarity) {
    switch (rarity) {
        case "consumable":
            if (consumables > 0) {
                consumables--;
                setButtonAmounts();
                return true;
            } else {
                consumables = 0;
                setButtonAmounts();
                return false;
            }
        case "weapon":
            if (weapons > 0) {
                weapons--;
                setButtonAmounts();
                return true;
            } else {
                weapons = 0;
                setButtonAmounts();
                return false;
            }
        case "talisman":
            if (talismans > 0) {
                talismans--;
                setButtonAmounts();
                return true;
            } else {
                talismans = 0;
                setButtonAmounts();
                return false;
            }
        case "legendary":
            if (legendaries > 0) {
                legendaries--;
                setButtonAmounts();
                return true;
            } else {
                legendaries = 0;
                setButtonAmounts();
                return false;
            }
        case "misfortune":
            if (misfortunes > 0) {
                misfortunes--;
                setButtonAmounts();
                return true;
            } else {
                misfortunes = 0;
                setButtonAmounts();
                return false;
            }
        case "armor":
            if (armors > 0) {
                armors--;
                setButtonAmounts();
                return true;
            } else {
                armors = 0;
                setButtonAmounts();
                return false;
            }
        case "spell":
            if (spells > 0) {
                spells--;
                setButtonAmounts();
                return true;
            } else {
                spells = 0;
                setButtonAmounts();
                return false;
            }
            
    }
}

function decreaseDuration() {
    
    if (currentMisfortunes.length > 0)
    {
        for (var i = 0; i < currentMisfortunes.length; i++) {
//             console.log("Decreasing duration of " + currentMisfortunes[i][0] + " turns from " + currentMisfortunes[i][1] + " to " + (currentMisfortunes[i][1] - 1));
            currentMisfortunes[i][2] -= 1;
        }
        
        for (var i = currentMisfortunes.length - 1; i >= 0; i--) {
            if (currentMisfortunes[i][2] < 1) {
//                 console.log("Removing " + currentMisfortunes[i][0] + " from list.");
                currentMisfortunes.splice(i, 1);
            }
        }
    }
    
    
    fillEffect();
}

function getConsumableAmount() {
    var piece = Math.random();
    
    if (piece < 0.3) {
        return 1;
    } else if (piece < 0.55) {
        return 2;
    } else if (piece < 0.75) {
        return 3;
    } else if (piece < 0.89) {
        return 4;
    } else {
        return 5;
    } 
}



/////////////////////////////////////////////////////////////////////////////

//COOKIES FUNCTIONALITY

function loadList() {

    mode = "er"

    var newScript = document.createElement("script");
    newScript.src = 'lists/' + mode + '.js';
    newScript.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(newScript);
}

function changeGamemode(gamemode) {

    if (confirm("This will reset all values and percentages and then set the current game to " + gamemode + ".\n\nProceed?")) {
        mode = gamemode;
        consumables = 0;
        talismans = 0;
        weapons = 0;
        legendaries = 0;
        misfortunes = 0;
        armors = 0;
        spells = 0;

        setCookies();
        document.location.reload(true);
    }

}

function setCookies() {
    //
    //Set all cookie values at once

    var saveCText = "";

    allValues.forEach(rarity => {
        saveCText += (rarity + ": " + getCookie(rarity) + "\n");
    });

    if (!confirm(cookieDialogPre + saveCText + cookieDialogPost)) {
        return;
    }

    var cookies = [];

    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*36000;
    now.setTime(expireTime);
    var appendage = "expires="+ now.toUTCString() + ";sameSite=Lax";

    allValues.forEach(rarity => {

        document.cookie = rarity + "C=" + getValue(rarity) + "; " + appendage;

    });
}

function loadButtonPressed() {

    if (getCookie("mode") == "") {
        alert("No cookies found, aborting load.");
        return false;
    }

    if (getCookie("mode") != mode) {

        if (confirm("The cookies have saved a different mode than currently active. Proceeding will reload the page and change the gamemode to " + getCookie("mode") + ", additionally all rewards not rolled will be gone. Proceed?")) {
            document.location.reload(true);
        }

    } else {
        ///SHOW VALUES OF COOKIES

        if (showAlert) {
            var confirmText = "The following values have been saved in cookies:\n\n";

            allValues.forEach(rarity => {
                confirmText += (rarity + ": " + getCookie(rarity) + "\n");
            });

            confirmText += "\nWould you like to load these values?";

            if (!confirm(confirmText)) {return;}
        }

        loadFromCookies();
    }

}


function getCookie(cname) {

    //geta specific cookie value from an ID

    var name = cname + "C=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // console.log("getCookie(" + cname + ") yielded " + c.substring(name.length, c.length));
            return c.substring(name.length, c.length);
        }
    }
    return "";
    //w3schools example for cookie read
}

function loadFromCookies(showAlert = false) {

    if (getCookie("mode") == "") {
        if (showAlert) {
            alert("No cookies found, aborting load.");
        }
        return false;
    }

    allValues.forEach(rarity => {
        //         console.log("Loaded value for " + rarity + ": " + getCookie(rarity) + ". Setting...");

        setValue(rarity, getCookie(rarity));

    });
}

function deleteCookies() {

    if (confirm("Delete all cookies?")) {

        var cookies = [];

        var now = new Date();
        var time = now.getTime();
        var appendage = "expires="+ now.toUTCString() + ";sameSite=Lax";

        allValues.forEach(rarity => {

            document.cookie = rarity + "C=" + getValue(rarity) + "; " + appendage;


        });

        //         console.log(document.cookie);

    };

}

function getCookieValues() {
    var values = [];

    allValues.forEach(rarity => {
        values.push(getCookie(rarity));
    });
}
