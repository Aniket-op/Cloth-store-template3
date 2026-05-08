import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsCondition = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 md:px-12 max-w-[800px] mx-auto w-full">
                <h1 className="text-3xl md:text-5xl font-bold text-luxury-black mb-8 tracking-tight">Terms & Condition</h1>
                
                <div className="space-y-8 text-luxury-gray text-lg leading-relaxed">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60">Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">1. Acceptance of Terms</h2>
                        <p>By accessing and using the Elite Attire website, you agree to be bound by these Terms & Conditions. If you do not agree to all of the terms and conditions, then you may not access the website or use any services.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">2. Products and Pricing</h2>
                        <p>All products listed on the website are subject to availability. We reserve the right to modify or discontinue any product at any time. Prices for our products are subject to change without notice.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">3. WhatsApp Enquiries</h2>
                        <p>Our primary method of communication and order processing is via WhatsApp. Submitting an enquiry does not guarantee a reserved product until payment has been confirmed and processed by our sales team.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">4. Returns and Exchanges</h2>
                        <p>We accept returns or exchanges within 14 days of delivery, provided the item is unworn, unwashed, and retains all original tags. Custom-tailored items are non-refundable.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">5. Governing Law</h2>
                        <p>These Terms & Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Elite Attire operates.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsCondition;
