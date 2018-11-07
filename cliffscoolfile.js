function doAThing(){
  console.log("Cliff is cool")
}

function doubleAThing(thing) {
  return (thing * 2)
}

function printADoubledThing(thing) {
  console.log(doubleAThing(thing))
}

doAThing()
printADoubledThing(3)