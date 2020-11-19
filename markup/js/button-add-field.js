const fieldsetPreferences = document.querySelector(`.fieldset-preferences`);
const button = fieldsetPreferences.querySelector(`.form__button-add`);

let index = 2;

button.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  const div = document.createElement("div");
  div.innerHTML = `<label><select class="form__select" id="form-select-${index}" name="form-select-${index}">
        </select></label>`;
  fieldsetPreferences.querySelector(`.form__container`).appendChild(div.firstChild);
  load_tas(index.toString());
  index++;
})
