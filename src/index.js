import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function output(txt, regex, target) {
  target.innerHTML = txt.replace(
    regex,
    (str) => `<span class='sub'>${str}</span>`
  );
}

let preElement = document.querySelector("pre");

let text = `https://egghead.io
not web address
http://
https://www.egghead.io
`;
let rgx = /https{0,1}:\/\//gi;

output(text, rgx, preElement);

console.log(rgx.exec(text));
console.log(rgx.exec(text));
console.log(text.match(rgx));
