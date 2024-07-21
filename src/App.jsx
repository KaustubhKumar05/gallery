import "./App.css";

const files = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
function App() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        gap: "8px",
        justifyContent: "center",
      }}
    >
      {files.map((file) => (
        <div className="card" key={file}>
          {file}
        </div>
      ))}
    </div>
  );
}

export default App;
