export default function FranchiseContact() {
  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-12 text-center">
        加盟聯繫
      </h1>

      <div className="bg-[#FF9E18] p-12 rounded-lg max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">全台加盟專線</h2>
        <div className="text-xl space-y-6">
          <p className="flex items-center justify-start space-x-3 max-md:flex-col">
            <a
              href="tel:02-2796-3030"
              className="text-white text-2xl font-bold hover:text-gray-100 transition-colors duration-300 underline max-md:mb-2"
            >
              02-2796-3030
            </a>
            <span className="text-white text-xl">(加盟專員廖先生)</span>
          </p>
          <p className="flex items-center justify-start space-x-3 max-md:flex-col">
            <span className="text-white text-xl">Email:</span>
            <a
              href="mailto:avisl@sparklands.co"
              className="text-white text-2xl font-bold hover:text-gray-100 transition-colors duration-300 underline max-md:mb-2"
            >
              avisl@sparklands.co
            </a>
          </p>
          <p className="flex items-center justify-start space-x-3 max-md:flex-col">
            <span className="text-white text-xl">Line 官方:</span>
            <a
              href="https://lin.ee/Z58WSDK"
              target="_blank"
              className="text-white text-2xl font-bold hover:text-gray-100 transition-colors duration-300 underline max-md:mb-2"
            >
              @125negus
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
