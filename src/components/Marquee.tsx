const Marquee = () => {
  const items = [
    "Handcrafted Excellence",
    "Premium Fabrics",
    "Free Shipping Pan India",
    "10,000+ Happy Customers",
    "Trusted Since 2018",
    "Luxury Ethnic Wear",
    "Celebrity Favorites",
    "Award-Winning Designs",
  ];

  return (
    <div className="bg-warm-black py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 font-body text-[10px] tracking-[0.3em] uppercase text-gold/60"
          >
            ✦&nbsp;&nbsp;{item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
