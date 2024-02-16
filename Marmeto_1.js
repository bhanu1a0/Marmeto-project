let containerEl = document.getElementById("container");


let headingEl = document.getElementsByClassName("pixso-use");
headingEl.textContent = FAQ;
document.body.appendChild("headingEl");
containerEl.appendChild("")

function printKeydown(event) {
    console.log(event.type); // keydown
}
headingEl.addEventListener("keydown", printKeydown);
// document.body.appendChild(inputEl);