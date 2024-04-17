// Set HTML elements to variables
const title = document.getElementById("title");
const aInput = document.getElementById("a");
const aInputText = document.getElementById("a-invalid");
const bInput = document.getElementById("b");
const cInput = document.getElementById("c");
const answer = document.getElementById("answer");
const answerText = document.getElementById("answer-text");
const table = document.getElementById("table");

// Declare values
let a;
let b;
let c;

// Function that runs when form is submitted and updates/solves all values
function math() {
  // Stop the stupid thing from reloading the page and ruining EVERYTHING (thanks stack overflow post from like 12 years ago)
  event.preventDefault();

  // Pull values from form
  a = Number(aInput.value);
  b = Number(bInput.value);
  c = Number(cInput.value);

  // Reset in case script is run multiple times
  title.innerHTML = "Quadratic Formula";
  aInput.removeAttribute("aria-invalid");
  aInputText.style.display = "none";
  answer.style.display = "none";
  table.innerHTML = "";

  // Check if a = 0
  if (a === 0) {
    aInput.ariaInvalid = true;
    title.style.display = "block";
    title.innerHTML =
      '<b style="color: Red"><i>QUADRATIC</i></b> Formula (not linear)';
    return; // End function
  }

  // Calculate b^2 - 4ac
  let presqrt = b ** 2 - 4 * a * c;
  // Calculate vertex
  let vertx = -b / (2 * a);
  let verty = f(vertx);
  let vertex = `(${vertx}, ${verty})`;
  // Calculate table values
  let xColumn = [vertx - 2, vertx - 1, vertx, vertx + 1, vertx + 2];
  let yColumn = xColumn.map((x) => f(x));
  for (i = 0; i < 5; i++) {
    table.innerHTML += `
    <tr>
      <th scope="row">${xColumn[i].toLocaleString()}</th>
      <td>${yColumn[i].toLocaleString()}</td>
    </tr>
    `;
  }

  // Check if it's zero
  if (presqrt < 0) {
    // Print no solution
    answer.style.display = "block";
    answerText.innerHTML = `<b>No real solution</b> <br> Discriminant = ${presqrt.toLocaleString()} <br> Vertex = ${vertex}`;
    answer.scrollIntoView({ behavior: "smooth" });
  } else {
    // Finish calculating
    sqrt = Math.sqrt(presqrt);
    x1 = (-b + sqrt) / (2 * a);
    x2 = (-b - sqrt) / (2 * a);

    // Check if they're the same, then print answer
    if (x1 === x2) {
      answer.style.display = "block";
      answerText.innerHTML = `<b>x = ${x1.toLocaleString()}</b> <br> Discriminant = ${presqrt.toLocaleString()} <br> Vertex = ${vertex}`;
      answer.scrollIntoView({ behavior: "smooth" });
    } else {
      answer.style.display = "block";
      answerText.innerHTML = `<b>x = ${x1.toLocaleString()} <br> x = ${x2.toLocaleString()}</b> <br> Discriminant = ${presqrt.toLocaleString()} <br> Vertex = ${vertex}`;
      answer.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Function that finds x in ax^2+bx+c
function f(x) {
  return a * x ** 2 + b * x + c;
}
