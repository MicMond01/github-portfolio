import React from 'react'

const SecretScanning = () => {
  return (
    <div className="flex w-1/2 mx:w-full col-6">
    <div className="mb-8 mx:mb-4 overflow-hidden rounded-lg">
      <div className="feature-card-mktg flex mx:block rounded-lg color-bg-subtle borderNew relative justify-between z-1 h-full flex-col">
        <div className="flex mx:block pr-32 py-16 pl-16 mx:p-8 flex-1 flex-col justify-start">
          <p className="f2-mktg font-medium color-fg-muted mb-6">
            <em className="text-white">GitHub Mobile</em> fits your projects
            in your pocket, so you never miss a beat while on the go.
          </p>

          <div>
            {" "}
            <div
              className="link-mktg font-semibold color-fg-default py-1 f3-mktg"
              href="#"
            >
              Download GitHub Mobile{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="octicon arrow-symbol-mktg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                ></path>
                <path
                  className="octicon-chevrow-stem"
                  stroke="currentColor"
                  d="M1.75 8H11"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-ee-lg rounded-bottom-3">
          <picture>
            <source
              srcSet={`${illuMobile}?width=1208&amp;format=webpll 1208w,${illuMobile}?width=966&amp;format=webpll 966w,${illuMobile}?width=724&amp;format=webpll 724w,${illuMobile}?width=604&amp;format=webpll 604w,${illuMobile}?width=483&amp;format=webpll 483w,${illuMobile}?width=241&amp;format=webpll 241w`}
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
              type="image/webp"
            />
            <source
              srcSet={`${illuMobile} 1208w,${illuMobile}?width=604 604w,${illuMobile}?width=483 483w,${illuMobile}?width=302 302w`}
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 604px"
              type="image/png"
            />
            <img
              className="w-full block h-auto js-build-in-item build-in-scale-fade build-in-animate"
              width="1208"
              height="764"
              loading="lazy"
              decoding="async"
              alt=""
              aria-hidden="true"
              src={illuMobile}
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SecretScanning