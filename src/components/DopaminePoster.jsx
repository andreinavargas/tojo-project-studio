import poster from '../assets/poster.png';

export default function DopaminePoster() {
  return (
    <div className="overflow-hidden border-2 border-[#111111] bg-[#FFF3D6]">
      <img
        src={poster}
        alt="Dopamine mode poster"
        className="h-full w-full object-cover"
      />
    </div>
  );
}