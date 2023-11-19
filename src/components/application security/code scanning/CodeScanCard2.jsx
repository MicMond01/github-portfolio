import React from "react";
import illuCodeScanning from "../../../assets/images/illu-code-scanning-fc9dfb212aa3.png";

const CodeScanCard2 = () => {
  return (
    <div className="overflow-hidden w-1/2 mx:w-full rounded-right-3">
      <picture>
        <source
          srcSet={`${illuCodeScanning}?width=1306&amp;format=webpll 1306w,${illuCodeScanning}?width=1044&amp;format=webpll 1044w,${illuCodeScanning}?width=783&amp;format=webpll 783w,${illuCodeScanning}?width=653&amp;format=webpll 653w,${illuCodeScanning}?width=522&amp;format=webpll 522w,${illuCodeScanning}?width=261&amp;format=webpll 261w`}
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 653px"
          type="image/webp"
        />
        <source
          srcSet={`${illuCodeScanning} 1306w,${illuCodeScanning}?width=653 653w,${illuCodeScanning}?width=522 522w,${illuCodeScanning}?width=326 326w`}
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 653px"
          type="image/png"
        />
        <img
          className="w-full block h-auto"
          width="1306"
          height="992"
          loading="lazy"
          decoding="async"
          alt=""
          aria-hidden="true"
          src={illuCodeScanning}
        />
      </picture>
    </div>
  );
};

export default CodeScanCard2;
