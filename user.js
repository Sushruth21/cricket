function livedetails() {
    var nameteama = localStorage.getItem("teamA");
    console.log(nameteama);
    document.getElementById("label").innerHTML = nameteama;
}