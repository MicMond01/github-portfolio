// import React, { useState, useEffect, useRef } from "react";
// import { TweenLite, Power4 } from "gsap";

// const SmoothScroll = ({ children }) => {
//   const viewportRef = useRef(null);
//   const fakeRef = useRef(null);
//   const [height, setHeight] = useState(window.innerHeight);

//   const onScroll = () => {
//     TweenLite.to(viewportRef.current, 1, {
//       y: -window.pageYOffset,
//       ease: Power4.easeOut,
//     });
//   };

//   const handleResize = (entries) => {
//     for (let entry of entries) {
//       const { height } = entry.contentRect;
//       setHeight(height);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);

//     const ro = new ResizeObserver(handleResize);
//     ro.observe(viewportRef.current);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       ro.disconnect();
//     };
//   }, []); // Empty dependency array to run effect only once on mount

//   return (
//     <>
//       <div className="viewport" ref={viewportRef}>
//         {children}
//       </div>
//       <div
//         ref={fakeRef}
//         style={{
//           height,
//         }}
//       />
//     </>
//   );
// };

// export default SmoothScroll;
