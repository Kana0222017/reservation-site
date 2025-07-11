document.addEventListener("DOMContentLoaded", function() {
    let visits = localStorage.getItem("visitCount") || 0;
    visits++;
    localStorage.setItem("visitCount", visits);
    // Visitor count is stored but not displayed to public
});
