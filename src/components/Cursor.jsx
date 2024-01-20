'use client';

import { useEffect, useRef } from 'react';

export default function Cursor({ location }) {
  const cursorEl = useRef();

  useEffect(() => {
    const touch = matchMedia('(hover: none), (pointer: coarse)').matches;

    if (touch) {
      cursorEl.current.style.opacity = 0;
    } else cursorEl.current.style.opacity = 1;

    if (!touch) {
      const cursor = cursorEl.current;
      const mouse = { x: -100, y: -100 };
      const pos = { x: 0, y: 0 };
      const speed = 0.15;

      const updateCoordinates = (e) => {
        mouse.x = e.clientX - cursor.offsetWidth / 2;
        mouse.y = e.clientY - cursor.offsetHeight / 2;
      };

      window.addEventListener('mousemove', updateCoordinates);

      const updatePosition = () => {
        pos.x += (mouse.x - pos.x) * speed;
        pos.y += (mouse.y - pos.y) * speed;
        cursor.style.transform = `translate3d(${pos.x}px ,${pos.y}px, 0)`;
      };

      /* eslint-disable */
      function loop() {
        updatePosition();
        requestAnimationFrame(loop);
      }
      /* eslint-enable */

      requestAnimationFrame(loop);

      // Case 1: no cursors
      const noCursor = document.querySelectorAll('.no-cursor');
      noCursor.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          cursor.style.opacity = 0;
        });
        element.addEventListener('mouseleave', () => {
          cursor.style.opacity = 1;
        });
        element.addEventListener('click', () => {
          cursor.style.opacity = 1;
        });
      });

      // Case 1: change cursors
      const pointerCursor = document.querySelectorAll(
        '[data-cursor="pointer"]',
      );
      pointerCursor.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('pointer');
        });
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('pointer');
        });
      });
    }
  }, [location]);

  return (
    <div ref={cursorEl} id="cursor">
      <div className="cursor-inner" />
    </div>
  );
}
