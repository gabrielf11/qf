function math() {
  // Stop the stupid thing from reloading the page and ruining EVERYTHING (thanks stack overflow post from like 12 years ago)
  event.preventDefault();

  // Set HTML elements to variables
  const title = document.getElementById("title");
  const aInput = document.getElementById("a");
  const aInputText = document.getElementById("a-invalid");
  const bInput = document.getElementById("b");
  const cInput = document.getElementById("c");
  const answer = document.getElementById("answer");
  const answerText = document.getElementById("answer-text");

  // Pull values from form
  let a = aInput.value;
  let b = bInput.value;
  let c = cInput.value;

  // Reset in case script is run multiple times
  answer.style.display = "none";
  aInput.removeAttribute("aria-invalid");
  aInputText.style.display = "none";
  title.innerHTML = "Quadratic Formula";

  // Check if a = 0
  if (a == 0) {
    aInput.ariaInvalid = true;
    title.style.display = "block";
    title.innerHTML =
      '<b style="color: Red"><i>QUADRATIC</i></b> Formula (not linear)';
    return; // End function
  }

  // Calculate b^2 - 4ac
  let presqrt = b ** 2 - 4 * a * c;

  // Check if it's zero
  if (presqrt < 0) {
    // Print no solution
    answer.style.display = "block";
    answer.scrollIntoView();
    answerText.innerHTML = `<b>No real solution</b> <br> Discriminant = ${presqrt.toLocaleString()} <br> Vertex = ${vertex}`;
  } else {
    // Finish calculating
    sqrt = Math.sqrt(presqrt);
    x1 = (-b + sqrt) / (2 * a);
    x2 = (-b - sqrt) / (2 * a);
    // Calculate vertex
    vertx = -b / (2 * a);
    verty = a * vertx ** 2 + b * vertx + c;
    vertex = `(${vertx}, ${verty})`;

    // Check if they're the same, then print answer
    if (x1 == x2) {
      answer.style.display = "block";
      answer.scrollIntoView();
      answerText.innerHTML = `<b>x = ${x1.toLocaleString()}</b> <br> Discriminant = ${presqrt.toLocaleString()} <br> Vertex = ${vertex}`;
    } else {
      answer.style.display = "block";
      answer.scrollIntoView();
      answerText.innerHTML = `<b>x = ${x1.toLocaleString()} <br> x = ${x2.toLocaleString()}</b> <br> Discriminant = ${presqrt.toLocaleString()} <br> Vertex = ${vertex}`;
    }
  }
}
