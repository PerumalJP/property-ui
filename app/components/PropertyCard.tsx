type PropertyCardProps = {
  property: {
    title: string;
    price: string;
    location: string;
    details: string;
    beds: number;
    baths: number;
    area: string;
    type: string;
    status: string;
    image: string;
  };
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
      <div className="relative h-72 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 backdrop-blur-sm">
          {property.status}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          {property.type}
        </span>
      </div>

      <div className="space-y-5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-2xl font-semibold text-slate-900">{property.price}</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-800">{property.title}</h3>
          </div>
          <button className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-950">
            Save
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>📍</span>
          <span>{property.location}</span>
        </div>

        <p className="text-sm leading-6 text-slate-600">{property.details}</p>

        <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-sm text-slate-600">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
          <span>{property.area}</span>
        </div>
      </div>
    </article>
  );
}
