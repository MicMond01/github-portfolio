import React from "react";
import "./editor.css";

const EditorTab = () => {
  return (
    <div className="color-bg-default p-6 text-base font-mono border-b border-solid border-[#30363d]">
      <div class="flex ">
        <div class="color-fg-subtle text-right select-none">
          <div class="pr-2">1</div>
          <div class="pr-2">2</div>
          <div class="pr-2">3</div>
          <div class="pr-2">4</div>
          <div class="pr-2">5</div>
          <div class="pr-2">6</div>
          <div class="pr-2">7</div>
          <div class="pr-2">8</div>
          <div class="pr-2">9</div>
          <div class="pr-2">10</div>
          <div class="pr-2">11</div>
          <div class="pr-2">12</div>
        </div>

        <div class="flex-1 overflow-x-auto" tabind ex="0">
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;<span class="pl-ent">div</span>
              <span class="pl-e">class</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>position-absolute width-full
                color-bg-default<span class="pl-pds">"</span>
              </span>
              <span class="pl-e">style</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>
                <span class="pl-s1">
                  <span class="pl-c1">
                    <span class="pl-c1">bottom</span>
                  </span>
                  :
                  <span class="pl-c1">
                    -4<span class="pl-k">rem</span>
                  </span>
                  ;
                </span>
                <span class="pl-pds">"</span>
              </span>
              &gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;<span class="pl-ent">div</span>
              <span class="pl-e">class</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>container-xl p-responsive
                <span class="pl-pds">"</span>
              </span>
              &gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;<span class="pl-ent">div</span>
              <span class="pl-e">class</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>d-flex flex-justify-center
                flex-lg-justify-end color-bg-default
                <span class="pl-pds">"</span>
              </span>
              &gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;<span class="pl-ent">div</span>
              <span class="pl-e">class</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>col-8 col-sm-7 col-md-6 col-lg-5
                position-relative z-2 right-lg-n12 events-none
                <span class="pl-pds">"</span>
              </span>
              &gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;<span class="pl-ent">picture</span>&gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;<span class="pl-ent">source</span>
              <span class="pl-e">srcset</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>astro-mona.webp
                <span class="pl-pds">"</span>
              </span>
              <span class="pl-e">type</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>image/webp
                <span class="pl-pds">"</span>
              </span>
              &gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;<span class="pl-ent">img</span> <span class="pl-e">src</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>astro-mona.svg
                <span class="pl-pds">"</span>
              </span>
              <span class="pl-e">width</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>960<span class="pl-pds">"</span>
              </span>
              <span class="pl-e">height</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>967<span class="pl-pds">"</span>
              </span>
              <span class="pl-e">class</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>home-astro-mona width-full
                position-absolute bottom-0 height-auto
                <span class="pl-pds">"</span>
              </span>
              <span class="pl-e">alt</span>=
              <span class="pl-s">
                <span class="pl-pds">"</span>Mona looking at GitHub activity
                across the globe<span class="pl-pds">"</span>
              </span>
              &gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;/<span class="pl-ent">picture</span>&gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;/<span class="pl-ent">div</span>&gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;/<span class="pl-ent">div</span>&gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;/<span class="pl-ent">div</span>&gt;
            </span>
          </pre>
          <pre class="text-base">
            <span class="code-editor-line-mktg inline-block js-type-letters text-white">
              &lt;/<span class="pl-ent">div</span>&gt;
            </span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default EditorTab;
