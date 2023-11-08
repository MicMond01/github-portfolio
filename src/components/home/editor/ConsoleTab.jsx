import React from "react";

const ConsoleTab = () => {
  return (
    <div className="p-6">
      <ul className="list-none flex mb-4">
        <li className="pr-4 text-white ">Terminal</li>
        <li className="pr-4 color-fg-muted">Output</li>
        <li className="pr-4 color-fg-muted">Problems</li>
        <li className="pr-4 color-fg-muted">Debug Console</li>
      </ul>
      <div
        className="overflow-hidden f5 font-mono color-fg-muted js-type-in-trigger build-in-animate"
        data-type-row-delay="50"
      >
        <div
          className="whitespace-nowrap  js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:36</span>]
          <span>Starting</span>'
          <span className="color-fg-accent">
            watch-extension:vscode-api-tests
          </span>
          ' ...
        </div>
        <div
          className="whitespace-nowrap js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:36</span>]
          <span>Finished</span>'
          <span className="color-fg-accent">
            clean-extension:typescript-language-features
          </span>
          ' after
          <span className="color-fg-done">248 ms</span>
        </div>
        <div
          className="whitespace-nowrap js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:36</span>]
          <span>Starting</span>'
          <span className="color-fg-accent">
            watch-extension:typescript-language-features
          </span>
          ' ...
        </div>
        <div
          className="whitespace-nowrap js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:36</span>]
          <span>Finished</span>'
          <span className="color-fg-accent">
            clean-extension:php-language-features
          </span>
          ' after
          <span className="color-fg-done">384 ms</span>
        </div>
        <div
          className="whitespace-nowrap js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:36</span>]
          <span>Starting</span>'
          <span className="color-fg-accent">
            watch-extension:php-language-features
          </span>
          ' ...
        </div>
        <div
          className="whitespace-nowrap js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:40</span>]
          <span>Finished</span>'
          <span className="color-fg-accent">
            clean-extension:html-language-features-server
          </span>
          ' after
          <span className="color-fg-done">4.66 s</span>
        </div>
        <div
          className="whitespace-nowrap js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:40</span>]
          <span>Starting</span>'
          <span className="color-fg-accent">
            watch-extension:html-language-features-server
          </span>
          ' ...
        </div>
        <div
          className="whitespace-nowrap js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:43</span>]
          <span>Finished</span>'
          <span className="color-fg-accent">clean-client</span>' after
          <span className="color-fg-done">7.33 s</span>
        </div>
        <div
          className="whitespace-nowrap js-type-row row-is-visible"
          //   style="visibility: visible;"
        >
          [<span className="color-fg-subtle">09:43:43</span>]
          <span>Starting</span>'
          <span className="color-fg-accent">watch-client</span>' ...
        </div>
      </div>
    </div>
  );
};

export default ConsoleTab;
