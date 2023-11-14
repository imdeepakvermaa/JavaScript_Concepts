const intro = "Hey I am Deepak Verma. how's doing ?";

console.log(intro.length); //length

if (intro.includes("Deepak-Verma")) {
  //includes
  console.log("Yahh it's Deepak Verma");
} else {
  console.log("Nahh it's not Deepak Verma");
}

if (intro.startsWith("Hey")) {
  //startswith
  console.log("Yahh");
} else {
  console.log("Nahh");
}

if (intro.endsWith("?")) {
  //endswith
  console.log("Yahh");
} else {
  console.log("Nahh");
}

console.log(intro.indexOf("Deepak")); //indexof
console.log(intro.indexOf("x"));

console.log(intro.toLowerCase()); //tolowercase
console.log(intro.toUpperCase()); //touppercase

const updated = intro.replace("how's doing ?", "Doing Great."); //replace and replaceall [change all the part in the given sentences]

console.log(updated);
