function Calendar(year, month, cday) {
  let day = cday ?? 1;
  let dayLast = new Date(year, month + 1, 0).getDate(),
  dateLast = new Date(year, month, dayLast),
  currentDate = new Date(year, month, day),
  dayWeekLast = dateLast.getDay(),
  dayWeekFirst = new Date(dateLast.getFullYear(), dateLast.getMonth(), 1).getDay(),
  calendar = '<tr>',
  mesyac = $('#calendar option[value="' + dateLast.getMonth() + '"]'),
  god = $('#calendar option[value="' + currentDate.getFullYear() + '"]');
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
  $('#calendar tbody').html() = calendar;
  god.selected = true;
  mesyac.selected = true;
  if ($('#calendar tbody tr').length < 6) {
    $('#calendar tbody').html() += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }

  const currentDateElement = $(`.month-day[value="${currentDate.getDate()}"]`);
  if (currentDateElement) {
    currentDateElement.addClass('selected');
  }

  initMonthDates();

  const dateElement = $('#birthDate');
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
  const daysBtns = $('.month-day');
  daysBtns.each(dayBtn => {
    dayBtn.addEventListener('click', () => {
      daysBtns.each(dayBtnToDeselect => {
        dayBtnToDeselect.removeClass('selected');
      });
      dayBtn.addClass('selected');

      updateCalendar();
    });
  });

}

function updateCalendar() {
  Calendar($('#calendar select#year').value,
    parseFloat($('#calendar select#month').options[$('#calendar select').selectedIndex].value),
    parseInt($('.month-day.selected')?.html() ?? '1'));
}

Calendar(new Date().getFullYear(), new Date().getMonth());
$('#calendar').onchange = updateCalendar;