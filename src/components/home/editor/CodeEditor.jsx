import React from "react";
import EditorNavInput from "./EditorNavInput";
import EditorTab from "./EditorTab";

const CodeEditor = () => {
  return (
    <div className="rounded-lg w-full bg-[#161b22] border-l border-solid border-[#30363d] overflow-hidden relative ">
      <div className="editor-nav flex w-full items-center justify-between border-b border-solid border-[#30363d] p-4">
        <div className="editor-angles block mx:hidden ">
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-chevron-left color-fg-muted"
          >
            <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
          </svg>
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-chevron-right color-fg-muted"
          >
            <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
          </svg>
        </div>
        <div className="editor-search mx:w-full  ">
          <EditorNavInput />
        </div>
        <div className="editor-plus mx:hidden block">
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-plus color-fg-muted"
          >
            <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
          </svg>
        </div>
      </div>

      <div className="editor-container flex items-stretch  ">
        <div className="editor-sidebar border-r border-[#30363d] p-6  mx:hidden block">
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 16 16"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-three-bars fill-[#7d8590]"
          >
            <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
          </svg>
        </div>
        <div className="editor-editor">
          <ul class="editor-editor-nav list-none flex px-4 pt-4">
            <li class="px-4 py-2 bg-[#0d1117] rounded-[6px 6px 0 0] rounded-t-md rounded-tr-md text-white">
              index.html
            </li>
            <li class="px-4 py-2 color-fg-muted">script.js</li>
            <li class="px-4 py-2 color-fg-muted">package.json</li>
          </ul>
          <div className="editor-editor-input">
            <EditorTab />
          </div>
        </div>
        <div className="editor-display"></div>
      </div>
    </div>
  );
};

export default CodeEditor;
