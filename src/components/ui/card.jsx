export function Card({ icon, alt, title, desc }) {
  return (
    <div className="min-w-0 overflow-hidden border border-[#cfd6e8] rounded-lg p-6 cursor-pointer duration-1000 hover:border-[#125ced]">
      <div className="mb-2">
        {icon} {alt}
      </div>
      <h3 className="text-2xl mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export function Card2({ img, alt, title, desc }) {
  return (
    <div className="min-w-0 overflow-hidden cursor-pointer duration-1000 hover:text-[#125ced]">
      <div className="w-full object-cover object-center aspect-16/10 block overflow-hidden rounded-lg mb-2">
        {img}
        {alt}
      </div>
      <h3 className="text-xl mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
