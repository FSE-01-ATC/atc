const container = document.querySelector(`.tabs-container`);
const tabsYear = container.querySelector(`.tabs`);
const tabsGroup = container.querySelector(`.tabs--column`);
const tabsContent = container.querySelector(`.tabs-content`);

const tabsYearArray = tabsYear.querySelectorAll(`.tabs__link`);
const tabsGroupArray = tabsGroup.querySelectorAll(`.tabs__link`);
const panelsArray = tabsContent.querySelectorAll(`.tabs-content__panel`);

for (let tab of tabsYearArray) {
  tab.addEventListener(`click`, (e) => {
    e.preventDefault();
    tabsYear.querySelector(`.tabs__tab--active`).classList.remove(`tabs__tab--active`);
    tabsContent.querySelector(`.tabs-content__panel--active`).classList.remove(`tabs-content__panel--active`);

    const parent = e.target.parentElement;
    parent.classList.add(`tabs__tab--active`);

    const panels = [...panelsArray].filter(el => el.getAttribute(`data-year`) === e.target.getAttribute(`data-year`));

    const activeGroup = tabsGroup.querySelector(`.tabs__tab--active`).firstChild;

    for (let panel of panels) {
      if (panel.getAttribute(`data-group`) === activeGroup.getAttribute(`data-group`)) {
        panel.classList.add(`tabs-content__panel--active`);
      }
    }
  })
}

for (let tab of tabsGroupArray) {
  tab.addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(e);
    tabsGroup.querySelector(`.tabs__tab--active`).classList.remove(`tabs__tab--active`);
    tabsContent.querySelector(`.tabs-content__panel--active`).classList.remove(`tabs-content__panel--active`);

    const parent = e.target.parentElement;
    parent.classList.add(`tabs__tab--active`);

    const panels = [...panelsArray].filter(el => el.getAttribute(`data-group`) === e.target.getAttribute(`data-group`));

    const activeYear = tabsYear.querySelector(`.tabs__tab--active`).firstChild;

    for (let panel of panels) {
      if (panel.getAttribute(`data-year`) === activeYear.getAttribute(`data-year`)) {
        panel.classList.add(`tabs-content__panel--active`);
      }
    }
  })
}