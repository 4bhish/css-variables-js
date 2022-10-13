const inputs =  document.querySelectorAll(".controls input")

function updateHandle()
{
    const suffix = this.dataset.sizing || ``;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(inputs => inputs.addEventListener("change", updateHandle));
inputs.forEach(inputs=> inputs.addEventListener("mousemove", updateHandle));