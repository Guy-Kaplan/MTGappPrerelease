// MTG app prerelease - Guy Kaplan
// Original css --> font-family: 'Segoe UI', sans-serif;
(function main(): void {

    let mtgForm: HTMLFormElement;
    let y = setInterval('displayTime();', 1000);
    document.write(`<meta name="viewport">`); //content="width=device-width, initial-scale=1"
    document.write(`<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">`);
    document.write("<form name='mtgForm'>");
    document.write(`<br><center><img src="IMAGES/logo2.png" width="200"><br>`);
    document.write(`Table:<br>`);
    document.write(`<input type="text" name="tableNum" size="2" style="text-align:center;" required autofocus><br>`); //class="w3-input w3-border w3-round"
    displayPlayer1properties();
    displayPlayer2properties();
    document.write(`<input type = "button" onclick = "restartAll();" value = "Reset All"><br><br>`);
    document.write(`<input type = "button" onclick="alertForm()" value = "Show Result"><br><br>`);
    //displayTime();
    document.write(`<input type='text' name = 'date1' size = '20' style="text-align:center;" readonly>`);




})();

//===================functions===============================
//----player1-------

function displayPlayer1properties(): void {
    document.write(`Player 1:<br>`);
    document.write(`<input type="text" name="player1name" size="15" class="w3-border w3-round-xxlarge" style="text-align:center;" required><br><br>`); //class="w3-input w3-border w3-round"
    //document.write(`fgfgfgfgfg`);
    document.write(`Life Total: <input type = "button" onclick = "reducePlayer1lifeTotal();" value = "-">`);
    document.write(`<input type="text" name="player1lifeTotal" size="1" readonly value="20" style="text-align:center;">`);
    document.write(`<input type = "button" onclick = "increasePlayer1lifeTotal();" value = "+"><br><br>`);
    //----------------------
    document.write(`Victories: <input type = "button" onclick = "reducePlayer1Victories();" value = "-">`);
    document.write(`<input type="text" name="player1Victories" size="1" readonly value="0" style="text-align:center;">`);
    document.write(`<input type = "button" onclick = "increasePlayer1Victories();" value = "+"><br><br>`);
    //document.write(`fgfgfgfgfg`);
    document.write(`Poison Counters: <input type = "button" onclick = "reducePlayer1PoisonCounters();" value = "-">`);
    document.write(`<input type="text" name="player1numOfPoisonCounters" size="1" readonly value="0" style="text-align:center;">`);
    document.write(`<input type = "button" onclick = "increasePlayer1PoisonCounters();" value = "+">`);
    document.write(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`);
    //document.write(`fgfgfgfgfg`);
    document.write(`Experience Counters: <input type = "button" onclick = "reducePlayer1ExperienceCounters();" value = "-">`);
    document.write(`<input type="text" name="player1numOfExperienceCounters" size="1" readonly value="0" style="text-align:center;">`);
    document.write(`<input type = "button" onclick = "increasePlayer1ExperienceCounters();" value = "+"><br><br>`);
}

function reducePlayer1lifeTotal(): void { //Player1lifeTotal--
    if ((<HTMLFormElement>(<any>document).mtgForm).player1lifeTotal.value != 0) {
        (<HTMLFormElement>(<any>document).mtgForm).player1lifeTotal.value--;
    }
}

function increasePlayer1lifeTotal(): void { //Player1lifeTotal++
    (<HTMLFormElement>(<any>document).mtgForm).player1lifeTotal.value++;
}

function reducePlayer1Victories(): void { // player1Victories--
    if ((<HTMLFormElement>(<any>document).mtgForm).player1Victories.value != 0) {
        (<HTMLFormElement>(<any>document).mtgForm).player1Victories.value--;
    }
}

function increasePlayer1Victories(): void { // player1Victories++
    if ((<HTMLFormElement>(<any>document).mtgForm).player1Victories.value != 2) {
        (<HTMLFormElement>(<any>document).mtgForm).player1Victories.value++;
    }
}

function reducePlayer1PoisonCounters(): void { //player1numOfPoisonCounters--
    if ((<HTMLFormElement>(<any>document).mtgForm).player1numOfPoisonCounters.value != 0) {
        (<HTMLFormElement>(<any>document).mtgForm).player1numOfPoisonCounters.value--;
    }
}

function increasePlayer1PoisonCounters(): void { //player1numOfPoisonCounters++
    if ((<HTMLFormElement>(<any>document).mtgForm).player1numOfPoisonCounters.value != 10) {
        (<HTMLFormElement>(<any>document).mtgForm).player1numOfPoisonCounters.value++;
    }
}

function reducePlayer1ExperienceCounters(): void { //player1numOfExperienceCounters--
    if ((<HTMLFormElement>(<any>document).mtgForm).player1numOfExperienceCounters.value != 0) {
        (<HTMLFormElement>(<any>document).mtgForm).player1numOfExperienceCounters.value--;
    }
}

function increasePlayer1ExperienceCounters(): void { //player1numOfExperienceCounters++
    //if ((<HTMLFormElement>(<any>document).mtgForm).player1numOfExperienceCounters.value != 10) {
    (<HTMLFormElement>(<any>document).mtgForm).player1numOfExperienceCounters.value++;
    //}
}

//----player2-------

function displayPlayer2properties(): void {
    document.write(`Player 2:<br>`);
    document.write(`<input type="text" name="player2name" size="15" class="w3-border w3-round-xxlarge" style="text-align:center;" required autofocus><br><br>`); //class="w3-input w3-border w3-round"
    //document.write(`fgfgfgfgfg`);
    document.write(`Life Total: <input type = "button" onclick = "reducePlayer2lifeTotal();" value = "-">`);
    document.write(`<input type="text" name="player2lifeTotal" size="1" readonly value="20" style="text-align:center;">`);
    document.write(`<input type = "button" onclick = "increasePlayer2lifeTotal();" value = "+"><br><br>`);
    //----------------------
    document.write(`Victories: <input type = "button" onclick = "reducePlayer2Victories();" value = "-">`);
    document.write(`<input type="text" name="player2Victories" size="1" readonly value="0" style="text-align:center;">`);
    document.write(`<input type = "button" onclick = "increasePlayer2Victories();" value = "+"><br><br>`);
    //document.write(`fgfgfgfgfg`);
    document.write(`Poison Counters: <input type = "button" onclick = "reducePlayer2PoisonCounters();" value = "-">`);
    document.write(`<input type="text" name="player2numOfPoisonCounters" size="1" readonly value="0" style="text-align:center;">`);
    document.write(`<input type = "button" onclick = "increasePlayer2PoisonCounters();" value = "+">`);
    document.write(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`);
    //document.write(`fgfgfgfgfg`);
    document.write(`Experience Counters: <input type = "button" onclick = "reducePlayer2ExperienceCounters();" value = "-">`);
    document.write(`<input type="text" name="player2numOfExperienceCounters" size="1" readonly value="0" style="text-align:center;">`);
    document.write(`<input type = "button" onclick = "increasePlayer2ExperienceCounters();" value = "+"><br><br>`);
}

function reducePlayer2lifeTotal(): void { //Player2lifeTotal--
    if ((<HTMLFormElement>(<any>document).mtgForm).player2lifeTotal.value != 0) {
        (<HTMLFormElement>(<any>document).mtgForm).player2lifeTotal.value--;
    }
}

function increasePlayer2lifeTotal(): void { //Player2lifeTotal++
    (<HTMLFormElement>(<any>document).mtgForm).player2lifeTotal.value++;
}

function reducePlayer2Victories(): void { // player2Victories--
    if ((<HTMLFormElement>(<any>document).mtgForm).player2Victories.value != 0) {
        (<HTMLFormElement>(<any>document).mtgForm).player2Victories.value--;
    }
}

function increasePlayer2Victories(): void { // player2Victories++
    if ((<HTMLFormElement>(<any>document).mtgForm).player2Victories.value != 2) {
        (<HTMLFormElement>(<any>document).mtgForm).player2Victories.value++;
    }
}

function reducePlayer2PoisonCounters(): void { //player2numOfPoisonCounters--
    if ((<HTMLFormElement>(<any>document).mtgForm).player2numOfPoisonCounters.value != 0) {
        (<HTMLFormElement>(<any>document).mtgForm).player2numOfPoisonCounters.value--;
    }
}

function increasePlayer2PoisonCounters(): void { //player2numOfPoisonCounters++
    if ((<HTMLFormElement>(<any>document).mtgForm).player2numOfPoisonCounters.value != 10) {
        (<HTMLFormElement>(<any>document).mtgForm).player2numOfPoisonCounters.value++;
    }
}

function reducePlayer2ExperienceCounters(): void { //player2numOfExperienceCounters--
    if ((<HTMLFormElement>(<any>document).mtgForm).player2numOfExperienceCounters.value != 0) {
        (<HTMLFormElement>(<any>document).mtgForm).player2numOfExperienceCounters.value--;
    }
}

function increasePlayer2ExperienceCounters(): void { //player2numOfExperienceCounters++
    //if ((<HTMLFormElement>(<any>document).mtgForm).player2numOfExperienceCounters.value != 10) {
    (<HTMLFormElement>(<any>document).mtgForm).player2numOfExperienceCounters.value++;
    //}
}
//---------------------------------------------------------------
function restartAll(): void {
    (<HTMLFormElement>(<any>document).mtgForm).tableNum.value = "";

    (<HTMLFormElement>(<any>document).mtgForm).player1name.value = "";
    (<HTMLFormElement>(<any>document).mtgForm).player1lifeTotal.value = "20";
    (<HTMLFormElement>(<any>document).mtgForm).player1Victories.value = "0";
    (<HTMLFormElement>(<any>document).mtgForm).player1numOfPoisonCounters.value = "0";
    (<HTMLFormElement>(<any>document).mtgForm).player1numOfExperienceCounters.value = "0";

    (<HTMLFormElement>(<any>document).mtgForm).player2name.value = "";
    (<HTMLFormElement>(<any>document).mtgForm).player2lifeTotal.value = "20";
    (<HTMLFormElement>(<any>document).mtgForm).player2Victories.value = "0";
    (<HTMLFormElement>(<any>document).mtgForm).player2numOfPoisonCounters.value = "0";
    (<HTMLFormElement>(<any>document).mtgForm).player2numOfExperienceCounters.value = "0";

}

function alertForm(): void {
    let tableNum1: string = (<HTMLFormElement>(<any>document).mtgForm).tableNum.value;
    if (tableNum1 == "") { tableNum1 = "---"; }
    let player1: string = (<HTMLFormElement>(<any>document).mtgForm).player1name.value;
    let player2: string = (<HTMLFormElement>(<any>document).mtgForm).player2name.value;
    if (player1 == "") { player1 = "Player1"; }
    if (player2 == "") { player2 = "Player2"; }
    let player1wins: number = (<HTMLFormElement>(<any>document).mtgForm).player1Victories.value;
    let player2wins: number = (<HTMLFormElement>(<any>document).mtgForm).player2Victories.value;
    let result: string = "";
    if (player1wins == player2wins) {
        result += `Draw ${player1wins}-${player2wins}`;
    }
    else if (player1wins > player2wins) {
        result += `${player1} won ${player1wins}-${player2wins}`;
    }
    else {
        result += `${player2} won ${player2wins}-${player1wins}`;
    }
    alert(`Table: ${tableNum1}
Players: ${player1} vs. ${player2}
Result: ${result}
Time: ${getTime()}`);
}

function displayTime(): void {
    let d: Date = new Date();
    let dateStr: string = "";
    //document.myForm2.date3.value = date2;
    //document.write(`${d.toLocaleDateString()}<br>${d.toLocaleTimeString()}`);
    dateStr += d.toLocaleDateString() + "     " + d.toLocaleTimeString();
    (<HTMLFormElement>(<any>document).mtgForm).date1.value = dateStr;
}

function getTime(): string {
    let d: Date = new Date();
    let dateStr: string = "";
    //document.myForm2.date3.value = date2;
    //document.write(`${d.toLocaleDateString()}<br>${d.toLocaleTimeString()}`);
    dateStr += d.toLocaleDateString() + "     " + d.toLocaleTimeString();
    return dateStr;
}


