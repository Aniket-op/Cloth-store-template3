import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <AnnouncementBar />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-warm-black py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-4xl md:text-6xl font-light tracking-wide text-primary-foreground">
                            Contact Us
                        </h1>
                        <p className="mt-4 font-body text-sm tracking-wider text-primary-foreground/50 max-w-lg mx-auto">
                            We're here to help you find your perfect outfit. Reach out to us for styling advice, order queries, or boutique appointments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="mx-auto max-w-7xl px-6 py-20 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-display text-3xl font-light text-foreground mb-8">
                            Get In Touch
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-muted p-3 rounded-full text-gold">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-body text-sm font-semibold tracking-wider uppercase text-foreground mb-1">
                                        Flagship Store
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                        14 Heritage Avenue, Golden Mile<br />
                                        New Delhi, DL 110001
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-muted p-3 rounded-full text-gold">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-body text-sm font-semibold tracking-wider uppercase text-foreground mb-1">
                                        Phone & WhatsApp
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                        +91 83074 73499<br />
                                        Mon - Sat: 10:00 AM - 8:00 PM (IST)
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-muted p-3 rounded-full text-gold">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-body text-sm font-semibold tracking-wider uppercase text-foreground mb-1">
                                        Email
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                        support@eliteattire.com<br />
                                        bridal@eliteattire.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="mt-1 bg-muted p-3 rounded-full text-gold">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h3 className="font-body text-sm font-semibold tracking-wider uppercase text-foreground mb-1">
                                        Store Hours
                                    </h3>
                                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                        Monday - Saturday: 10:30 AM - 9:00 PM<br />
                                        Sunday: 11:00 AM - 7:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <EnquiryForm />
                    </motion.div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
