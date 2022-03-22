function calculateLength() {
    var word = document.getElementById("str").value;
    var wordLength = word.length;
    
    document.getElementById("output").innerHTML = "<h2>Word length is " + wordLength.toString() + " characters</h2>";
}