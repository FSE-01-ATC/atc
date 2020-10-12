const fieldsetPreferences = document.querySelector(`.fieldset-preferences`);
const button = fieldsetPreferences.querySelector(`.form__button-add`);

button.addEventListener(`click`, (evt) => {
  evt.preventDefault();

  const div = document.createElement("div");
  div.innerHTML = `<label><select class="form__select" id="form-select-1" name="form-select-1">
          <option>Name1 Surname1</option>
          <option>Name2 Surname2</option>
          <option>Name3 Surname3</option>
          <option>Name4 Surname3</option>
        </select></label>`;
  fieldsetPreferences.querySelector(`.form__container`).appendChild(div.firstChild);
})