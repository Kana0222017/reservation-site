document.addEventListener("DOMContentLoaded", function() {
    let visits = localStorage.getItem("visitCount") || 0;
    visits++;
    localStorage.setItem("visitCount", visits);
    const counter = document.getElementById("visit-counter");
    if (counter) {
        counter.textContent = `You have visited this site ${visits} time(s).`;
    }
});