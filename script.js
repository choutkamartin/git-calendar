document.addEventListener("DOMContentLoaded", function () {
  changeCalendar(2022);
});

const changeCalendar = (year) => {
  const arr = Array.from(Array(365).keys());
  let row = 1;
  let col = 1;
  const rect = arr.map((index) => {
    var d = new Date(
      new Date(24 * 3600 * 1000 * 365 * (year - 1970 + 1)).getFullYear(),
      0,
      index + 1
    ).getDay();
    var daysLeft = 7 - d;
    if (d != 0 && col == 1) {
      row = d + 1;
    }
    if (index >= col * 7 || daysLeft == 7) {
      col = col + 1;
      row = 1;
    }
    row += 1;
    return `<rect x="${col * 10}" y="${
      row * 10
    }" width="10" height="10" fill="yellow" stroke="white" stroke-width="2" />`;
  });

  const svg = document.getElementById("svg");
  const bbox = svg.getBBox();
  svg.innerHTML = rect;
};
