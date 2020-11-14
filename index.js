let date = document.getElementById("date");
let today = new Date();
let firstRadio = document.getElementById("radio1");
let secondRadio = document.getElementById("radio2");
let innerFirstRadio = document.getElementById("inner1");
let innerSecondRadio = document.getElementById("inner2");
let firstCount = document.getElementById("count");
let secondCount = document.getElementById("counter");
let count = 0;
let counter = 0;
let circleIcon = document.getElementById("circler");
let firstPage = document.getElementById("body1");
let secondPage = document.getElementById("body2");
let newTaskIcon = document.getElementById("newtask");
let radioContainer = document.getElementById("radiogeneral");
let dateTime = document.getElementById('date');
let inputText = document.getElementById("text");
let inboxInner = document.getElementById("inboxinnercontainer");
let settingsPage = document.getElementById("settingpage");
let settingsIcon = document.getElementById("menutime");
let menuPage = document.getElementById("menupage");
let menuBars = document.getElementById("menubars");
let menuCloseIcon = document.getElementById("menutimes");
let closeIcon = document.getElementById("close");
let categoryStyle = document.getElementById("categorylist");
date.innerHTML = Month() + " " + today.getDate() + ", " + today.getFullYear();
function Month() {
    let month = today.getMonth();
    switch (month) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        default:
            return "Dec";
    }
}
circleIcon.addEventListener("click", function () {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
})
firstRadio.addEventListener("click", function () {
    innerFirstRadio.style.borderColor = "#45519d";
    innerSecondRadio.style.borderColor = "lightgrey";
    if (dateTime.value !== "" && inputText.value !== "") {
        count++;
        firstCount.innerHTML = count;
        document.getElementById("spanpersonal").innerHTML = document.getElementById("spanpersonal").innerHTML + " "+ "-"+count;
    }
})
 secondRadio.addEventListener("click", function () {
    innerSecondRadio.style.borderColor = "#2dc6f7";
    innerFirstRadio.style.borderColor = "lightgrey";
    if (dateTime.value !== "" && inputText.value !== "") {
        counter++;
        secondCount.innerHTML = counter;
        document.getElementById("spanbusiness").innerHTML =  document.getElementById("spanbusiness").innerHTML+ " "+ "-"+counter;
    }
})
newTaskIcon.addEventListener("click", function () {
    firstPage.style.display = "grid";
    secondPage.style.display = "none";
    if (dateTime.value !== "" && inputText.value !== "") {
        createBox();
    }
})
function createBox() {
    let inboxRow = document.createElement("div");
    let box = document.createElement("div");
    let paragraph = document.createElement("span");
    let trashIcon = document.createElement("i");
    inboxInner.appendChild(inboxRow);
    inboxRow.setAttribute("class", "create-new-task");
    inboxRow.setAttribute("id", "createnewtask");
    inboxRow.appendChild(box);
    box.setAttribute("id", "checkbox");
    inboxRow.appendChild(paragraph);
    paragraph.setAttribute("id", "span");
    paragraph.textContent = inputText.value;
    inboxRow.appendChild(trashIcon);
    trashIcon.setAttribute("class", "fas fa-trash-alt");
    trashIcon.setAttribute("id", "trashstyle");
    box.addEventListener("click", function () {
        box.style.display = "none";
        paragraph.style.textDecoration = "line-through";
    })
    trashIcon.addEventListener("click", function(){
        this.parentNode.parentNode.removeChild(this.parentNode);
    })
 
}
closeIcon.addEventListener("click", function () {
    firstPage.style.display = "grid";
    secondPage.style.display = "none";
})

menuBars.addEventListener("click", function () {
    firstPage.style.display = "none";
    menuPage.style.display = "block";
})
menuCloseIcon.addEventListener("click", function () {
    firstPage.style.display = "block";
    menuPage.style.display = "none";
})
categoryStyle.addEventListener("click", function () {
    document.getElementById("firsthide").style.display = "block";
    document.getElementById("secondhide").style.display = "block";

})
document.getElementById("reset").addEventListener("click", function () {
    window.location.reload();
})
document.getElementById("settings").addEventListener("click", function () {
    settingsPage.style.display = "block";
    menuPage.style.display = "none";
})
document.getElementById("menutime").addEventListener("click", function () {
    settingsPage.style.display = "none";
    menuPage.style.display = "block";
})