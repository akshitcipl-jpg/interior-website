export default function Gallery() {
  return (
    <div className="p-10 grid md:grid-cols-3 gap-6">
      <img src="https://source.unsplash.com/400x300/?interior" className="rounded-xl hover:scale-105 transition" />
      <img src="https://source.unsplash.com/401x300/?room" className="rounded-xl hover:scale-105 transition" />
      <img src="https://source.unsplash.com/402x300/?kitchen" className="rounded-xl hover:scale-105 transition" />
    </div>
  );
}