const refs = {
    slider: document.querySelector('#font-size-control'),
    outText: document.querySelector('#text'),  
};

refs.slider.addEventListener('input', FontSizeCange);

function FontSizeCange(event) {

    refs.outText.style.fontSize = `${event.currentTarget.value}px`;
}