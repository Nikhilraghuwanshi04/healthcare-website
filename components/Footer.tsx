import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Us */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-600">
                                <Phone className="w-5 h-5 text-[#38BDF8]" />
                                <span>(123) 456-7890</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <Mail className="w-5 h-5 text-[#38BDF8]" />
                                <span>info@revivephysio.com</span>
                            </div>
                            <div className="flex items-start gap-3 text-slate-600">
                                <MapPin className="w-5 h-5 text-[#38BDF8] shrink-0 mt-1" />
                                <span>123 Healthway, Wellness City, HW 54321</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">Quick Links</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Our Team', 'FAQ', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-slate-600 hover:text-[#38BDF8] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-slate-900">Follow Us</h3>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Facebook, label: 'Facebook' },
                                { icon: Twitter, label: 'Twitter' },
                                { icon: Instagram, label: 'Instagram' }
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="p-3 rounded-full bg-white shadow-sm hover:shadow-md hover:bg-[#38BDF8] group transition-all duration-300 border border-slate-100"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} RevivePhysio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
