import Image from "next/image";
import Link from "next/link";

export default function Card({
  href,
  image,
  category,
  title,
  description,
  imageAlt,
}) {
  return (
    <article className="h-full rounded-[16px] border border-[#E6EAF2] bg-white overflow-hidden shadow-[0_2px_12px_rgba(15,23,42,0.06)] flex flex-col">
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          unoptimized={true}
        />
      </div>

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[11px] font-[700] uppercase tracking-[1.2px] text-[#4F6EF7]">
          {category}
        </p>
        <h3 className="mt-[10px] text-[18px] font-[600] leading-[1.3] text-[#1F2937]">
          {title}
        </h3>
        <p className="mt-[10px] text-[14px] font-[400] leading-[1.6] text-[#6B7280] flex-1">
          {description}
        </p>

        <div className="mt-[20px] flex items-center justify-between">
          <Link
            href={href}
            className="text-[14px] font-[600] leading-[1] text-[#4F6EF7] hover:underline"
          >
            Learn More
          </Link>
          <Link href={href}>
            <span className="text-[18px] leading-none text-[#4F6EF7] hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
