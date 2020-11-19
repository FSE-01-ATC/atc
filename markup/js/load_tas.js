const END_POINT = `http://localhost:8000/api`;

const api = new Api(END_POINT);

const load_tas = function (id) {
    api.getTAs()
    .then((tas) => {
      const select = document.querySelector(`#form-select-${id}`);
      for (let ta of tas) {
        select.innerHTML += `<option data-id="${ta.id}">${ta.user.last_name} ${ta.user.first_name}</option>`;
      }
    })
}

const form_selects = document.querySelectorAll(`.form__select`);

for (let select of form_selects) {
    load_tas(select.id.slice(12));
}
