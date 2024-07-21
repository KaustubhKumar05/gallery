import "./App.css";

const files = [
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/10PRINT.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Sine%20Waves.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Metaballs.mp4",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Pulsing%20Circle.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/2d%20Raycasting.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/3D%20Perlin%20Terrain%20.mp4",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Atom.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Breathing%20Cuboids.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Cube%20Points.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Flow%20Field.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Network%20Particles.webm",
  "https://pub-11db8ea9885840f8aeaf8260c9cedd44.r2.dev/Sinusoidal%20Sphere.mp4",
];
function App() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {files.map((file) => (
        <div className="card" key={file}>
          <video autoPlay loop muted controls={false}>
            <source src={file} type={"video/" + file.split(".").pop()} />
          </video>
        </div>
      ))}
    </div>
  );
}

export default App;
