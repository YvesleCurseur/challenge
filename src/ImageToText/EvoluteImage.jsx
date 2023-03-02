import React, { useState, useEffect } from "react";
import { createWorker }  from 'tesseract.js'

const EvoluteImage = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
  
    const allowedTypes = [
      "image/jpeg", 
      "image/png", 
      "application/pdf", 
      "application/msword", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
  
    const filteredFiles = selectedFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );
  
    const invalidFiles = selectedFiles.filter((file) =>
      !allowedTypes.includes(file.type)
    );
  
    if (invalidFiles.length > 0) {
      setError("Le fichier doit être de type JPEG, PNG, GIF, PDF, DOC ou TXT");
      return;
    }
  
    const newFiles = [...files, ...filteredFiles];
  
    setFiles(newFiles);
    setError("");
  };  
  
  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  useEffect(() => {
    const handleUnload = (e) => {
      if (files.length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [files]);

  const [textResult, setTextResult] = useState('')

    const getTextFromImage = async () => {
    const imagesContainer = document.getElementById('imagePrint');
    const worker = await createWorker()
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')

    const { data: { text } } = await worker.recognize(imagesContainer.src);
    console.log(text)

    setTextResult(text)
    
    }
    

    useEffect(() =>{
      getTextFromImage()
    }, [files])

  return (


    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image to text</h1>

      <div className="mb-4">
        <label
          htmlFor="inputImage"
          className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
        >
          {files.length > 0 ? "Ajouter d'autres images" : "Ajouter une image"}
        </label>
        <input
          type="file"
          id="inputImage"
          accept="image/jpeg, image/png, image/gif, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {textResult}

      {error && (
        <div className="bg-red-500 text-white px-4 py-2 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="flex flex-wrap -mx-2">
        {files.map((file, index) => (
          <div key={index} className="relative w-32 h-32 mx-2 my-2 mb-5">
            {file.type.startsWith("image/") ? (
              <div>
                <img 
                  id="imagePrint"
                  src={URL.createObjectURL(file)} 
                  alt="Image preview" 
                  className="w-32 h-32 object-cover rounded-md images-container" 
                />
                <p className="text-sm truncate">{file.name}</p>
              </div>
            ) : file.type === "application/pdf" ? (
              <div>
                <div 
                  className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center"
                >
                  <span className="text-4xl text-gray-400">
                    <i className="far fa-file-pdf"></i>
                  </span>
                </div>
                <p className="text-sm truncate">{file.name}</p>
              </div>
            ) : file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
              <div>
                <div 
                  className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center"
                >
                  <span className="text-4xl text-gray-400">
                    <i className="far fa-file-word"></i>
                  </span>
                </div>
                <p className="text-sm truncate">{file.name}</p>
              </div>
            ) : file.type === "application/msword" ? (
              <div>
                <div 
                  className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center"
                >
                  <span className="text-4xl text-gray-400">
                    <i className="far fa-file-word"></i>
                  </span>
                </div>
                <p className="text-sm truncate">{file.name}</p>
              </div>
            ) : (
              null
            )}
      <div
        className="absolute top-0 right-0 cursor-pointer text-red-500"
        onClick={() => handleRemoveFile(index)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        </div>
        </div>
        ))}
      </div>
  </div>
  );
};

export default EvoluteImage;