function onMouseMove(event) {
var path = new Path.Circle({
  center: event.middlePoint,
  radius: Math.floor(Math.random() * 30)
})

path.fillColor = {
  hue: 0,
  saturation: 1,
  brightness: 1
}
}

