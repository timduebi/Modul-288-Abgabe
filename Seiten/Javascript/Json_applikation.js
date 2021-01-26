let index;
let client = undefined;


function showUI(){
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `id: ${client.clientid}<br>`+
        `Name: ${client.firstname}<br>`+
        `Vorname: ${client.lastname}<br>`+
        `Arbeitgeber: ${client.company}`;

    htmlObj = document.getElementById("Krankenkasse");
    htmlObj.innerHTML =
        `Name: ${client.betrieb.firma}<br>`+
        `Nummer: ${client.betrieb.number}<br>`+
        `Art: ${client.betrieb.art}`;

    htmlObj = document.getElementById("alter");
    htmlObj.innerHTML =
        `e-mail: ${client.all.mail}<br>`+
        `Nummer: ${client.all.nummer}<br>`+
        `alter: ${client.all.alter}`;

    htmlObj = document.getElementById("last");
    htmlObj.innerHTML =
        `Besuch 1: ${client.letzt.last1}<br>`+
        `Besuch 2: ${client.letzt.last2}<br>`+
        `Besuch 3: ${client.letzt.last3}`;

    htmlObj = document.getElementById("showIndex");
    htmlObj.innerHTML = "";
    htmlObj.innerHTML = index;
}



function showNext() {
    console.log("show next pressed");
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (clientList.length-1 > index){
            index++;
        }
    }
    localStorage.setItem("index", index);
    client = clientList[index];
    showUI();
}


function showPrevious() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (index > 0){
            index--;
        }
    }
    localStorage.setItem("index", index);
    client = clientList[index];
    showUI();
}

if (client === undefined){
    index = 0;
    localStorage.setItem("index", index);
    client = clientList[index];
    showUI();
}
