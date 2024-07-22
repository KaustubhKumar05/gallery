import { useState } from "react";
import { sketches } from "./constants";
import "./App.css";

function App() {
  const [files, setFiles] = useState(sketches);

  const handleDrop = (e, id) => {
    e.preventDefault();
    const draggedId = parseInt(e.dataTransfer.getData("text"));

    if (draggedId !== id) {
      const newFiles = [...files];
      const draggedIndex = newFiles.findIndex((file) => file.id === draggedId);
      const targetIndex = newFiles.findIndex((file) => file.id === id);

      [newFiles[draggedIndex], newFiles[targetIndex]] = [
        newFiles[targetIndex],
        newFiles[draggedIndex],
      ];

      setFiles(newFiles);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {files.map((file) => (
        <div
          className="card"
          key={file.link}
          onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", file.id);
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, file.id)}
          draggable
        >
          <video
            draggable={false}
            autoPlay
            loop
            muted
            controls={false}
            onMouseEnter={(e) => e.target.pause()}
            onMouseLeave={(e) => e.target.play()}
          >
            <source
              src={file.link}
              type={"video/" + file.link.split(".").pop()}
            />
          </video>
          <p>{file.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
