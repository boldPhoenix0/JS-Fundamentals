function checkArguments(a, b) {
  if (!a && !b) {
    console.log("No argument");
  }

  if (a && !b) {
    console.log("Argument found");
  }

  if (a && b) {
    console.log("Arguments found");
  }
}