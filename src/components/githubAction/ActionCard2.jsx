import React from "react";
import illuAction from "../../assets/images/illu-actions-2-c5178134f381.png";

const ActionCard2 = () => {
  return (
    <div className="overflow-hidden w-1/2 mx:w-full rounded-right-3">
      <picture>
        <source
          srcSet={`${illuAction}?width=1306&amp;format=webpll 1306w,${illuAction}?width=1044&amp;format=webpll 1044w,${illuAction}?width=783&amp;format=webpll 783w,${illuAction}?width=653&amp;format=webpll 653w,${illuAction}?width=522&amp;format=webpll 522w,${illuAction}?width=261&amp;format=webpll 261w`}
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 653px"
          type="image/webp"
        />
        <source
          srcSet={`${illuAction} 1306w,${illuAction}?width=653 653w,${illuAction}?width=522 522w,${illuAction}?width=326 326w`}
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
          src={illuAction}
        />
      </picture>
    </div>
  );
};

export default ActionCard2;
