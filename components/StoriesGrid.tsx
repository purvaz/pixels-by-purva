import Image from "next/image";
import Link from "next/link";
import journalMetaData from "@/data/journalMetaData.json";

export default function StoriesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {journalMetaData.map((journal) => (
          <Link
          key={journal.slug}
          href={`/stories/${journal.slug}`}
          className="group grid grid-cols-[auto_1fr] gap-10 items-center"
        >
          {/* Image Stack */}
          <div className="relative w-[300px] h-[240px] shrink-0 flex items-center justify-center">
            {journal.images.filter(Boolean).slice(0, 3).map((img, i) => (
                <div
                key={img}
                className="absolute bg-white border border-gray-300 rounded-sm shadow-md p-2"
                style={{
                    top: `${i * 4}px`,
                    left: `${i * 4}px`,
                    zIndex: 10 - i,
                    width: "300px",
                    height: "240px",
                    transform: `rotate(${i === 0 ? -2 : i === 1 ? 1.5 : -1.5}deg)`
                }}
                >
                <div className="w-full h-full relative">
                    <Image
                    src={`/images/${img}`}
                    alt={journal.title}
                    fill
                    className="object-cover rounded"
                    />
                </div>
                </div>
            ))}
        </div>
        
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-serif text-gray-900 group-hover:underline">
              {journal.title}
            </h3>
            <p className="text-sm text-gray-500 italic mt-1">
              {new Date(journal.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="mt-3 text-base text-gray-700 leading-relaxed line-clamp-3">
              {journal.excerpt}
            </p>
          </div>
        </Link>
        
        ))}
      </div>
    </section>
  );
}
