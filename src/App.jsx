import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EvoluteImage from './ImageToText/EvoluteImage';
import HomePost from './PostWithQuill/HomePost';
import NewPost from './PostWithQuill/NewPost';
import './App.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/image-to-text" element={<EvoluteImage />} />
        <Route path="/post-with-quill" element={<HomePost />} />
        <Route path="/post-with-quill/add" element={<NewPost />}/>
      </Routes>
    </div>
  );
}
export default App;