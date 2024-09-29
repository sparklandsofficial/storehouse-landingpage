export interface CabinetSize {
  type: string;
  image: string;
  sizes: {
    height: string;
    width: string;
    depth: string;
    volume: string;
    monthlyRent: string;
  }[];
}

export const cabinetSizes: CabinetSize[] = [
  {
    type: "S上櫃",
    image: "/images/S-top.png",
    sizes: [
      {
        height: "91.5cm",
        width: "92cm",
        depth: "109.5cm",
        volume: "35材積",
        monthlyRent: "1,480元",
      },
    ],
  },
  {
    type: "S下櫃",
    image: "/images/s-bottom.png",
    sizes: [
      {
        height: "121.5cm",
        width: "92cm",
        depth: "109.5cm",
        volume: "35材積",
        monthlyRent: "1,480元",
      },
    ],
  },
  {
    type: "M全櫃",
    image: "/images/m-full.png",
    sizes: [
      {
        height: "213.15cm",
        width: "1232cm",
        depth: "109.5cm",
        volume: "35材積",
        monthlyRent: "1,480元",
      },
    ],
  },
  {
    type: "L全櫃",
    image: "/images/l-full.png",
    sizes: [
      {
        height: "213.1cm",
        width: "167.5cm",
        depth: "109.5cm",
        volume: "35材積",
        monthlyRent: "1,480元",
      },
    ],
  },
  {
    type: "特殊規格",
    image: "/images/special.png",
    sizes: [
      {
        height: "213.1cm",
        width: "300cm",
        depth: "125.5cm",
        volume: "35材積",
        monthlyRent: "1,480元",
      },
    ],
  },
  // 可以添加更多類型的櫃子
];