"use client";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y, EffectFade } from "swiper/modules";

type AutoImageCarouselProps = {
  images: { src: string; alt?: string; width?: number; height?: number }[];
  height?: number; // 如果提供，會覆蓋自動計算
  priority?: boolean;
  intervalMs?: number;
  effect?: "slide" | "fade";
  rounded?: string;
  aspectRatio?: number; // 可選：強制寬高比
};

export default function AutoImageCarousel({
  images,
  height,
  priority = false,
  intervalMs = 4000,
  effect = "fade",
  rounded = "rounded-xl",
}: AutoImageCarouselProps) {
  // 自動高度版本：不預先計高度，交由圖片自然高度與 Swiper autoHeight 控制
  
  const hasImages = images && images.length > 0;
  const firstImage = useMemo(() => images?.[0], [images]);

  // Debug props
  // eslint-disable-next-line no-console
  console.log("[AutoImageCarousel] props", { count: images?.length, height, intervalMs, effect });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[AutoImageCarousel] mounted, images: ", images?.map((i) => i.src));
  }, [images]);

  if (!hasImages) return null;

  return (
    <div 
      className={`w-full md:w-2/5 mx-auto ${rounded} relative z-30 max-md:w-screen max-md:mx-[calc(50%-50vw)]`} 
      style={{ height: 'auto' }}
      data-carousel-container
    >
      <Swiper
        modules={[Autoplay, Pagination, A11y, EffectFade]}
        autoplay={{ delay: intervalMs, disableOnInteraction: false }}
        loop
        effect={effect}
        pagination={{ clickable: true }}
        aria-roledescription="carousel"
        style={{ height: 'auto' }}
        autoHeight
        className="!w-full !h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={`${img.src}-${idx}`} aria-label={`${idx + 1} / ${images.length}`}>
            <div className="relative w-full h-auto flex items-center justify-center bg-gray-100">
              <Image
                src={img.src}
                alt={img.alt || "carousel image"}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
                sizes="100vw"
                priority={priority && idx === 0}
                quality={95}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                loading={priority && idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* SSR fallback */}
      <noscript>
        {firstImage ? (
          <Image
            src={firstImage.src}
            alt={firstImage.alt || "carousel image"}
            width={1920}
            height={1080}
            className={`max-w-full max-h-full object-contain ${rounded}`}
            quality={95}
          />
        ) : null}
      </noscript>
    </div>
  );
}


