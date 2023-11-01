document.addEventListener("DOMContentLoaded", function() {
    animateReferences();
});

function animateReferences() {
    const references = document.querySelectorAll(".reference-item");
    
    setTimeout(() => {
        references.forEach((reference, index) => {
            setTimeout(() => {
                reference.classList.add("animated");
            }, index * 200);
        });
    }, 500);
}
function animateBorder() {
    var borderline = document.getElementById('references-container');
    borderline.classList.toggle('bordered');
}
