'use client'
import Image from 'next/image';
import React, { useState } from "react";
import folderImage from "../../public/folder.png";
import Editor from '@/components/Editor';

export default function Home() {
  
  const [editorVisible, setEditorVisible] = useState(false);

  const toggleEditorVisibility = () => {
    setEditorVisible(!editorVisible);
  };

  const hideEditor = () => {
    setEditorVisible(false); 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {!editorVisible && (
        <div className="text-center">
          <div className="mb-2" style={{ width: "100px", margin: "0 auto" }}> 
            <Image src={folderImage} alt="Folder" onClick={toggleEditorVisibility} />
          </div>
          <p className='mt-4' onClick={toggleEditorVisibility}>Decentralized Chain Link</p>
        </div>
      )}
      {editorVisible && <Editor onHide={hideEditor} />}
    </div>
  );
}