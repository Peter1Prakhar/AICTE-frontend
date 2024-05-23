import React, { useState } from 'react';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Attachments = () => {
  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];

    // File size restriction (in bytes)
    const maxSize = 5 * 1024 * 1024; // 5 MB

    // Allowed file formats
    const allowedFormats = ['application/pdf'];

    if (file && file.size <= maxSize && allowedFormats.includes(file.type)) {
      // Rename the file
      const renamedFileName = 'landDocument.pdf';

      uploadFiles(file, renamedFileName);
    } else {
      alert('Invalid file. Please ensure the file is a PDF and does not exceed 5 MB.');
    }
  };

  const uploadFiles = (file, fileName) => {
    const storageRef = ref(storage, `/files/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_change',
      (snapshot) => {
        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 shadow-md rounded-md" onSubmit={formHandler}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileInput">
          Choose a PDF file:
        </label>
        <input
          id="fileInput"
          type="file"
          className="border rounded-md py-2 px-3 w-full"
          accept=".pdf"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600"
        >
          Upload
        </button>
        <h2 className="text-lg mt-4">Uploading {progress} %</h2>
      </form>
    </div>
  );
};

export default Attachments;
