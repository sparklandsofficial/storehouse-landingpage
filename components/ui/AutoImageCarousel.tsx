"use client";
import { useEffect, useMemo, useState } from "react";
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
  aspectRatio,
}: AutoImageCarouselProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [calculatedHeight, setCalculatedHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const hasImages = images && images.length > 0;
  const firstImage = useMemo(() => images?.[0], [images]);

  // Debug props
  // eslint-disable-next-line no-console
  console.log("[AutoImageCarousel] props", { count: images?.length, height, intervalMs, effect });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[AutoImageCarousel] mounted, images: ", images?.map((i) => i.src));
  }, [images]);

  // 偵測是否為手機，避免 SSR 讀取 window
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    updateIsMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateIsMobile);
      return () => window.removeEventListener('resize', updateIsMobile);
    }
  }, []);

  // 自動計算高度為 90vh（或依比例／圖片比例）
  useEffect(() => {
    if (height) {
      setCalculatedHeight(height);
      return;
    }

    const updateHeight = () => {
      const win = typeof window !== 'undefined' ? window : undefined;
      const doc = typeof document !== 'undefined' ? document : undefined;
      const mobile = win ? win.innerWidth < 768 : false;
      const viewportHeight = win ? Math.floor(win.innerHeight * 0.9) : 0;
      let nextHeight = viewportHeight;

      const container = doc
        ? (doc.querySelector('[data-carousel-container]') as HTMLElement | null)
        : null;

      let width = 0;
      if (container) {
        width = container.offsetWidth;
        setContainerWidth(width);
      }

      // 計算圖片比例高度
      let ratioHeight = 0;
      if (width > 0) {
        if (aspectRatio && aspectRatio > 0) {
          ratioHeight = Math.floor(width / aspectRatio);
        } else if (firstImage?.width && firstImage?.height) {
          const imgAspectRatio = firstImage.width / firstImage.height;
          ratioHeight = Math.floor(width / imgAspectRatio);
        }
      }

      // 手機：使用圖片比例高度（完整顯示），桌面：取較大值
      if (mobile) {
        nextHeight = ratioHeight || nextHeight; // 沒有比例時退回 viewport
      } else {
        if (ratioHeight > 0) {
          nextHeight = Math.max(viewportHeight, ratioHeight);
        }
      }

      setCalculatedHeight(nextHeight);
    };

    updateHeight();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [height, firstImage, aspectRatio]);

  if (!hasImages) return null;

  return (
    <div 
      className={`w-full md:w-4/5 mx-auto ${rounded} relative z-30 max-md:w-screen max-md:mx-[calc(50%-50vw)]`} 
      style={{ height: isMobile ? 'auto' as const : calculatedHeight }}
      data-carousel-container
    >
      <Swiper
        modules={[Autoplay, Pagination, A11y, EffectFade]}
        autoplay={{ delay: intervalMs, disableOnInteraction: false }}
        loop
        effect={effect}
        pagination={{ clickable: true }}
        aria-roledescription="carousel"
        style={{ height: isMobile ? 'auto' : '100%' }}
        autoHeight
        className="!w-full !h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={`${img.src}-${idx}`} aria-label={`${idx + 1} / ${images.length}`}>
            <div className="relative w-full max-md:h-auto md:h-full flex items-center justify-center bg-gray-100">
              <Image
                src={img.src}
                alt={img.alt || "carousel image"}
                width={1920}
                height={1080}
                className="w-full max-md:h-auto md:h-full object-contain md:object-cover"
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


