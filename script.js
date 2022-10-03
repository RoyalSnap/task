let toolTip = document.querySelector('.tooltip');

function setToolTip(x, y, color) {
  toolTip.style.background = color;
  toolTip.style.top = `${y}px`;
  toolTip.style.left = `${x}px`;
}

// on mouse move get current pointer location and update color of tooltip
document.addEventListener('click', async function (e) {
  console.log(e.clientX, e.clientY);
  let color = await sampleColorFromScreen();
  setToolTip(e.clientX, e.clientY, color);
});

async function sampleColorFromScreen() {
  const eyeDropper = new EyeDropper();
  try {
    const result = await eyeDropper.open();
    console.log(result);
    return result.sRGBHex;
  } catch (e) {
    return null;
  }
}
