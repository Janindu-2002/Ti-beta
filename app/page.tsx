import Link from "next/link";
import { SearchBar } from "../components/SearchBar";
import { Star } from "lucide-react";

export default function Page() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find trusted local businesses across the Bahamas
        </h1>
        <p className="text-neutral-600 text-lg">
          Tingum is a clean, modern directory to discover and contact local services. 
          Premium businesses are highlighted and appear first in search.
        </p>
        <SearchBar autoFocus />
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <Star className="h-4 w-4" /><span>Promoted listings appear first in results</span>
        </div>
      </div>
      <div className="card p-6">
        <div className="rounded-xl bg-gradient-to-br from-bahama-aqua/20 to-bahama-gold/20 p-6">
          <h3 className="font-semibold mb-2">Quick categories</h3>
          <div className="grid grid-cols-2 gap-3">
            {["Restaurants","Plumbers","Electricians","Real Estate","Clinics","Auto Repair"].map((c)=>(
              <Link key={c} href={`/search?q=${encodeURIComponent(c)}`} className="rounded-xl border border-neutral-200 bg-white px-4 py-3 hover:shadow-soft">
                {c}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
