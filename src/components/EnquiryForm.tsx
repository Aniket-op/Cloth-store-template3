import { useState, useEffect } from "react";
import { toast } from "sonner";
import { categories, WHATSAPP_NUMBER, Product } from "@/data/products";
import { MessageCircle, Send } from "lucide-react";

interface EnquiryFormProps {
    prefilledProduct?: Product;
}

const EnquiryForm = ({ prefilledProduct }: EnquiryFormProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        category: prefilledProduct ? (prefilledProduct.category === "sale" || prefilledProduct.category === "new-arrivals" ? "other" : prefilledProduct.category) : "",
        contactNumber: "",
        emailAddress: "",
        details: prefilledProduct ? `I am interested in the following product:\n\nName: ${prefilledProduct.name}\nPrice: ₹${prefilledProduct.price.toLocaleString("en-IN")}\n\nAdditional Details:\n` : ""
    });

    useEffect(() => {
        if (prefilledProduct) {
            setFormData(prev => ({
                ...prev,
                category: prefilledProduct.category === "sale" || prefilledProduct.category === "new-arrivals" ? "other" : prefilledProduct.category,
                details: `I am interested in the following product:\n\nName: ${prefilledProduct.name}\nPrice: ₹${prefilledProduct.price.toLocaleString("en-IN")}\n\nAdditional Details:`
            }));
        }
    }, [prefilledProduct]);

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName) newErrors.fullName = "Required";
        if (!formData.emailAddress) newErrors.emailAddress = "Required";
        else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) newErrors.emailAddress = "Invalid";
        if (!formData.contactNumber) newErrors.contactNumber = "Required";
        if (!formData.details) newErrors.details = "Required";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            toast.error("Please fill in all required fields.");
            return;
        }

        console.log("Enquiry Form Submitted:", formData);
        toast.success("Enquiry submitted successfully!");
        setFormData({
            fullName: "",
            companyName: "",
            category: "",
            contactNumber: "",
            emailAddress: "",
            details: ""
        });
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            toast.error("Please fill in all required fields.");
            return;
        }

        const message = `*New Context Enquiry*\n\n*Name:* ${formData.fullName}\n*Company:* ${formData.companyName || "N/A"}\n*Category:* ${formData.category}\n*Phone:* ${formData.contactNumber}\n*Email:* ${formData.emailAddress}\n\n*Details:*\n${formData.details}`;
        
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const inputClasses = (name: string) => `w-full bg-white border ${errors[name] ? "border-primary-error-text" : "border-hairline"} rounded-sm px-4 py-3 text-body-md text-ink focus:outline-none focus:border-ink focus:border-2 transition-all placeholder:text-mutedText h-14`;

    return (
        <div className="w-full">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                        <label className="text-caption text-mutedText ml-1">Full Name *</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={inputClasses('fullName')}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-caption text-mutedText ml-1">Company</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className={inputClasses('companyName')}
                            placeholder="Optional"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                        <label className="text-caption text-mutedText ml-1">Email Address *</label>
                        <input
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            className={inputClasses('emailAddress')}
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-caption text-mutedText ml-1">Phone Number *</label>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className={inputClasses('contactNumber')}
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-caption text-mutedText ml-1">Collection Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`${inputClasses('category')} appearance-none cursor-pointer`}
                    >
                        <option value="" disabled>Select a collection</option>
                        {categories.map((cat) => (
                            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                        ))}
                        <option value="other">Other / Mixed</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-caption text-mutedText ml-1">Message *</label>
                    <textarea
                        rows={5}
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className={`${inputClasses('details')} h-auto resize-none`}
                        placeholder="Tell us about your requirements"
                    />
                </div>

                <div className="pt-4 flex flex-col md:flex-row gap-4">
                    <button 
                        type="submit" 
                        className="btn-primary flex-1 h-12 text-button-md shadow-sm"
                    >
                        Submit Request
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={handleWhatsAppSubmit}
                        className="btn-secondary flex-1 h-12 text-button-md flex items-center justify-center gap-2"
                    >
                        <MessageCircle size={18} />
                        WhatsApp Support
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnquiryForm;
