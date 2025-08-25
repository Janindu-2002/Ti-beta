import Link from "next/link";
import { Star, Phone, Globe, Mail } from "lucide-react";
import type { Business } from "../lib/types";

export function BusinessCard({ business }: { business: Business }){
  return (
    <div className="card p-5 flex items-start gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Link href={`/business/${business.id}`} className="text-lg font-semibold hover:underline">{business.name}</Link>
          {business.premium && (
            <span className="inline-flex items-center gap-1 rounded-full bg-bahama-gold/20 text-bahama-black text-xs px-2 py-0.5">
              <Star className="h-3 w-3" /> Featured
            </span>
          )}
        </div>
        <p className="text-neutral-600 line-clamp-2">{business.description}</p>
        <div className="mt-2 flex gap-2 flex-wrap">
          {business.categories.map(c => (
            <span key={c} className="text-xs rounded-full bg-neutral-100 px-2 py-1">{c}</span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-4 text-sm text-neutral-700">
          <span className="inline-flex items-center gap-1"><Phone className="h-4 w-4" /> <a href={`tel:${business.phone}`} className="underline">{business.phone}</a></span>
          {business.email && <span className="inline-flex items-center gap-1"><Mail className="h-4 w-4" /> <a href={`mailto:${business.email}`} className="underline">{business.email}</a></span>}
          {business.website && <span className="inline-flex items-center gap-1"><Globe className="h-4 w-4" /> <a href={business.website} target="_blank" className="underline">Website</a></span>}
        </div>
      </div>
    </div>
  )
}
