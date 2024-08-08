const sec = 1297;

const hour = parseInt(sec / 3600);
const min = parseInt(sec / 60);
const uldegdel = sec - hour * 3600 - min * 60;
console.log(hour, "uldtsag", min, "uldmin", uldegdel, "uldsec");
