import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100">
      {/* Top Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex flex-row justify-between items-center text-sm min-w-max sm:min-w-0">

            {/* Facebook */}
            <div className="flex-1 flex items-center justify-start gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3 border-r border-gray-100 shrink-0">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center text-gray-600 shrink-0">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-gray-500 text-[9px] sm:text-[10px] font-medium">Facebook</span>
                <span className="text-gray-700 font-bold text-[10px] sm:text-xs md:text-sm truncate">FurniStore</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex-1 flex items-center justify-start gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3 border-r border-gray-100 shrink-0">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center text-gray-600 shrink-0">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight min-w-0 flex-1">
                <span className="text-gray-500 text-[9px] sm:text-[10px] font-medium">Email Address</span>
                <span className="text-gray-700 font-bold text-[9px] sm:text-[10px] md:text-xs break-all">furnistoreofficial@gmail.com</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex-1 flex items-center justify-start gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-3 shrink-0">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center text-gray-600 shrink-0">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight min-w-0">
                <span className="text-gray-500 text-[9px] sm:text-[10px] font-medium">Contact Number</span>
                <span className="text-gray-700 font-bold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">+63 919 641 3744</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Navbar Logo Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8 w-full">
        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
          <div className="relative w-6 h-6 sm:w-8 sm:h-8">
            <Image
              src="/images/logo.png"
              alt="FurniStore Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-wide text-gray-900">
            FURNI<span className="text-[#3E6BE0]">STORE</span>
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-row-reverse lg:flex-row items-center justify-between  sm:gap-6 md:gap-8 lg:gap-16 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-6 sm:pb-8 md:pb-12 overflow-hidden">

        {/* Left Content */}
        <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 text-center lg:text-left z-10 order-2 lg:order-1 w-full">
          <div className="space-y-0.5 sm:space-y-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-gray-600 leading-[1.1] sm:leading-tight tracking-tight px-2 sm:px-0">
              Discover Quality Furniture
            </h1>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold leading-[1.1] sm:leading-tight tracking-tight">
              <span className="text-gray-800">Furni</span><span className="text-[#3E6BE0]">Store</span>
            </div>
          </div>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium px-3 sm:px-2 md:px-0">
            FurniStore connects you to trusted local furniture makers and sellers in Oroquieta City. Explore quality pieces, compare prices, and view items in AR - right at your fingertips.
          </p>

          <div className="pt-1 sm:pt-2 md:pt-4">
            <a
              href="https://1bk9rpastyqhst3z.public.blob.vercel-storage.com/apk/app-release.apk"
              download
              className="bg-[#4F75FF] hover:bg-blue-600 active:bg-blue-700 text-white px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-3.5 rounded-lg text-sm sm:text-base md:text-lg font-semibold transition-all shadow-md hover:shadow-lg inline-block"
            >
              Download
            </a>
          </div>
        </div>

        {/* Right Content - Phones */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end items-center h-[280px] sm:h-[350px] md:h-[450px] lg:h-[650px] order-1 lg:order-2 min-h-0">
          <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] h-full flex items-center justify-center">
            {/* Back Phone (Splash Screen / Left) */}
            <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[280px] z-10">
              <Image
                src="/images/phone1.png"
                alt="App Splash Screen"
                width={300}
                height={600}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Front Phone (App Interface / Right) */}
            <div className="absolute right-2 sm:right-4 md:right-6 lg:right-0 w-[110px] sm:w-[130px] md:w-[160px] lg:w-[200px] xl:w-[230px] z-20 translate-y-3 sm:translate-y-4 md:translate-y-6 lg:translate-y-8 xl:translate-y-12">
              <Image
                src="/images/phone2.png"
                alt="App Interface"
                width={280}
                height={560}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

      </main>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">Why Choose FurniStore?</h2>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-3 sm:px-2">
            FurniStore brings convenience, trust, and quality to your online furniture shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-[#F4F6FA] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-0 overflow-hidden relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
            <div className="flex-1 space-y-1.5 sm:space-y-2 md:space-y-3 z-10 sm:pr-2 md:pr-4 w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Wide Selection of Local Furniture</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Browse modern, classic, and pieces from Oroquieta's best local shops.
              </p>
            </div>
            <div className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] shrink-0 relative translate-y-0 sm:translate-y-4 md:translate-y-6 lg:translate-y-8">
              <Image
                src="/images/p1.png"
                alt="Wide Selection"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F4F6FA] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-0 overflow-hidden relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
            <div className="flex-1 space-y-1.5 sm:space-y-2 md:space-y-3 z-10 sm:pr-2 md:pr-4 w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Easy & Secure Shopping Experience</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Enjoy a simple and clean interface designed for smooth browsing and checkout.
              </p>
            </div>
            <div className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] shrink-0 relative translate-y-0 sm:translate-y-4 md:translate-y-6 lg:translate-y-8">
              <Image
                src="/images/p2.png"
                alt="Easy Shopping"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F4F6FA] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-0 overflow-hidden relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
            <div className="flex-1 space-y-1.5 sm:space-y-2 md:space-y-3 z-10 sm:pr-2 md:pr-4 w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">Verified Sellers</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Identity verification ensures that every seller is authenticated, giving buyers peace of mind.
              </p>
            </div>
            <div className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] shrink-0 relative translate-y-0 sm:translate-y-4 md:translate-y-6 lg:translate-y-8">
              <Image
                src="/images/p3.png"
                alt="Verified Sellers"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F4F6FA] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-0 overflow-hidden relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px]">
            <div className="flex-1 space-y-1.5 sm:space-y-2 md:space-y-3 z-10 sm:pr-2 md:pr-4 w-full sm:w-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">AR Furniture Preview</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Visualize furniture in your actual space using Augmented Reality.
              </p>
            </div>
            <div className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] shrink-0 relative translate-y-0 sm:translate-y-4 md:translate-y-6 lg:translate-y-8">
              <Image
                src="/images/p4.png"
                alt="AR Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-24">
          <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 lg:max-w-[50%] text-center lg:text-left w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-[1.1] px-2 sm:px-0">
              What You Can Do in <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Furni<span className="text-[#3E6BE0]">Store</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed px-3 sm:px-2 md:px-0">
              FurniStore makes furniture shopping easy and reliable by allowing you to browse items by category, view detailed photos and descriptions. With verified sellers and a user-friendly interface, you can enjoy a trustworthy and convenient local marketplace experience designed for Oroquieta shoppers.
            </p>
          </div>
          <div className="flex-1 relative w-full h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px]">
            <Image
              src="/images/furniture_collage.png"
              alt="Furniture Collection"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Who is FurniStore For Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-20">
            <div className="flex-1 space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2 sm:px-0">
                Who is Furni<span className="text-[#3E6BE0]">Store</span> For?
              </h2>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-1 sm:mb-2">Customers</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                    Looking for quality furniture without leaving home.
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-1 sm:mb-2">Sellers</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                    Local furniture entrepreneurs wanting a dedicated online sales platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold text-base sm:text-lg mb-1 sm:mb-2">Admins</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                    Managing users, products, and transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full sm:w-auto">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-white rounded-full flex items-center justify-center shadow-sm">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32">
                  <Image
                    src="/images/logo.png"
                    alt="FurniStore Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-24">
          <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-6 text-center lg:text-left w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] px-2 sm:px-0">
              Download & Start <span className="text-[#3E6BE0]">Shopping</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed px-3 sm:px-2 md:px-0">
              Experience stress-free local furniture shopping—FurniStore makes it simple, fast, and reliable.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end w-full sm:w-auto">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
              <Image
                src="/images/qr_code.png"
                alt="Download QR Code"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">

            {/* Logo Column */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4 flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                  <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                    <Image
                      src="/images/logo.png"
                      alt="FurniStore Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="text-lg sm:text-xl font-bold tracking-wide">
                  FURNI<span className="text-[#3E6BE0]">STORE</span>
                </span>
              </div>
            </div>

            {/* Menu Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 md:mb-6">Menu</h3>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 text-gray-400 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-white transition-colors inline-block">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors inline-block">Why Choose FurniStore</a></li>
                <li><a href="#" className="hover:text-white transition-colors inline-block">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors inline-block">Who is FurniStore?</a></li>
                <li><a href="https://1bk9rpastyqhst3z.public.blob.vercel-storage.com/apk/app-release.apk" download className="hover:text-white transition-colors inline-block">Download</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 md:mb-6">Contact</h3>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="break-all sm:break-normal">+63 919 641 3744</span>
              </div>
            </div>

            {/* Follow Us Column */}
            <div className="text-center sm:text-left col-span-2 sm:col-span-1">
              <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 md:mb-6">Follow Us</h3>
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 text-gray-400 text-xs sm:text-sm">
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-sm flex items-center justify-center text-[#1A1A1A] shrink-0">
                    <span className="font-bold text-[10px] sm:text-xs">f</span>
                  </div>
                  <span>FurniStore</span>
                </a>
                <a href="#" className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
                  </svg>
                  <span className="break-all sm:break-normal">furnistoreofficial</span>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-800 pt-4 sm:pt-6 md:pt-8">
            <p className="text-gray-500 text-[10px] sm:text-xs text-center sm:text-left">
              Copyright © FurniStore 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
