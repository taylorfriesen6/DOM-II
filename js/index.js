// Your code goes here


document.addEventListener("keydown", e => {
    document.querySelector("h1").textContent += e.key;
});


const headerImage = document.querySelector("header > img");
headerImage.addEventListener("mouseover", e => {
    headerImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/a/a0/VolRenderShearWarp.gif");
});

document.querySelectorAll(".img-content").forEach(img => {
    img.addEventListener("click", _ => {
        img.style.opacity = 0;
    });
    img.addEventListener("dblclick", _ => {
        img.style.opacity = 1;
    });
});


window.addEventListener("resize", _ => {
    document.body.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
});

document.addEventListener("scroll", _ => {
    document.body.style.color = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
});

document.addEventListener("focus", _ => {
    document.querySelector("h1").textContent = "Fun Bus";
});