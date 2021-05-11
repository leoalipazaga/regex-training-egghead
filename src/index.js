import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// \s: this shorthand match all spaces
// \d: this shorthand match all digits
// \w: this shorthand match digits and characters
// \D: this shorthand match all characters except digits
// \W: this shorthand match all characters except digits and characters
// \S: this shorthand match all characters except spaces

function output(txt, regex, target) {
  target.innerHTML = txt.replace(
    regex,
    (str) => `<span class='sub'>${str}</span>`
  );
}

let preElement = document.querySelector("pre");

let text = `cat mat Bat ?at 0at`;
let rgx = /\w/g;

output(text, rgx, preElement);
