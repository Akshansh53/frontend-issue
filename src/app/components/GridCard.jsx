export default function GridCard({ img, name, location, className }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="
        absolute bottom-0 left-0 w-full
        px-4 pt-10 pb-4
        bg-gradient-to-t from-black/80 to-transparent
        text-white pointer-events-none
      ">
        <div className="text-lg font-bold drop-shadow">
          {name}
        </div>
        <div className="text-sm opacity-90">
          {location}
        </div>
      </div>
    </div>
  );
}
