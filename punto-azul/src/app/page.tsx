
// Renders your existing HTML site (which we’ll move into /public/legacy).
export default function Home() {
  return (
    <main style={{ height: "100dvh" }}>
      <iframe
        src="/legacy/index.html"
        title="Punto Azul Legacy"
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
    </main>
  );
}
