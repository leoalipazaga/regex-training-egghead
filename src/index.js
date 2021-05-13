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

let text = `12/1/16
01-12-2020
12-6-18
`;

// ^: match at the start of line with line anchors
// m: match at the start of line but multilines¸

let rgx = /^12/gm;

output(text, rgx, preElement);
