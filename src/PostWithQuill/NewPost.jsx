import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

function NewPost() {

return ( 
<>

  <div className="App">
    <div className="container">
      <div className="row"> 
        <form className="update__forms">
          <div className="form-row">
            <div className="clearfix"></div>
            <div className="form-group col-md-12 editor">
              <label className="font-weight-bold"> Quill Text Editor Update <span className="required"> * </span> </label>
            <EditorToolbar 
              toolbarId={'t1'}
              className="w-1/2"
            />
            <ReactQuill
              theme="snow"
              placeholder={"Write something awesome..."}
              modules={modules('t1')}
              formats={formats}
              className="w-1/2"
            />
            <div class="container">
  <div class="panel">
    <div id="snow-container"></div>
    <div>
      <button id="insert-table">Insert Table</button>
    </div>
  </div>
  <div class="panel">
    <div id="bubble-container"></div>
  </div>
  <div class="panel">
    <div id="output-container"></div>
  </div>
</div>

            </div>
          </div> 
        </form>
      </div>
    </div>
  </div>
</>
)
}
export default NewPost