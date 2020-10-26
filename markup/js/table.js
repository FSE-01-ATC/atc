const blockTemplate = (data) => {
  return `
            <tr class="table__tr">
              <td class="table__td">${data.time}</td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Monday.name}</i></li>
                  <li class="table__list-item">${data.Monday.professor}</li>
                  <li class="table__list-item"><b>${data.Monday.room}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Tuesday.name}</i></li>
                  <li class="table__list-item">${data.Tuesday.professor}</li>
                  <li class="table__list-item"><b>${data.Tuesday.room}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Wednesday.name}</i></li>
                  <li class="table__list-item">${data.Wednesday.professor}</li>
                  <li class="table__list-item"><b>${data.Wednesday.room}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Thursday.name}</i></li>
                  <li class="table__list-item">${data.Thursday.professor}</li>
                  <li class="table__list-item"><b>${data.Thursday.room}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Friday.name}</i></li>
                  <li class="table__list-item">${data.Friday.professor}</li>
                  <li class="table__list-item"><b>${data.Friday.room}</b></li>
                </ul>
              </td>
              <td class="table__td">
                <ul class="table__list">
                  <li class="table__list-item"><i>${data.Saturday.name}</i></li>
                  <li class="table__list-item">${data.Saturday.professor}</li>
                  <li class="table__list-item"><b>${data.Saturday.room}</b></li>
                </ul>
              </td>
            </tr>`
}

const createTableTemplate = (data) => {

  let blocks = ``;

  for (let i = 0; i < data.length; i++) {
    blocks += blockTemplate(data[i]);
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

const Data = {
  BS20: {
    1: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    2: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    3: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    4: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    5: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    6: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
  },
  BS19: {
    1: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    2: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    3: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    4: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    5: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    6: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
  },
  BS18: {
    1: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    2: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    3: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    4: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    5: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    6: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
  },
  BS17: {
    1: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    2: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    3: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    4: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    5: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
    6: [
      {
        time: `9:00-10:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `10:40-12:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `12:40-14:10`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `14:20-15:50`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `16:00-17:30`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `17:40-19:10`,
        Monday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lab)`,
          professor: `Anastasiya Puzankova`,
          room: `101`
        },
        Tuesday: {
          name: `Programming Software Systems 1 (Lecture)`,
          professor: `Eugene Zouev`,
          room: `106`
        },
        Wednesday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Thursday: {
          name: `Computer Architecture / Fundamentals of Computer Architecture (Lecture)`,
          professor: `Alexander Tormasov`,
          room: `108`
        },
        Friday: {
          name: `Essentials of Analytical Geometry and Linear Algebra 1 (Lecture)`,
          professor: `Vladimir Ivanov`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
      {
        time: `19:20-20:50`,
        Monday: {
          name: `English for Academic Purposes I - EAP1 / EAP2 / EAP3`,
          professor: `Georgy Gelvanovsky / Guzel Fazlyeva / Rabab Marouf`,
          room: `104 / 103 / 318`
        },
        Tuesday: {
          name: `Discrete Mathematics (Lab)`,
          professor: `Naumcheva Mariya`,
          room: `101`
        },
        Wednesday: {
          name: `Fundamentals of Philosophy (Logic) (Lab)`,
          professor: `Hamna Aslam`,
          room: `102`
        },
        Thursday: {
          name: ``,
          professor: ``,
          room: ``
        },
        Friday: {
          name: `Physical education (check schedule for Sport Classes)`,
          professor: `<a href="http://sport.innopolis.university/">Sport Innopolis</a>`,
          room: `105`
        },
        Saturday: {
          name: ``,
          professor: ``,
          room: ``
        }
      },
    ],
  }
}

for (let panel of panelsArray) {
  const data = Data[`BS` + panel.getAttribute(`data-year`)][panel.getAttribute(`data-group`)];
  const template = createTableTemplate(data);
  panel.insertAdjacentHTML('beforeend', template);
}