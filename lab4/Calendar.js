function Calendar(year, month, cday) {
  let day = cday ?? 1;
  let dayLast = new Date(year, month + 1, 0).getDate(),
  dateLast = new Date(year, month, dayLast),
  currentDate = new Date(year, month, day),
  dayWeekLast = dateLast.getDay(),
  dayWeekFirst = new Date(dateLast.getFullYear(), dateLast.getMonth(), 1).getDay(),
  calendar = '<tr>',
  mesyac = document.querySelector('#calendar option[value="' + dateLast.getMonth() + '"]'),
  god = document.querySelector('#calendar option[value="' + currentDate.getFullYear() + '"]');
  if (dayWeekFirst != 0) {
    for (let i = 1; i < dayWeekFirst; i++) calendar += '<td>';
  } else {
    for (let i = 0; i < 6; i++) calendar += '<td>';
  }
  for (let i = 1; i <= dayLast; i++) {
    if (i == new Date().getDate() && dateLast.getFullYear() == new Date().getFullYear() && dateLast.getMonth() == new Date().getMonth()) {
      calendar += `<td class="month-day today" value=${i}>` + i;
    } else {
        calendar += `<td class="month-day" value=${i}>` + i;
    }
    if (new Date(dateLast.getFullYear(), dateLast.getMonth(), i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for (let i = dayWeekLast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#calendar tbody').innerHTML = calendar;
  god.selected = true;
  mesyac.selected = true;
  if (document.querySelectorAll('#calendar tbody tr').length < 6) {
    document.querySelector('#calendar tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }

  const currentDateElement = document.querySelector(`.month-day[value="${currentDate.getDate()}"]`);
  if (currentDateElement) {
    currentDateElement.classList.add('selected');
  }

  initMonthDates();

  const dateElement = document.querySelector('#birthDate');
  if (dateElement) {
    year = currentDate.toLocaleString("default", { year: "numeric" });
    month = currentDate.toLocaleString("default", { month: "2-digit" });
    day = currentDate.toLocaleString("default", { day: "2-digit" });
    
    // Generate yyyy-mm-dd date string
    var formattedDate = month + "/" + day + "/" + year;

    dateElement.value = formattedDate;
  }
}

function initMonthDates() {
  const daysBtns = document.querySelectorAll('.month-day');
  daysBtns.forEach(dayBtn => {
    dayBtn.addEventListener('click', () => {
      daysBtns.forEach(dayBtnToDeselect => {
        dayBtnToDeselect.classList.remove('selected');
      });
      dayBtn.classList.add('selected');

      updateCalendar();
    });
  });

}

function updateCalendar() {
  Calendar(document.querySelector('#calendar select#year').value,
    parseFloat(document.querySelector('#calendar select#month').options[document.querySelector('#calendar select').selectedIndex].value),
    parseInt(document.querySelector('.month-day.selected')?.innerHTML ?? '1'));
}

Calendar(new Date().getFullYear(), new Date().getMonth());
document.querySelector('#calendar').onchange = updateCalendar;