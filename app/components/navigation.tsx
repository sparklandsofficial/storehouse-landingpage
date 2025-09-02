"use client";

import Link from "next/link";
import Image from "next/image";
// import { scrollToElement } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const NavItems = () => (
    <ul
      className={`${isMobile ? "flex flex-col space-y-4" : "flex space-x-12"}`}
    >
      <li>
        <Link
          href="/"
          className="text-[#483729] font-bold hover:text-[#FF9E18] transition-colors duration-300 ease-in-out text-lg"
        >
          首頁
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="text-[#483729] font-bold hover:text-[#FF9E18] transition-colors duration-300 ease-in-out text-lg"
        >
          關於星域
        </Link>
      </li>
      <li>
        <Link
          href="/branches"
          className="text-[#483729] font-bold hover:text-[#FF9E18] transition-colors duration-300 ease-in-out text-lg"
        >
          租倉據點
        </Link>
      </li>
      <li>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <DropdownMenuTrigger className="text-[#483729] font-bold hover:text-[#FF9E18] transition-colors duration-300 ease-in-out text-lg">
              加盟辦法
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="w-48"
            >
              <DropdownMenuItem className="py-3 text-base font-medium hover:bg-orange-50">
                <Link href="/franchise/advantages">加盟優勢</Link>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="py-3 text-base font-medium hover:bg-orange-50">
                  加盟方式
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-48">
                  <DropdownMenuItem className="py-3 text-base font-medium hover:bg-orange-50">
                    <Link href="/franchise/process">加盟流程</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 text-base font-medium hover:bg-orange-50">
                    <Link href="/franchise/requirements">加盟申請條件</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 text-base font-medium hover:bg-orange-50">
                    <Link href="/franchise/types">加盟型態</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-3 text-base font-medium hover:bg-orange-50">
                    <Link href="/franchise/investment">雙方投資 & 資源</Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem className="py-3 text-base font-medium hover:bg-orange-50">
                <Link href="/franchise/apply">我要加盟</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-3 text-base font-medium hover:bg-orange-50">
                <Link href="/franchise/contact">加盟聯繫</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </div>
        </DropdownMenu>
      </li>
      <li>
        <Link
          href="/faq"
          className="text-[#483729] font-bold hover:text-[#FF9E18] transition-colors duration-300 ease-in-out text-lg"
        >
          常見問題
        </Link>
      </li>
      <li>
        <a
          href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL}
          target="_blank"
          className="bg-[#FF9E18] text-white px-6 py-1 rounded-full hover:bg-orange-500 transition-colors duration-300 ease-in-out text-lg"
        >
          APP下載
        </a>
      </li>
    </ul>
  );

  return (
    <header className="bg-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/images/logo.png"
              alt="星域智空間 Logo"
              width={200}
              height={200}
              className="mr-2 md:w-[200px] w-[150px]"
            />
          </Link>
        </div>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="mt-6">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav>
            <NavItems />
          </nav>
        )}
      </div>
    </header>
  );
}
