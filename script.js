document.addEventListener("DOMContentLoaded", function() {
    let visits = localStorage.getItem("visitCount") || 0;
    visits++;
    localStorage.setItem("visitCount", visits);
    console.log(`This user has visited ${visits} time(s).`);
});
