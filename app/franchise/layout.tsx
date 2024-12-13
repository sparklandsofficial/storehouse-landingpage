"use client"
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as HoverCard from '@radix-ui/react-hover-card';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  BookOpen, 
  UserPlus, 
  Phone,
  ChevronRight,
  Menu
} from 'lucide-react';
import { useState, useEffect } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function FranchiseLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const isMethodPage = [
    '/franchise/process',
    '/franchise/requirements',
    '/franchise/types',
    '/franchise/investment'
  ].includes(pathname);

  const NavContent = () => (
    <nav className="space-y-2">
      <Link
        href="/franchise/advantages"
        className={`flex items-center gap-2 p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
          pathname === '/franchise/advantages' ? 'bg-orange-50' : ''
        }`}
      >
        <Trophy className="w-5 h-5" />
        加盟優勢
      </Link>
      
      {isMobile ? (
        <div className="space-y-2">
          <div className={`flex items-center gap-2 p-3 text-[#483729] font-medium`}>
            <BookOpen className="w-5 h-5" />
            加盟方式
          </div>
          <div className="ml-4 space-y-1">
            <Link
              href="/franchise/process"
              className={`block p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
                pathname === '/franchise/process' ? 'bg-orange-50' : ''
              }`}
            >
              加盟流程
            </Link>
            <Link
              href="/franchise/requirements"
              className={`block p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
                pathname === '/franchise/requirements' ? 'bg-orange-50' : ''
              }`}
            >
              加盟申請條件
            </Link>
            <Link
              href="/franchise/types"
              className={`block p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
                pathname === '/franchise/types' ? 'bg-orange-50' : ''
              }`}
            >
              加盟型態
            </Link>
            <Link
              href="/franchise/investment"
              className={`block p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
                pathname === '/franchise/investment' ? 'bg-orange-50' : ''
              }`}
            >
              雙方投資 & 資源
            </Link>
          </div>
        </div>
      ) : (
        <HoverCard.Root openDelay={0} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <div className={`flex items-center justify-between p-3 text-[#483729] hover:bg-orange-50 rounded-lg cursor-pointer ${
              isMethodPage ? 'bg-orange-50' : ''
            }`}>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                加盟方式
              </div>
              <ChevronRight className="w-4 h-4" />
            </div>
          </HoverCard.Trigger>
          
          <HoverCard.Portal>
            <HoverCard.Content 
              className="bg-white rounded-lg shadow-lg w-48 p-1" 
              sideOffset={5} 
              side="right"
              align="start"
            >
              <div className="flex flex-col">
                <Link
                  href="/franchise/process"
                  className={`p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
                    pathname === '/franchise/process' ? 'bg-orange-50' : ''
                  }`}
                >
                  加盟流程
                </Link>
                <Link
                  href="/franchise/requirements"
                  className={`p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
                    pathname === '/franchise/requirements' ? 'bg-orange-50' : ''
                  }`}
                >
                  加盟申請條件
                </Link>
                <Link
                  href="/franchise/types"
                  className={`p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
                    pathname === '/franchise/types' ? 'bg-orange-50' : ''
                  }`}
                >
                  加盟型態
                </Link>
                <Link
                  href="/franchise/investment"
                  className={`p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
                    pathname === '/franchise/investment' ? 'bg-orange-50' : ''
                  }`}
                >
                  雙方投資 & 資源
                </Link>
              </div>
              <HoverCard.Arrow className="fill-white" />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      )}

      <Link
        href="/franchise/apply"
        className={`flex items-center gap-2 p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
          pathname === '/franchise/apply' ? 'bg-orange-50' : ''
        }`}
      >
        <UserPlus className="w-5 h-5" />
        我要加盟
      </Link>
      <Link
        href="/franchise/contact"
        className={`flex items-center gap-2 p-3 text-[#483729] hover:bg-orange-50 rounded-lg ${
          pathname === '/franchise/contact' ? 'bg-orange-50' : ''
        }`}
      >
        <Phone className="w-5 h-5" />
        加盟聯繫
      </Link>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-8 flex gap-8 max-md:px-4 max-md:pt-0 max-md:gap-0 max-md:mt-16 min-h-[calc(100vh-16rem)]">
      {isMobile ? (
        <>
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                className="fixed top-[72px] left-0 w-full h-12 flex items-center gap-2 px-4 bg-white border-b z-50 rounded-none justify-start"
              >
                <Menu className="h-5 w-5 text-[#483729]" />
                <span className="text-[#483729] font-medium">加盟專區選單</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="mt-8">
                <NavContent />
              </div>
            </SheetContent>
          </Sheet>
          <div className="h-12" />
        </>
      ) : (
        <aside className="w-64 flex-shrink-0">
          <NavContent />
        </aside>
      )}
      <main className="flex-1 max-md:mt-4">{children}</main>
    </div>
  );
} 