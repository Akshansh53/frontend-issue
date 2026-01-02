function Card({ img, name, country, className }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl shadow-lg bg-gray-200
        ${className}
      `}
    >
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm opacity-80">{country}</p>
      </div>
    </div>
  );
}
