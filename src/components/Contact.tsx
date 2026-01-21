// import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";

//  // adjust path if needed


// const Contact = () => {



//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Phone",
//       details: ["+91 99403 70080"]
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       details: ["info@gmail.com"]
//     },
//     {
//       icon: MapPin,
//       title: "Address",
//       details: ["123 Port Road, Chennai", "Tamil Nadu, India 600001"],
//     },
//     {
//       icon: Clock,
//       title: "Business Hours",
//       details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
//     },
//   ];

//   return (
//     <section id="contact" className="py-10 md:py-8 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="inline-block text-primary font-semibold text-md uppercase tracking-wider mb-3">
//             Get In Touch
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//             Ready to Ship? Contact Us
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Get a free quote for your shipment or reach out with any questions.
//             Our team is ready to help.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-8">
//           {/* Contact Info Cards */}
//           <div className="lg:col-span-2 space-y-4">
//             {contactInfo.map((info, index) => (
//               <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
//                 <CardContent className="p-5 flex items-start gap-4">
//                   <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
//                     <info.icon className="w-5 h-5 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
//                     {info.details.map((detail, idx) => (
//                       <p key={idx} className="text-muted-foreground text-sm">
//                         {detail}
//                       </p>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Contact Form */}
//           <Card className="lg:col-span-3 bg-card border-border shadow-lg">
//             <CardContent className="p-6 md:p-8">
//               <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
//               <form className="space-y-5">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                       Full Name
//                     </label>
//                     <Input
//                       id="name"
//                       placeholder="John Doe"
//                       className="bg-background border-border focus:border-primary"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                       Email Address
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="john@example.com"
//                       className="bg-background border-border focus:border-primary"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
//                       Phone Number
//                     </label>
//                     <Input
//                       id="phone"
//                       type="tel"
//                       placeholder="+91 98765 43210"
//                       className="bg-background border-border focus:border-primary"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       placeholder="Shipping Quote"
//                       className="bg-background border-border focus:border-primary"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     placeholder="Tell us about your shipping requirements..."
//                     rows={5}
//                     className="bg-background border-border focus:border-primary resize-none"
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   size="lg"
//                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
//                 >
//                   <Send className="w-4 h-4 mr-2" />
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

const Contact = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 99403 70080"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["1/1, Kutty Street, 2nd floor,Sevenwells,Chennai,", "Tamil Nadu, India 600001"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-10 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Ready to Ship? Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-5 flex gap-4">
                  <info.icon className="text-primary" />
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.details.map((d, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {d}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-3">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>

              <form className="space-y-5" onSubmit={handleSubmit}>

                <Input
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <Input
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <Textarea
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
