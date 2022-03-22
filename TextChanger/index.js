function changeTheText() {

    var changeTextColor = document.getElementById("changeUserColor").value;
    document.getElementById("paragraphText").style.color = changeTextColor;

    var changeTextVariable = document.getElementById("changeUserText").value;
 
 
    document.getElementById("paragraphText").innerHTML = changeTextVariable;
}