export function generateLines() {
  const lineParent = document.querySelector('.hero-graphic');
  const lineWrap = document.querySelector('.hero-graphic-content');
  const lineWidth = 3;
  const lineHeight = 18;
  const lineGap = 40;
  const wrapDim = lineParent.getBoundingClientRect();
  const colNum = Math.floor(wrapDim.width / (lineWidth + lineGap));
  const rowNum = Math.ceil(wrapDim.height / (lineHeight + lineGap));
  // const lineNumber = 192;
  for (let i = 0; i < colNum * rowNum; i += 1) {
    const divs = document.createElement('div');
    divs.classList.add('needle');
    lineWrap.appendChild(divs);
  }
}

export function directionTowardsElem() {
  const box = document.querySelector('.hero-graphic');
  const needles = document.querySelectorAll('.needle');
  const followElem = document.querySelector('.follow-elem');
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
    } else {
      followElem.style.display = 'block'; // Show .follow-elem on touch devices
      updateFollowElem();
    }
  }

  function removeEventListeners() {
    if (!isTouchDevice) {
      box.removeEventListener('mousemove', handleMouseMove);
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
    updateFollowElem();
  } else {
    followElem.style.display = 'none'; // Hide .follow-elem initially on non-touch devices
  }
}

// export function directionTowardsElem() {
//   const box = document.querySelector('.hero-graphic');
//   const needles = document.querySelectorAll('.needle');
//   const boxDimentions = box.getBoundingClientRect();

//   function updateMouseCoordinates(me) {
//     const mouseX = me.clientX - boxDimentions.x;
//     const mouseY = me.clientY - boxDimentions.y;

//     needles.forEach((needle) => {
//       const needleRect = needle.getBoundingClientRect();
//       const needleCenterX =
//         needleRect.x + needleRect.width / 2 - boxDimentions.x;
//       const needleCenterY =
//         needleRect.y + needleRect.height / 2 - boxDimentions.y;

//       const angle =
//         (Math.atan2(mouseY - needleCenterY, mouseX - needleCenterX) / Math.PI) *
//           180 +
//         90;
//       needle.style.transform = `rotate(${angle}deg)`;
//     });
//   }

//   function handleMouseEnter() {
//     box.addEventListener('mousemove', updateMouseCoordinates);
//   }

//   function handleMouseLeave() {
//     box.removeEventListener('mousemove', updateMouseCoordinates);
//   }

//   box.addEventListener('mouseenter', handleMouseEnter);
//   box.addEventListener('mouseleave', handleMouseLeave);
// }

// export function directionTowardsElem() {
//   const box = document.querySelector('.hero-graphic');
//   // const followElem = document.querySelector('.follow-elem');
//   const needles = document.querySelectorAll('.needle');
//   const boxDimentions = box.getBoundingClientRect();
//   // const followDimentions = followElem.getBoundingClientRect();
//   // const relativePositionX =
//   //   followDimentions.x - boxDimentions.x + followDimentions.width / 2;
//   // const relativePositionY =
//   //   followDimentions.y - boxDimentions.y + followDimentions.height / 2;
//   const mouse = { x: -100, y: -100 };
//   const pos = { x: 0, y: 0 };
//   const speed = 0.15;
//   let wait = false;

//   // needles.forEach((e) => {
//   //   const eRectData = e.getBoundingClientRect();
//   //   const ex = eRectData.x + eRectData.width / 2 - boxDimentions.x;
//   //   const ey = eRectData.y + eRectData.height / 2 - boxDimentions.y;
//   //   const x = ex - relativePositionX;
//   //   const y = ey - relativePositionY;
//   //   e.style.transform = `rotate(${(Math.atan2(y, x) / Math.PI) * 180 - 90}deg)`;
//   // });

//   // box.addEventListener('mousemove', (me) => {
//   //   needles.forEach((e) => {
//   //     const eRectData = e.getBoundingClientRect();
//   //     const ex = eRectData.x + eRectData.width / 2 - boxDimentions.x;
//   //     const ey = eRectData.y + eRectData.height / 2 - boxDimentions.y;
//   //     const x = ex - me.offsetX;
//   //     const y = ey - me.offsetY;
//   //     e.style.transform = `rotate(${
//   //       (Math.atan2(y, x) / Math.PI) * 180 - 90
//   //     }deg)`;
//   //   });
//   // });

//   needles.forEach((e) => {
//     function updateCoordinates(me) {
//       const eRectData = e.getBoundingClientRect();
//       const ex = eRectData.x + eRectData.width / 2 - boxDimentions.x;
//       const ey = eRectData.y + eRectData.height / 2 - boxDimentions.y;
//       mouse.x = me.offsetX - ex;
//       mouse.y = me.offsetY - ey;
//       if (!wait) {
//         wait = true;
//         setTimeout(() => {
//           wait = false;
//         }, 500);
//         // console.log(mouse);
//       }
//       e.style.transform = `rotate(${
//         (Math.atan2(mouse.y, mouse.x) / Math.PI) * 180 + 90
//       }deg)`;
//     }

//     box.addEventListener('mousemove', updateCoordinates);

//     // function updatePosition() {
//     //   pos.x += (mouse.x - pos.x) * speed;
//     //   pos.y += (mouse.y - pos.y) * speed;
//     //   e.style.transform = `rotate(${
//     //     (Math.atan2(pos.y, pos.x) / Math.PI) * 180 - 90
//     //   }deg)`;
//     // }
//     // function loop() {
//     //   updatePosition();
//     //   requestAnimationFrame(loop);
//     // }
//     // requestAnimationFrame(loop);
//   });

//   // function stickFollowElem(me) {
//   //   pos.x = me.offsetX - relativePositionX;
//   //   pos.y = me.offsetY - relativePositionX;
//   //   followElem.style.top = `${pos.y}px`;
//   //   followElem.style.left = `${pos.x}px`;
//   // }
//   // box.addEventListener('mousemove', stickFollowElem);

//   // needles.forEach((e) => {
//   //   const updateCoordinates = (me) => {
//   //     const eRectData = e.getBoundingClientRect();
//   //     const ex = eRectData.x + eRectData.width / 2 - boxDimentions.x;
//   //     const ey = eRectData.y + eRectData.height / 2 - boxDimentions.y;
//   //     mouse.x = ex - me.offsetX;
//   //     mouse.y = ey - me.offsetY;
//   //     console.log(mouse);
//   //   };
//   //   box.addEventListener('mousemove', updateCoordinates);

//   //   const updatePosition = () => {
//   //     e.style.transform = `rotate(${
//   //       (Math.atan2(mouse.y, mouse.x) / Math.PI) * 180 - 90
//   //     }deg)`;
//   //   };
//   //   /* eslint-disable */
//   //   function loop() {
//   //     updatePosition();
//   //     requestAnimationFrame(loop);
//   //   }
//   //   /* eslint-enable */
//   //   requestAnimationFrame(loop);
//   // });
// }
