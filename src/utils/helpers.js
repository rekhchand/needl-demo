// Scroll navigation
export function scrollNav() {
  const docElement = document.documentElement;
  let didScroll = false;
  const navbar = document.querySelector('.navbar');

  function scrollPage() {
    const yaxis = window.pageYOffset || docElement.scrollTop;
    if (yaxis >= 10) {
      // 1px offset
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    didScroll = false;
  }

  window.addEventListener('scroll', () => {
    if (!didScroll) {
      didScroll = true;
      setTimeout(scrollPage, 50);
    }
  });
}

// Generate needles
export function generateLines(lineParent, lineWrap) {
  const lineWidth = 16;
  const lineHeight = 16;
  const lineGap = 24;

  const wrapDim = lineParent.getBoundingClientRect();
  const colNum = Math.floor(wrapDim.width / (lineWidth + lineGap));
  const rowNum = Math.ceil(wrapDim.height / (lineHeight + lineGap));

  const createLine = () => {
    const needleContain = document.createElement('div');
    const needle = document.createElement('div');
    needleContain.classList.add('needle-contain');
    needle.classList.add('needle');
    needleContain.appendChild(needle);
    return needleContain;
  };

  for (let i = 0; i < colNum * rowNum; i += 1) {
    lineWrap.appendChild(createLine());
  }
}

// Turn needles towards mouse/follow-elem
export function directionTowardsElem(box) {
  const needles = box.querySelectorAll('.needle');
  const followElem = box.querySelector('.follow-elem');
  const boxDimentions = box.getBoundingClientRect();
  const isTouchDevice =
    'ontouchstart' in window || navigator.msMaxTouchPoints > 0;

  function updateCoordinates(mouseX, mouseY) {
    needles.forEach((needle) => {
      const needleRect = needle.getBoundingClientRect();
      const needleCenterX =
        needleRect.x + needleRect.width / 2 - boxDimentions.x;
      const needleCenterY =
        needleRect.y + needleRect.height / 2 - boxDimentions.y;

      const angle =
        (Math.atan2(mouseY - needleCenterY, mouseX - needleCenterX) / Math.PI) *
          180 +
        90;
      needle.style.transform = `rotate(${angle}deg)`;
    });
  }

  function updateFollowElem() {
    const followElemRect = followElem.getBoundingClientRect();
    const followElemCenterX =
      followElemRect.x + followElemRect.width / 2 - boxDimentions.x;
    const followElemCenterY =
      followElemRect.y + followElemRect.height / 2 - boxDimentions.y;

    needles.forEach((needle) => {
      const needleRect = needle.getBoundingClientRect();
      const needleCenterX =
        needleRect.x + needleRect.width / 2 - boxDimentions.x;
      const needleCenterY =
        needleRect.y + needleRect.height / 2 - boxDimentions.y;

      const angle =
        (Math.atan2(
          followElemCenterY - needleCenterY,
          followElemCenterX - needleCenterX,
        ) /
          Math.PI) *
          180 +
        90;
      needle.style.transform = `rotate(${angle}deg)`;
    });

    requestAnimationFrame(updateFollowElem);
  }

  function handleMouseMove(me) {
    const mouseX = me.clientX - boxDimentions.x;
    const mouseY = me.clientY - boxDimentions.y;

    if (!isTouchDevice) {
      updateCoordinates(mouseX, mouseY);
    }
  }

  function addEventListeners() {
    if (!isTouchDevice) {
      box.addEventListener('mousemove', handleMouseMove);
      needles.forEach((needle) => (needle.style.height = '16px'));
    } else {
      followElem.style.display = 'block'; // Show .follow-elem on touch devices
      updateFollowElem();
    }
  }

  function removeEventListeners() {
    if (!isTouchDevice) {
      box.removeEventListener('mousemove', handleMouseMove);
      needles.forEach((needle) => (needle.style.height = '2px'));
    } else {
      followElem.style.display = 'none'; // Hide .follow-elem on touch devices
    }
  }

  function handleMouseEnter() {
    addEventListeners();
  }

  function handleMouseLeave() {
    removeEventListeners();
  }

  box.addEventListener('mouseenter', handleMouseEnter);
  box.addEventListener('mouseleave', handleMouseLeave);

  if (isTouchDevice) {
    followElem.style.display = 'block'; // Show .follow-elem initially on touch devices
    needles.forEach((needle) => (needle.style.height = '16px'));
    updateFollowElem();
  } else {
    followElem.style.display = 'none'; // Hide .follow-elem initially on non-touch devices
  }
}
