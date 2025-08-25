"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { SearchBar } from "../../components/SearchBar";
import { BusinessCard } from "../../components/BusinessCard";
import { businesses } from "../../lib/data";

export default function SearchPage() {
  const params = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();
  const island = (params.get("island") || "").toLowerCase();
  const category = (params.get("category") || "").toLowerCase();

  const results = useMemo(() => {
    const filtered = businesses.filter(b => {
      const matchesQ = q ? (b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q) || b.categories.some(c=>c.toLowerCase().includes(q))) : true;
      const matchesIsland = island ? b.island.toLowerCase() === island : true;
      const matchesCat = category ? b.categories.map(c=>c.toLowerCase()).includes(category) : true;
      return matchesQ && matchesIsland && matchesCat;
    });
    filtered.sort((a,b)=> (b.premium===true) - (a.premium===true) || a.name.localeCompare(b.name));
    return filtered;
  }, [q, island, category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-2xl font-semibold">Search</h1>
        <SearchBar placeholder="Try 'plumber', 'restaurant', or 'nassau'…" />
      </div>

      <div className="flex gap-3 flex-wrap text-sm">
        <a className="rounded-full border border-neutral-200 px-3 py-1" href={`/search?${q ? `q=${encodeURIComponent(q)}&`:""}island=nassau`}>Nassau</a>
        <a className="rounded-full border border-neutral-200 px-3 py-1" href={`/search?${q ? `q=${encodeURIComponent(q)}&`:""}island=freeport`}>Freeport</a>
        <a className="rounded-full border border-neutral-200 px-3 py-1" href={`/search?${q ? `q=${encodeURIComponent(q)}&`:""}island=eleuthera`}>Eleuthera</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map(b => <BusinessCard key={b.id} business={b} />)}
      </div>

      {results.length === 0 && (
        <div className="text-neutral-600">No results. Try another search term.</div>
      )}
    </div>
  );
}
