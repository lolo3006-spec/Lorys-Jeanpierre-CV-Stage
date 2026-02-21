const h = document.querySelector("header")

const button = document.createElement("button")
button.textContent = "Me contacter"
button.classList.add("button")

const section = document.querySelector(".sixième")
section.id = "sixieme"
button.onclick = function () {
    section.scrollIntoView({ behavior: "smooth" })
};

h.appendChild(button)