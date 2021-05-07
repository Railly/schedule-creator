const data = [
  {
    subject:"Probabilidades",
    startTime: "8:00", 
    endTime: "12:00",
    day: "monday"
  },
  {
    subject: "Sistemas Digitales",
    startTime: "8:00",
    endTime: "13:00",
    day: "tuesday"
  },
  {
    subject: "Emprendimiento e Innovacion",
    startTime: "8:00",
    endTime: "12:00",
    day: "wednesday"
  },
  {
    subject: "Matematica Discreta",
    startTime: "14:00",
    endTime: "18:00",
    day: "tuesday"
  },
  {
    subject: "Algoritmica II",
    startTime: "8:00",
    endTime: "13:00",
    day: "friday"
  },
  {
    subject: "Contabilidad",
    startTime: "14:00",
    endTime: "18:00",
    day: "friday"
  },
  {
    subject: "Procesos de Software",
    startTime: "8:00",
    endTime: "13:00",
    day: "saturday"
  },
  {
    subject: "Estructura de Datos",
    startTime: "13:00",
    endTime: "17:00",
    day: "thursday"
  }
]

const transformJson = (data) => {
  const newArr = data.map(obj => {
    let start = 0, end = 0
    if(obj.startTime.length === 4) {
      start = obj.startTime.slice(0, 1)
    } else {
      start = obj.startTime.slice(0, 2)
    }
    if(obj.endTime.length === 4) {
      end = obj.endTime.slice(0, 1)
    } else {
      end = obj.endTime.slice(0, 2)
    }
    let arr = []
    for(let i = Number(start); i <= Number(end); i++) {
      arr.push(i)
    }
    return arr
  })
  for(let i = 0; i < newArr.length; i++) {
    data[i].time = newArr[i]
  }
  return data
}

transformJson(data)