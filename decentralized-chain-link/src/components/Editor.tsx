'use client'
import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import Image from 'next/image';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import reactImage from "../../public/react.png";
import closeImage from "../../public/close.png";

interface EditorProps {
    onHide: () => void; 
  }

const Editor: React.FC<EditorProps> = ({ onHide }) => {

    const [editorContent, setEditorContent] = useState('');
    const [message, setMessage] = useState("\nDefault text"); 
    const [activeButton, setActiveButton] = useState(0); 

    useEffect(() => {
        const textToType = message;
        
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
        if (currentIndex <= textToType.length) {
            setEditorContent(textToType.substring(0, currentIndex));
            currentIndex++;
        } else {
            clearInterval(typingInterval);
        }
        }, 100); 

        return () => {
        clearInterval(typingInterval);
        };
    }, [message]);

    const handleOptionClick = (newMessage: string, index: number) => {
        setMessage(newMessage);
        setActiveButton(index);
    };

    return (
        <div className="w-3/4 md:w-1/2 lg:w-2/3 xl:w-3/4" style={{ backgroundColor: "#181818" }}>
        <div className="flex justify-between">
            <div className="flex">
            <button 
            className="flex items-center px-6 py-2 text-white pr-8" 
            style={{ 
                backgroundColor: activeButton === 0 ? "#272822" : "#181818", 
                fontSize: "14px",
                borderTop: activeButton === 0 ? "2px solid #0078D4" : "none",
            }} 
            onClick={() => handleOptionClick("\nOption 1 Content", 0)}
            >
            <Image src={reactImage} alt="Folder" style={{ width: "15px", marginRight: 8 }} />
            <span className="ml-2">about-us.tsx</span>
            </button>
            <button 
            className="flex items-center px-6 py-2 text-white pr-8" 
            style={{ 
                backgroundColor: activeButton === 1 ? "#272822" : "#181818", 
                fontSize: "14px",
                borderTop: activeButton === 1 ? "2px solid #0078D4" : "none",
            }} 
            onClick={() => handleOptionClick("\nOption 2 Content", 1)}
            >
            <Image src={reactImage} alt="Folder" style={{ width: "15px", marginRight: 8 }} />
            <span className="ml-2">mission-and-vision.tsx</span>
            </button>
            <button 
            className="flex items-center px-6 py-2 text-white pr-8" 
            style={{ 
                backgroundColor: activeButton === 2 ? "#272822" : "#181818", 
                fontSize: "14px",
                borderTop: activeButton === 2 ? "2px solid #0078D4" : "none",
            }} 
            onClick={() => handleOptionClick("\nOption 3 Content", 2)}
            >
            <Image src={reactImage} alt="Folder" style={{ width: "15px", marginRight: 8 }} />
            <span className="ml-2">arekta-jekono-file.tsx</span>
            </button>
            </div>
            <div>
                <button 
                className="flex items-center px-6 py-2 text-white" 
                style={{ 
                    backgroundColor: "#181818", 
                }} 
                onClick={() => onHide()} 
                >
                <Image src={closeImage} alt="Folder" style={{ width: "20px", marginRight: 6 }} />
                </button>
            </div>
        </div>
        <div className="text-right">
            <AceEditor
            mode="html"
            theme="monokai"
            fontSize={14}
            width="100%" 
            height="500px" 
            value={editorContent}
            readOnly={true} 
            wrapEnabled={true} 
            showPrintMargin={false} 
            highlightActiveLine={false}
            style={{
                direction: "ltr", 
                overflowX: "hidden",
            }}
            />
        </div>
        </div>
    );
}

export default Editor
  