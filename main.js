function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomColor() {
  return `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}
