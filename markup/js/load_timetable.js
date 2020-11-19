const END_POINT = `http://localhost:8000/api`;

const getData = (year, group, timeTable) => {
    return timeTable.filter((el) => parseInt(el._class.course.year) === parseInt(year) && parseInt(el.group.number) === parseInt(group));
}

const blockTemplate1 = (data, timeslot) => {
  return `
            <tr class="table__tr">
              <td class="table__td">${timeslot}</td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Monday.name ? data.Monday.name + ' (' + data.Monday.type + ')' : ``}</i></li>
                  <li class="table__list-item">${data.Monday.professor ? data.Monday.professor : ``}</li>
                  <li class="table__list-item"><b>${data.Monday.room ? data.Monday.room : ``}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Tuesday.name ? data.Tuesday.name + ' (' + data.Tuesday.type + ')' : ``}</i></li>
                  <li class="table__list-item">${data.Tuesday.professor ? data.Tuesday.professor : ``}</li>
                  <li class="table__list-item"><b>${data.Tuesday.room ? data.Tuesday.room : ``}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Wednesday.name ? data.Wednesday.name + ' (' + data.Wednesday.type + ')' : ``}</i></li>
                  <li class="table__list-item">${data.Wednesday.professor ? data.Wednesday.professor : ``}</li>
                  <li class="table__list-item"><b>${data.Wednesday.room ? data.Wednesday.room : ``}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Thursday.name ? data.Thursday.name + ' (' + data.Thursday.type + ')' : ``}</i></li>
                  <li class="table__list-item">${data.Thursday.professor ? data.Thursday.professor : ``}</li>
                  <li class="table__list-item"><b>${data.Thursday.room ? data.Thursday.room : ``}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Friday.name ? data.Friday.name + ' (' + data.Friday.type + ')' : ``}</i></li>
                  <li class="table__list-item">${data.Friday.professor ? data.Friday.professor : ``}</li>
                  <li class="table__list-item"><b>${data.Friday.room ? data.Friday.room : ``}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Saturday.name ? data.Saturday.name + ' (' + data.Saturday.type + ')' : ``}</i></li>
                  <li class="table__list-item">${data.Saturday.professor ? data.Saturday.professor : ``}</li>
                  <li class="table__list-item"><b>${data.Saturday.room ? data.Saturday.room : ``}</b></li>
                </ul>
              </td>
            </tr>`
}


const createTableTemplate1 = (data) => {
  let blocks = ``;

  let obj = {
    '09:00-10:30': {
      'Monday': {},
      'Tuesday': {},
      'Wednesday': {},
      'Thursday': {},
      'Friday': {},
      'Saturday': {}
    },
    '10:40-12:10': {
      'Monday': {},
      'Tuesday': {},
      'Wednesday': {},
      'Thursday': {},
      'Friday': {},
      'Saturday': {}
    },
    '12:40-14:10': {
      'Monday': {},
      'Tuesday': {},
      'Wednesday': {},
      'Thursday': {},
      'Friday': {},
      'Saturday': {}
    },
    '14:20-15:50': {
      'Monday': {},
      'Tuesday': {},
      'Wednesday': {},
      'Thursday': {},
      'Friday': {},
      'Saturday': {}
    },
    '16:00-17:30': {
      'Monday': {},
      'Tuesday': {},
      'Wednesday': {},
      'Thursday': {},
      'Friday': {},
      'Saturday': {}
    },
    '17:40-19:10': {
      'Monday': {},
      'Tuesday': {},
      'Wednesday': {},
      'Thursday': {},
      'Friday': {},
      'Saturday': {}
    },
    '19:20-20:50': {
      'Monday': {},
      'Tuesday': {},
      'Wednesday': {},
      'Thursday': {},
      'Friday': {},
      'Saturday': {}
    }
  }

  for (let i = 0; i < data.length; i++) {
    let name;
    if (data[i].assistant) {
      name = data[i].assistant.user.first_name + ' ' + data[i].assistant.user.last_name;
    } else {
      name = data[i]._class.course.instructor.user.first_name + ' ' + data[i]._class.course.instructor.user.last_name;
    }

    obj[data[i].timeslot][data[i].day] = {
      name: data[i]._class.course.name,
      professor: name,
      room: data[i].room.number,
      type: data[i]._class._type
    }
  }

  for (let key in obj) {
    blocks += blockTemplate1(obj[key], key);
  }



  return `
          <table class="table">
            <tr class="table__tr">
              <td class="table__td"><b>Time</b></td>
              <td class="table__td"><b>Monday</b></b></td>
              <td class="table__td"><b>Tuesday</b></td>
              <td class="table__td"><b>Wednesday</b></td>
              <td class="table__td"><b>Thursday</b></td>
              <td class="table__td"><b>Friday</b></td>
              <td class="table__td"><b>Saturday</b></td>
            </tr>
            ${blocks}
          </table>`
}


const api = new Api(END_POINT);
api.getTimeTable()
    .then((timeTable) => {
        for (let panel of panelsArray) {
          const data = getData(panel.getAttribute(`data-year`), panel.getAttribute(`data-group`), timeTable);
          const template = createTableTemplate1(data);
          panel.insertAdjacentHTML('beforeend', template);
        }
    })
