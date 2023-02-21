const html = `<h1>version one</h1>`;
const html1 = `<h1>version two</h1>`;

document.querySelector("body").insertAdjacentHTML("afterend", html);
document.querySelector("body").insertAdjacentHTML("afterend", html1);
