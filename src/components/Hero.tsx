import { ArrowRight, Anchor, Globe, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/shipcom.webp";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-12 md:pt-20 pb-6">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Anchor className="w-4 h-4" />
            <span className="text-sm font-medium">China to India Shipping Specialists</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Seamless Shipping &{" "}
            <span className="text-secondary">Clearing Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Complete end-to-end logistics from China to your doorstep in India.
            We handle storage, payments, transfers, shipments, and customs clearance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-secondary hover:text-white hover:bg-white/10  font-semibold text-lg px-8 py-6"
            >
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto ">
                <Package className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white">100+</p>
              <p className="text-xs md:text-sm text-white/60">Shipments/Year</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto ">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white">10+</p>
              <p className="text-xs md:text-sm text-white/60">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-2 mx-auto ">
                <Anchor className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white">100%</p>
              <p className="text-xs md:text-sm text-white/60">Safe Delivery</p>
            </div>
          </div>
        </div>
      </div>
      {/* Background */}


      <div className="absolute inset-0 z-0">

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/shipcom.webp"
          className="w-full h-full object-cover"
        >
          <source src={heroImage} type="video/mp4" />
        </video>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,50%,20%)]/95 via-[hsl(215,50%,20%)]/80 to-[hsl(215,50%,20%)]/60" /> */}
      </div>

    </section>
  );
};

export default Hero;
