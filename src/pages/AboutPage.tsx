import { motion } from "framer-motion";
import { Leaf, Award, Scissors, Heart } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
    {
        icon: <Scissors size={24} />,
        title: "Master Craftsmanship",
        description: "Every garment is meticulously crafted by master artisans who have perfected their skills over generations.",
    },
    {
        icon: <Award size={24} />,
        title: "Uncompromising Quality",
        description: "We source only the finest fabrics and materials, ensuring that every piece from Elite Attire stands the test of time.",
    },
    {
        icon: <Heart size={24} />,
        title: "Heritage Meets Modernity",
        description: "Our designs beautifully blend centuries-old Indian traditions with contemporary aesthetics and modern silhouettes.",
    },
    {
        icon: <Leaf size={24} />,
        title: "Sustainable Practices",
        description: "We are committed to ethical fashion, supporting local weaver communities and minimizing our environmental footprint.",
    },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative aspect-[21/9] overflow-hidden bg-ink flex items-center justify-center mx-6 md:mx-12 mt-8 rounded-md shadow-sm">
                    <div className="absolute inset-0">
                        <img
                            src="/images/wedding_collection.png"
                            alt="Elite Attire Heritage"
                            className="w-full h-full object-cover object-center opacity-60 transition-transform duration-[10s] hover:scale-110"
                        />
                    </div>
                    <div className="relative z-10 text-center px-4 md:px-12 w-full max-w-[1440px]">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-display-xl text-white">
                                Our Story
                            </h1>
                            <p className="mt-4 text-body-md text-white/90 max-w-2xl mx-auto">
                                Weaving dreams into reality, one stitch at a time. A journey of passion and heritage.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="mx-auto w-full max-w-[800px] px-6 md:px-12 py-section text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-display-md text-ink">
                            Redefining the Fashion Marketplace
                        </h2>
                        <p className="text-body-md text-body leading-relaxed">
                            Founded with a vision to celebrate internal beauty through external elegance, Elite Attire has become a beacon of premium fashion. We believe that what you wear is an extension of who you are. Our journey began in a small boutique over a decade ago, fueled by a passion for rich textiles, intricate embroideries, and impeccable tailoring.
                        </p>
                        <p className="text-body-md text-body leading-relaxed">
                            Today, Elite Attire serves a global clientele, offering a curated selection of bridal lehengas, regal sherwanis, classic western suits, and contemporary festive wear. Each piece in our collection tells a story of heritage, passion, and unparalleled artistry. We don't just create clothes; we create heirlooms meant to be cherished for generations.
                        </p>
                    </motion.div>
                </section>

                {/* Values Section */}
                <section className="bg-surfaceSoft py-section border-y border-hairline">
                    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-display-md text-ink">Our Core Values</h2>
                            <p className="text-body-md text-mutedText">The principles that guide our curation</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {values.map((value, i) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="flex flex-col items-center text-center space-y-4 p-8 rounded-md bg-white border border-hairline transition-all duration-300 hover:shadow-airbnb"
                                >
                                    <div className="h-16 w-16 rounded-full bg-surfaceStrong flex items-center justify-center text-ink">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-title-md text-ink">
                                        {value.title}
                                    </h3>
                                    <p className="text-body-sm text-mutedText leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
