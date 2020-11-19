btn = document.querySelector(`.button--submit`);
form = document.querySelector(`.main-settings__form`);

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(evt);
    console.log('s');
    const data = [];
    const form_selects = document.querySelectorAll(`.form__select`);
    for (let select of form_selects) {
        const index = select.selectedIndex;
        data.push(parseInt(select.options[index].getAttribute(`data-id`)))
    }
    api.putDislikes(1, data);
    console.log(data);
    form.reset();
})
