import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";

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
      <Link href={href} className="relative h-[200px] w-full overflow-hidden block group">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized={true}
        />
      </Link>

      <div className="p-[24px] flex flex-col flex-1">
        <p className="text-[11px] font-[700] uppercase tracking-[1.2px] text-[#4F6EF7]">
          {category}
        </p>
        <Link href={href}>
          <h3 className="mt-[10px] text-[18px] font-[600] leading-[1.3] text-[#1F2937] hover:text-[#4F6EF7] transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>
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
            <div className="w-[15px] h-[15px] flex items-center justify-center transition-transform hover:translate-x-1">
              <Image
                src={siteData.common.icons.cardArrow}
                alt=""
                width={20}
                height={20}
                className="object-contain"
                unoptimized={true}
              />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
