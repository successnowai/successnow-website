const CombinedHeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* First Hero Section (Left) */}
      <div className="relative bg-gradient-to-b from-[#00274D] via-[#001a33] to-black text-white overflow-hidden">
        <div className="container mx-auto py-24 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-lg md:text-xl mb-8">
            Discover amazing opportunities and connect with like-minded individuals.
          </p>
          <button className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-bold py-3 px-6 rounded-full">
            Get Started
          </button>
        </div>
      </div>

      {/* Second Hero Section (Right) */}
      <div className="relative bg-gradient-to-b from-[#00274D] via-[#001a33] to-black text-white overflow-hidden border-t-4 border-[#00BFFF]/30">
        <div className="container mx-auto py-24 px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Explore Our Features</h2>
          <p className="text-lg md:text-xl mb-8">Learn about the powerful tools and resources we offer.</p>
          <button className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-bold py-3 px-6 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default CombinedHeroSection
