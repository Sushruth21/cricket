function submit(){
    var team1 = document.getElementById("teamA").value;
    var team2 = document.getElementById("teamB").value;
    localStorage.setItem("teamA", team1);
    localStorage.setItem("teamB", team2);
}