function initFontSize() {
    const fontSize = document.querySelector('#FontSize');
    fontSize.addEventListener('input', e => {
        const root = document.querySelector(':root');
        root.style.setProperty('--line-of-chars', `${e.target.value}`);
        const fontSize_ = document.querySelector('#FontSize_');
        fontSize_.innerHTML = e.target.value;
        console.log(`${e.target.value}`);
    });
    fontSize.dispatchEvent(new Event('input'));
    return fontSize;
}
