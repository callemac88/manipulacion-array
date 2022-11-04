const totals = [1,3,2,3, 3];

const rta = totals.reduce((obj, act) => {
  obj[act] = (obj[act]) ? obj[act] + 1 : 1;
  return obj;
}, {});

// console.log('rta', rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta2 = data.reduce((obj, act) => {
  obj[act.level] = (obj[act.level]) ? obj[act.level] + 1 : 1;
  return obj;
}, {});

console.log(rta2);

