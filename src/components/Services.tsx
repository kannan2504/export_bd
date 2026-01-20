import {
  Warehouse,
  CreditCard,
  Truck,
  Ship,
  FileCheck,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import shippingImage1 from "@/assets/shipping-image-1.jpeg";

const services = [
  {
    icon: Warehouse,
    title: "Warehouse Storage",
    description: "Secure storage facilities in China with 24/7 monitoring and inventory management for your goods.",
  },
  {
    icon: CreditCard,
    title: "Supplier Payments",
    description: "We handle all payments to your suppliers on your behalf, ensuring smooth transactions.",
  },
  {
    icon: Truck,
    title: "Warehouse to Port Transfer",
    description: "Efficient transportation from warehouse to port with real-time tracking updates.",
  },
  {
    icon: Ship,
    title: "Sea Shipment",
    description: "Reliable ocean freight services with competitive rates and flexible scheduling.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert handling of customs documentation at both China and India ports.",
  },
  {
    icon: MapPin,
    title: "Door Delivery",
    description: "Complete last-mile delivery to your doorstep in Chennai and surrounding areas.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-md uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Shipping & Clearing Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From warehouse to your doorstep, we provide end-to-end logistics solutions
            tailored for China to India trade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
          <div className="p-8 md:p-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
              All-Inclusive Package
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Everything Included in Our Shipping Service
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Storage in our secure warehouse",
                "Payment to suppliers on your behalf",
                "Warehouse to port transfer",
                "Shipment by sea",
                "Clearance at China and India ports",
                "Door delivery in Chennai",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            {/* <p className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
              <strong className="text-foreground">Note:</strong> Extra Chennai transport charges apply and are paid directly by the customer.
            </p> */}
          </div>
          <div className="h-64 lg:h-full min-h-[400px]">
            <img
              src={shippingImage1}
              alt="Shipping container yard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
