var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingredient4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];




var randomArray = ["Thing1", "Thing2"];

function addElementToBeginningOfArray(array, element)
{
["Thing01", ...randomArray];
return addElementToBeginningOfArray;
}


function destuctivelyAddElementToBeginningOfArray(array, element)
{
randomArray.unshift(element);
return randomArray;
}


function addElementToEndOfArray(array, element){
[...randomArray, "Thing03"];  
return addElementToEndOfArray;
}


function destructivelyAddElementToEndOfArray(array, element){
randomArray.push("Thing3");
return destructivelyAddElementToEndOfArray
}


function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array;
}

function removeElementFromBeginningOfArray(array){
  array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
return array.slice(0, array.length - 1);
}