"use client";
import { motion } from "framer-motion";

export default function Payments() {
  const medias = [
    {
      name: "Paypal",
      link: "https://images.seeklogo.com/logo-png/24/2/paypal-logo-png_seeklogo-249214.png"
    },
    {
      name: "Stripe",
      link: "https://images.seeklogo.com/logo-png/29/1/stripe-logo-png_seeklogo-290635.png"
    },
    {
      name: "PayU",
      link: "https://images.seeklogo.com/logo-png/26/1/payu-logo-png_seeklogo-264462.png"
    },
    {
      name: "Cash Free",
      link: "https://images.seeklogo.com/logo-png/44/1/cashfree-payments-logo-png_seeklogo-440467.png"
    },
    {
      name: "Phone Pe",
      link: "https://images.seeklogo.com/logo-png/42/1/phonepe-logo-png_seeklogo-427388.png"
    },
    {
      name: "Cred",
      link: "https://images.seeklogo.com/logo-png/48/1/cred-club-logo-png_seeklogo-484016.png"
    },
    {
      name: "Amazon",
      link: "https://images.seeklogo.com/logo-png/28/1/amazon-logo-png_seeklogo-286206.png"
    },
    {
      name: "Razorpay",
      link: "https://images.seeklogo.com/logo-png/40/1/razorpay-logo-png_seeklogo-409477.png"
    },
    {
      name: "UPI",
      link: "https://images.seeklogo.com/logo-png/33/1/unified-payment-interface-upi-logo-png_seeklogo-333088.png"
    }
  ];

  return (
    <div className="bg-amber-300 py-16 h-screen flex justify-center items-center">
      <div className="bg-white py-10 overflow-hidden">
        <h2 className=" font-sans text-center text-[8vw] xl:text-[4vw] md:text-[6vw] sm:text-[8vw] text-[#0B1C2E] font-extrabold text-4xl mb-10">
          Our Payment Partners
        </h2>

       
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
          >
            {[...medias, ...medias].map((media, index) => (
              <img
                key={index}
                src={media.link}
                alt={media.name}
                className="h-[19vw] md:h-[12vw] sm:h-[14vw] object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
