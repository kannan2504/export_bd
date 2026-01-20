import { CheckCircle, Award, Users, Clock } from "lucide-react";
import shippingImage2 from "@/assets/shipping-image-2.jpeg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "Fully licensed customs broker with all necessary certifications",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals handling your shipments with care",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to meeting your deadlines every time",
    },
  ];

  return (
    <section id="about" className="py-10 md:py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <span className="inline-block  text-primary font-semibold text-md uppercase tracking-wider mb-3">
            About Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={shippingImage2}
                alt="Our shipping operations"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,50%,20%)]/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className=" floating-button
  absolute
  -bottom-4 -right-2
  md:-bottom-6 md:right-8
  bg-card
  border border-border
  shadow-xl
  rounded-xl
  p-3 md:p-6
  max-w-[180px] md:max-w-[240px]">
              <div className="text-4xl font-bold text-primary mb-1">10+</div>
              <p className="text-muted-foreground text-sm">
                Years of excellence in shipping & logistics
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Reliable Partner for China-India Trade
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With over 10 years of experience in international shipping and customs clearance,
              we have established ourselves as a trusted partner for businesses importing goods
              from China to India.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive services cover every aspect of the shipping process, from
              warehouse storage in China to door delivery in Chennai. We handle all the
              complexities so you can focus on growing your business.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {["Trusted by 200+ Businesses", "BIS Certified", "24/7 Support"].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
