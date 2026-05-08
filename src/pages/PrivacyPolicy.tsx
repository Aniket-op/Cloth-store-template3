import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 pb-12 px-4 md:px-12 max-w-[800px] mx-auto w-full">
                <h1 className="text-3xl md:text-5xl font-bold text-luxury-black mb-8 tracking-tight">Privacy Policy</h1>
                
                <div className="space-y-8 text-luxury-gray text-lg leading-relaxed">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60">Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us when you make a purchase, create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, shipping address, and payment information.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">2. How We Use Your Information</h2>
                        <p>We use the information we collect to process your orders, communicate with you about your orders, improve our products and services, and send you marketing communications (if you have opted in).</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">3. Sharing Your Information</h2>
                        <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-luxury-black">4. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us via our WhatsApp enquiry line or email us directly.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
