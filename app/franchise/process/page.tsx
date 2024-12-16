import Image from 'next/image'
export default function FranchiseProcess() {


  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-12 max-md:mb-4">加盟流程</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <Image className="w-full" src="/images/process.png" alt="加盟流程" width={779} height={1067} />
      </div>
    </div>
  );
} 