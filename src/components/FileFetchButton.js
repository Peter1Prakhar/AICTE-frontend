// FileFetchButton.js
import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { list, ref, getDownloadURL } from 'firebase/storage';

const FileFetchButton = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        // Specify the folder (e.g., "uploads")
        const folderRef = ref(storage, 'templates');

        // List all files under the specified folder
        const filesList = await list(folderRef);

        // Fetch download URLs for each file
        const filesArray = await Promise.all(
          filesList.items.map(async (fileRef) => {
            const downloadURL = await getDownloadURL(fileRef);
            return { name: fileRef.name, downloadURL };
          })
        );

        setFiles(filesArray);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
<div className="bg-white p-4 shadow-md rounded-md">
  <h2 className="text-xl font-semibold mb-4">Fetched Files from "templates" folder:</h2>
  <ul>
    {files.map((file) => (
      <li key={file.name} className="mb-2">
        <a
          href={file.downloadURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {file.name}
        </a>
      </li>
    ))}
  </ul>
</div>

  );
};

export default FileFetchButton;
