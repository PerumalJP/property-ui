import { PropertyCard } from "@/app/components/PropertyCard";
import { neighborhoods, properties } from "@/app/data/properties";

const quickFilters = ["All", "Villa", "Apartment", "Townhouse", "Commercial"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.22),_transparent_35%),linear-gradient(135deg,#f8fafc_0%,#eef4ff_50%,#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8">
          <header className="flex items-center justify-between gap-6 pb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white shadow-lg shadow-slate-900/20">
                H
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Harbor & Home
                </p>
                <p className="text-sm text-slate-700">Luxury property advisors</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <a href="#buy" className="transition hover:text-slate-950">Buy</a>
              <a href="#sell" className="transition hover:text-slate-950">Sell</a>
              <a href="#rent" className="transition hover:text-slate-950">Rent</a>
              <a href="#about" className="transition hover:text-slate-950">About</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="/contact"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
              >
                Contact
              </a>
              <button className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800">
                Book a tour
              </button>
            </div>
          </header>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-700">
                <span className="h-2 w-2 rounded-full bg-sky-500"></span>
                3,200+ homes sold this year
              </div>

              <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
                Discover the place that feels like home.
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
                From city penthouses to coastal sanctuaries, find refined spaces curated for the way you live.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:bg-slate-800">
                  Browse listings
                </button>
                <button className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-950">
                  Talk to an agent
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 rounded-[28px] border border-slate-200 bg-white/80 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
                <div>
                  <p className="text-3xl font-bold text-slate-900">12k+</p>
                  <p className="mt-1 text-sm text-slate-600">properties</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">98%</p>
                  <p className="mt-1 text-sm text-slate-600">client satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">24/7</p>
                  <p className="mt-1 text-sm text-slate-600">support</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-amber-200 blur-3xl"></div>
              <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-sky-200 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury real estate exterior"
                  className="h-[520px] w-full rounded-[28px] object-cover"
                />
                <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Featured home</p>
                      <h2 className="mt-1 text-xl font-bold text-slate-900">Bel Air Residence</h2>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      For sale
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
                    <span>4 Beds</span>
                    <span>3 Baths</span>
                    <span>$2.4M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Find your match</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Search properties</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {quickFilters.map((filter, index) => (
                <button
                  key={filter}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    index === 0
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Location</label>
              <p className="mt-2 text-base font-semibold text-slate-900">Los Angeles</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Price</label>
              <p className="mt-2 text-base font-semibold text-slate-900">$500k - $2M</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Property type</label>
              <p className="mt-2 text-base font-semibold text-slate-900">Any</p>
            </div>
            <button className="rounded-2xl bg-sky-500 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600">
              Search homes
            </button>
          </div>
        </div>
      </section>

      <section id="buy" className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Curated picks</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Featured listings</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">
            View all listings →
          </a>
        </div>

        <div className="grid gap-7 lg:grid-cols-2 xl:grid-cols-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.14)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">Why choose us</p>
            <h2 className="mt-4 text-3xl font-bold">Real estate guidance built around your goals.</h2>
            <p className="mt-4 text-slate-300">
              We combine data, local expertise, and design-led strategy to help you buy, sell, and invest with confidence.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Tailored neighborhood intelligence",
                "Expert negotiation and market insights",
                "Seamless end-to-end buying experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">
                    ✓
                  </span>
                  <span className="font-medium text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { value: "18 yrs", label: "market experience" },
              { value: "$300M+", label: "transactions closed" },
              { value: "180+", label: "happy homeowners" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.04)]">
                <p className="text-4xl font-black text-slate-900">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Explore neighborhoods</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Find your ideal lifestyle</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {neighborhoods.map((neighborhood) => (
            <article key={neighborhood.name} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition hover:-translate-y-1">
              <div className="overflow-hidden">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">{neighborhood.subtitle}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{neighborhood.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Thoughtful homes, walkable streets, and a vibrant local culture designed for everyday living.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="rounded-[32px] bg-[linear-gradient(135deg,#0f172a,#111827,#1e293b)] px-8 py-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.22)] md:px-10 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">Need a personalized plan?</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let’s find the right property for your next chapter.</h2>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Schedule a consult
            </button>
            <a
              href="/contact"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
