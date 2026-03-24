// Write your solution here!
//create an array called cats with three cat names
const cats = ["Milo", "Otis", "Garfield"];
//define a function called destructivelPrependCat that appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}
//define a function called destructivelyPrependCat that prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}   
//define a function called destructivelyRemoveLastCat that removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
} 
//define a function called destructivelyRemoveFirstCat that removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
//define a function called appendCat that appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
  return [...cats, name];
}
//define a function called prependCat that prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
  return [name, ...cats];
}
//define a function called removeLastCat that removes the last cat from the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  return cats.slice(0, -1);
}
//define a function called removeFirstCat that removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
}   




