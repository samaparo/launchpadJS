//public static void main(String []args) {
(function main() {
  let output = "I have "; // String output = "";

  // Variables
  let x = 10; // int x = 10;
  output += x + " cats. "; // output = output + x + " cats. ";

  // Loops
  while (x > 0) {
    output += "Meow. "; // output = output + "Meow. ";
    x--; // x--;
  }

  // Output result to the console.
  console.log(output); // System.out.print(output);

  // Output result to the page.
  document.querySelector("#output").innerHTML = output;

  document.querySelector("#meow").addEventListener("click", () => {
    console.log("Meow!");
  });
})();
