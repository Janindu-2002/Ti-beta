import { businesses } from "../../../lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function BusinessPage({ params }: { params: { id: string }}) {
  const biz = businesses.find(b => b.id === params.id);
  if(!biz) return notFound();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-4">
        <div className="card p-6">
          <h1 className="text-3xl font-bold">{biz.name}</h1>
          <p className="text-neutral-600">{biz.description}</p>
          <div className="flex gap-2 flex-wrap mt-3">
            {biz.categories.map(c => (
              <span key={c} className="text-xs rounded-full bg-neutral-100 px-2 py-1">{c}</span>
            ))}
          </div>
        </div>

        <div className="card p-6 space-y-2">
          <h2 className="font-semibold">Contact</h2>
          <p><strong>Phone:</strong> <a className="underline" href={`tel:${biz.phone}`}>{biz.phone}</a></p>
          {biz.email && <p><strong>Email:</strong> <a className="underline" href={`mailto:${biz.email}`}>{biz.email}</a></p>}
          {biz.website && <p><strong>Website:</strong> <a className="underline" href={biz.website} target="_blank">{biz.website}</a></p>}
          <p><strong>Address:</strong> {biz.address}, {biz.island}</p>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">More like this</h3>
          <div className="space-y-3">
            {businesses.filter(b=> b.id !== biz.id && b.categories.some(c=> biz.categories.includes(c))).slice(0,4).map(m=> (
              <Link key={m.id} href={`/business/${m.id}`} className="block rounded-xl border border-neutral-200 px-4 py-3 hover:shadow-soft">
                {m.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
