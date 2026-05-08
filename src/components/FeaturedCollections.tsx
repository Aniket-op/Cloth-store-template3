import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const collections = [
  { 
    title: "The Wedding Edit", 
    slug: "kurta-pajama", 
    image: "/images/wedding_collection.png",
    subtitle: "Regal Sherwanis & Kurtas for your special day."
  },
  { 
    title: "Festive Arrivals", 
    slug: "ladies-suits", 
    image: "/images/festive_drop.png",
    subtitle: "Vibrant styles to celebrate every moment."
  },
  { 
    title: "Modern Essentials", 
    slug: "pant-shirts", 
    image: "/images/office_essentials.png",
    subtitle: "Sharp, tailored fits for the modern professional."
  },
];

const FeaturedCollections = () => (
  <section className="mx-auto w-full px-6 md:px-12 py-12">
    <div className="mb-10">
      <h2 className="text-display-md text-ink">Experiences to remember</h2>
      <p className="text-body-md text-mutedText">Unique pieces that tell your story</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {collections.map((col, i) => (
        <motion.div
          key={col.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative block aspect-[4/5] overflow-hidden rounded-md bg-surfaceSoft cursor-pointer"
        >
          <Link to={`/category/${col.slug}`} className="block w-full h-full">
            <img
              src={col.image}
              alt={col.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 transition-opacity duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-display-sm text-white mb-2">
                {col.title}
              </h3>
              <p className="text-body-sm text-white/90 mb-6 line-clamp-2">
                {col.subtitle}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeaturedCollections;
