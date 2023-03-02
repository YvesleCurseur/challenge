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
          {/* <h3 className="myaccount-content"> Add  </h3> */}
          <div className="form-row">
            {/* <div className="form-group col-md-12">
              <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
              <input type="text" name="title" className="form-control" placeholder="Title" required />
            </div> */}
            <div className="clearfix"></div>
            <div className="form-group col-md-12 editor">
              <label className="font-weight-bold"> Description <span className="required"> * </span> </label>
            <EditorToolbar toolbarId={'t1'}/>
            <ReactQuill
              theme="snow"
              placeholder={"Write something awesome..."}
              modules={modules('t1')}
              formats={formats}
            />
            </div>
            <br />
            {/* <div className="form-group col-md-12 editor">
              <label className="font-weight-bold"> Additional Information  </label>
            <EditorToolbar toolbarId={'t2'}/>
            <ReactQuill
              theme="snow"
              // value={userInfo.information}
              // onChange={oninformation}
              placeholder={"Write something awesome..."}
              modules={modules('t2')}
              formats={formats}
            />
            </div> */}
            <br />
            <div className="form-group col-sm-12 text-right">
              <button type="submit" className="btn btn__theme"> Submit  </button>
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