function Calendar(id, year, month, day) {
  day ??= 1;
  var Dlast = new Date(year, month + 1, 0).getDate(),
    D = new Date(year, month, Dlast),
    currentDate = new Date(year, month, day),
    DNlast = D.getDay(),
    DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
    calendar = '<tr>',
    m = document.querySelector('#' + id + ' option[value="' + D.getMonth() + '"]'),
    g = document.querySelector('#' + id + ' option[value="' + currentDate.getFullYear() + '"]');
  if (DNfirst != 0) {
    for (var i = 1; i < DNfirst; i++) calendar += '<td>';
  } else {
    for (var i = 0; i < 6; i++) calendar += '<td>';
  }
  for (var i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += `<td class="month-day today" value=${i}>` + i;
    } else {
        calendar += `<td class="month-day" value=${i}>` + i;
    }
    if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#' + id + ' tbody').innerHTML = calendar;
  g.selected = true;
  m.selected = true;
  if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
    document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
  //document.querySelector('#' + id + ' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц

  const currentDateElement = document.querySelector(`.month-day[value="${currentDate.getDate()}"]`);
  if (currentDateElement) {
    currentDateElement.classList.add('selected');
  }

  initMonthDates();

  const dateElement = document.querySelector('#birthDate');
  if (dateElement) {
    var year = currentDate.toLocaleString("default", { year: "numeric" });
    var month = currentDate.toLocaleString("default", { month: "2-digit" });
    var day = currentDate.toLocaleString("default", { day: "2-digit" });
    
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
      })
      dayBtn.classList.add('selected');

      updateCalendar();
    })
  })

}

function updateCalendar() {
  Calendar("calendar",
    document.querySelector('#calendar select#year').value,
    parseFloat(document.querySelector('#calendar select#month').options[document.querySelector('#calendar select').selectedIndex].value),
    parseInt(document.querySelector('.month-day.selected')?.innerHTML ?? '1'));
}

Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
document.querySelector('#calendar').onchange = updateCalendar;

