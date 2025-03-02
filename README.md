This is a Rags To Riches type of mini game for Elden Ring PVP. You start with basic gear and win more stuff by winning matches / killing enemies in PVP. 

Plus, it has a "misfortune" system, which are penalties on losses that include stashing some weapons or armor, but also include fun little challenges like going naked for one match or using parries to kill enemies that reward you if you do them right.

The app is a simple website with javascript, without any connections to a server. This can be run locally, but this will also be hosted on a website soon under https://rags2rich.es. For now, simply download the code and place in somwhere accessible, then open the index.html in a browser.

Many things can be customized:
1. Chances for different types of loot
2. Which types of spells to include in spell reward rolling (sorcery, incants and ashes of war)
3. Instead of consumables, give crafting materials as common loot.

Prerequisites:
1. Use a PVP ready character with whatever level distribution you want.
2. Equip only basic gear, you can decide which Talismans to start with (I typically start with a Longsword, Round Shield, the Commoners Set and Erdtree Favor +0).
3. Put the weapons, shields, bows, armor, spells / ashes of war and talismans you aren't equipped with and any consumables into storage.


The GUI looks like this:

<img src="https://github.com/user-attachments/assets/5acd24ca-5948-4b7a-ac5e-292a920bf4a4" width="300" height="650" />


The basic loop:
1. Start an invasion or a colosseum match, or use the taunter's tongue.
2. Kill as many enemies as you can. Any kill means one click on Win, dying means one additional click on Lose.
3. If a challenge was active: Successfully completing the challenge rewards you with one addition click on Win, if not, you have to click at least once on Lose even if you didn't die.
4. Claim your rewards in the form of Consumables, Weapon loot, Talismans, Armor, Spells and Legendary Loot.
5. Take anything you won out of storage, whatever is in your inventory can be used in a build.
6. Repeat.



