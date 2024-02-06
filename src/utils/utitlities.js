export function timeSince(date) {
  var now = new Date(),
    timeStamp = new Date(date),
    secondsPast = (now.getTime() - timeStamp.getTime()) / 1000

  if (secondsPast <= 86400) {
    return 'Posted today'
  }
  if (secondsPast <= 2628000) {
    return parseInt(secondsPast / 86400) + ' days ago'
  }
  if (secondsPast <= 31536000) {
    const monthPassed = parseInt(secondsPast / 2628000)
    return monthPassed === 1 ? `a month ago` : `${monthPassed} months ago`
  }
  if (secondsPast > 31536000) {
    const yearPassed = parseInt(secondsPast / 31536000)
    return yearPassed === 1 ? `1 year ago` : `${monthPassed} years ago`
  }
}

export function validateText(str) {
  var tarea = str
  if (tarea.indexOf('http://') == 0 || tarea.indexOf('https://') == 0) {
    return str
  }
  return null
}

export function mediaFilter() {
  const allTabs = document.querySelectorAll('.media-main-sec .filter');
  const allMediaCards = document.querySelectorAll('.media-main-sec .media-card')

  const activateTab = (clickedTab) => {
    allTabs.forEach(tab => tab.classList.remove('active'));
    clickedTab.classList.add('active');
  };

  allTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      if (!tab.classList.contains('active')) {
        activateTab(tab);
        allMediaCards.forEach(card => {
          if (e.currentTarget.dataset.type === 'all') {
            card.style.display = 'block'
            return
          }
          if (e.currentTarget.dataset.type === card.dataset.type) {
            card.style.display = 'block'
          } else card.style.display = 'none'
        })
      }
    });
  });
}