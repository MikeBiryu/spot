const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const robot = document.querySelector(".robot img");
const circle = document.querySelector(".circle");

const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");



container.addEventListener("mousemove", (e) => {

    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(100px) rotateX(-10deg)";
    robot.style.transform = "translateZ(110px) rotateX(-20deg)";
    circle.style.transform = "translateZ(30px) rotateZ(-50deg)";
    description.style.transform = "translateZ(50px)";
    purchase.style.transform = "translateZ(60px)";

});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px) rotateX(0deg)";
    robot.style.transform = "translateZ(0px) rotateX(0deg)";
    circle.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

});