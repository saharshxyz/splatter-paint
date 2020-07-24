tool.fixedDistance = 60

function onMouseMove(event) {
var path = new Path.Circle({
  center: event.middlePoint,
  radius: Math.floor(Math.random() * 30)
})

path.fillColor = {
  hue: event.count * 3,
  saturation: 1,
  brightness: 1
}
}

