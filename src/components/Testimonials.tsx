import { motion } from "framer-motion";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The quality of their lehengas is absolutely stunning. I wore their bridal collection on my wedding and received so many compliments!",
    rating: 5.0,
    date: "March 2026"
  },
  {
    name: "Rahul Mehta",
    location: "Delhi",
    text: "Best sherwanis I've ever purchased. The fabric quality is premium and the fit is impeccable. Elite Attire is now my go-to brand.",
    rating: 5.0,
    date: "April 2026"
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    text: "Fast shipping, beautiful packaging, and the saree was even more gorgeous in person. Truly a luxury shopping experience!",
    rating: 5.0,
    date: "May 2026"
  },
];

const Testimonials = () => (
  <section className="py-section bg-white border-t border-hairline">
    <div className="mx-auto max-w-[1440px] px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-2">
          <Star size={24} className="text-ink fill-ink" />
          <h2 className="text-display-md text-ink">
            Guest favorites
          </h2>
        </div>
        <p className="text-body-md text-mutedText">Read what our community has to say about their experience</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col h-full"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={14} className="text-ink fill-ink" />
              ))}
            </div>
            
            <p className="text-body-md text-ink leading-relaxed mb-6 flex-1 italic">
              "{t.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="bg-surfaceStrong p-3 rounded-full text-mutedText">
                <User size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-title-md text-ink">{t.name}</p>
                <p className="text-body-sm text-mutedText">{t.location} · {t.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16">
        <button className="btn-secondary border-ink px-10">
          Show all reviews
        </button>
      </div>
    </div>
  </section>
);

export default Testimonials;
