const RANGE = document.querySelector("#range");

RANGE.addEventListener('input', (event) => {
    const VALUE =+ event.target.value;
    const LABEL = event.target.nextElementSibling;

    const RANGE_WIDTH = getComputedStyle(event.target).getPropertyValue('width')

    const LABEL_WIDTH = getComputedStyle(LABEL).getPropertyValue('width');

    const NUM_WIDTH = +RANGE_WIDTH.substring(0, RANGE_WIDTH.length - 2);

    const NUM_LABEL_WIDTH = +LABEL_WIDTH.substring(0, LABEL_WIDTH.length - 2)

    const MAX = event.target.max;
    const MIN = event.target.min;

    const LEFT = VALUE * (NUM_WIDTH / MAX) - NUM_LABEL_WIDTH / 2 + scale(VALUE, MIN, MAX, 10, -10)

    LABEL.style.left = `${LEFT}px`


    console.log(LEFT)
    LABEL.innerHTML = VALUE
})

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}