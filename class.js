const loker = document.getElementById("loker");
const cover = document.getElementById("cover");
const happy = document.getElementById("happy");
const will = document.getElementById("will");
const book = document.getElementById("book");
const click = document.getElementById("click");
const duck = document.getElementById("duck");
const kumta = document.getElementById("kumta");
const mosco = document.getElementById("mosco");
const shoebill = document.getElementById("shoebill");
const items = document.getElementById("items");

const happyQ = () => {
    const q = document.createElement("div");
    
};

const WillQ = () => {

};

const bookQ = () => {

};

const clickQ = () => {

};

const duckQ = () => {

};

const kumtaQ = () => {

};

const moscoQ = () => {

};

const shoebillQ = () => {

};

const handleQ = (event) => {
    questions[`${event.target.id}Q`]();
}

const questions = {
    happyQ,
    WillQ,
    bookQ,
    clickQ,
    duckQ,
    kumtaQ,
    moscoQ,
    shoebillQ
}

main = () => {
    loker.addEventListener("mouseover", () => {
        cover.style.cssText = "left: 19%;"
    });
    
    cover.addEventListener("mouseover", () => {
        cover.style.cssText = "left: 19%;"
    
    });
    
    happy.addEventListener("mouseover", () => {
        cover.style.cssText = "left: 19%;"
    
    });
    
    will.addEventListener("mouseover", () => {
        cover.style.cssText = "left: 19%;"
    
    });
    
    loker.addEventListener("mouseleave", () => {
        cover.style.cssText = "left: 10.5%;"
    });
    
    cover.addEventListener("mouseleave", () => {
        cover.style.cssText = "left: 10.5%;"
    });

    items.addEventListener("click", handleQ);
}

main();











