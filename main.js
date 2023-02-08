function changeLineColor() {
    const line = document.getElementById('line');
    line.classList.add('red');
}

function changeCircleColor() {
    const circle = document.getElementById('circle');
    circle.classList.toggle('orange');
}

document.getElementById('btn').addEventListener('click', changeLineColor);

document.getElementById('circle').addEventListener('mouseover', changeCircleColor);

document
  .getElementById("circle")
  .addEventListener("mouseout", changeCircleColor);