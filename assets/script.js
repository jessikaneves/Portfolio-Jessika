document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navlist = document.querySelector(".navlist");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        navlist.classList.toggle("active");
        document.body.classList.toggle("open");
    });

    navlist.addEventListener("click", () => {
        navlist.classList.remove("active");
        menuIcon.classList.remove("active");
        document.body.classList.remove("open");
    });

    const text = "Estudante de Engenharia de Software.";
    const typingElement = document.getElementById('typing');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(type, 100); // Adjust the typing speed here
        } else {
            typingElement.innerHTML = text; // Ensure the cursor doesn't stick around at the end
        }
    }

    type();
});