import Image from "next/image";

export default function About() {
  return (
    <>
      <Image
        src="/images/about-bg-1.png"
        alt="擴大空間，享受生活"
        width={7681}
        height={5302}
        className="w-full relative top-[-70px] left-0"
      />
      <div className="container mx-auto px-4 py-16 relative z-10 -mt-[30vw] md:-mt-[10vw]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#483729] text-center md:text-left -ml-20 md:ml-0">
              擴大空間
            </h1>
            <h2 className="text-5xl md:text-7xl font-semibold mb-8 text-[#8B7E74] text-center md:text-left ml-20 md:ml-40">
              享受生活
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#483729]">
            關於星域智空間
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#8C734B]">
            About Spark Space
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/about-bg-2.png"
              alt="整潔的收納架"
              width={600}
              height={400}
              className=""
            />
          </div>
          <div className="w-full md:w-1/3 md:pl-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FF9E18]">經營理念</h3>
            <p className="text-lg mb-6 text-[#483729]">
              將您寶貴有紀念性或要保存的物品、 書籍、衣服或家裡暫時用不到的雜
              物整理入倉，讓居家空間變大變整 潔，打造一個溫馨愜意的大空間。
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-end">
            <Image
              src="/images/about-bg-2.png"
              alt="擴大空間，享受生活"
              width={600}
              height={400}
              className=""
            />
          </div>
          <div className="w-full md:w-1/3 md:pr-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FF9E18]">經營理念</h3>
            <p className="text-lg mb-6 text-[#483729]">
              將您寶貴有紀念性或要保存的物品、 書籍、衣服或家裡暫時用不到的雜
              物整理入倉，讓居家空間變大變整 潔，打造一個溫馨愜意的大空間。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
