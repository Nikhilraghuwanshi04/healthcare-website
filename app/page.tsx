"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Activity,
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  User,
} from "lucide-react"

export default function PhysiotherapyWebsite() {
  const [selectedService, setSelectedService] = useState("assessment")

  const services = [
    {
      id: "assessment",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your condition and movement patterns",
      duration: "60 minutes",
      icon: Activity,
    },
    {
      id: "manual",
      title: "Manual Therapy",
      description: "Hands-on treatment including massage and joint mobilization",
      duration: "45 minutes",
      icon: Heart,
    },
    {
      id: "exercise",
      title: "Exercise Therapy",
      description: "Personalized exercise programs for rehabilitation and prevention",
      duration: "45 minutes",
      icon: Users,
    },
    {
      id: "sports",
      title: "Sports Rehabilitation",
      description: "Specialized treatment for sports-related injuries and performance",
      duration: "60 minutes",
      icon: Award,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      condition: "Lower Back Pain",
      rating: 5,
      text: "After just 6 sessions, my chronic back pain has significantly improved. The team is incredibly professional and caring.",
    },
    {
      name: "Mike Chen",
      condition: "Sports Injury",
      rating: 5,
      text: "Got back to playing tennis faster than expected. The sports rehabilitation program was exactly what I needed.",
    },
    {
      name: "Emma Davis",
      condition: "Post-Surgery Recovery",
      rating: 5,
      text: "The post-operative care was exceptional. They guided me through every step of my recovery journey.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">PhysioHeal</h1>
                <p className="text-sm text-slate-600">Professional Physiotherapy</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                Learn More
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">✨ Now Accepting New Patients</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Get Back to Your
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Best Life
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Expert physiotherapy care with personalized treatment plans. We help you recover faster, move better, and
              live pain-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-6"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 text-lg px-8 py-6"
              >
                <Play className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Trusted</div>
              <div className="text-slate-600">Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">Caring</div>
              <div className="text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Comprehensive Care for Your Recovery</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From initial assessment to full recovery, we provide personalized treatment plans tailored to your
              specific needs.
            </p>
          </div>

          <Tabs value={selectedService} onValueChange={setSelectedService} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
                >
                  <service.icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl text-slate-800">{service.title}</CardTitle>
                    <CardDescription className="text-lg text-slate-600 max-w-2xl mx-auto">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex justify-center items-center gap-8 mb-8">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <span className="text-slate-700">{service.duration}</span>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-800">About PhysioHeal</Badge>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Your Journey to Recovery Starts Here</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With over 15 years of experience, our team of certified physiotherapists is dedicated to helping you
                achieve optimal health and mobility. We combine evidence-based treatments with compassionate care to
                deliver exceptional results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-slate-700">Licensed & Certified Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-slate-700">State-of-the-Art Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-slate-700">Personalized Treatment Plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-slate-700">Insurance Accepted</span>
                </div>
              </div>

              <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Learn More About Us
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Trusted Care</h3>
                  <p className="text-slate-600">Your health and recovery is our top priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Patient Stories</Badge>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real stories from real people who've experienced life-changing results with our care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.condition}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions? We're here to help. Contact us today to learn more about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-teal-400" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">
                  123 Health Street
                  <br />
                  Medical District
                  <br />
                  City, State 12345
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-teal-400" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">
                  (555) 123-4567
                  <br />
                  Mon-Fri: 8AM-6PM
                  <br />
                  Sat: 9AM-2PM
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-teal-400" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">
                  info@physioheal.com
                  <br />
                  appointments@physioheal.com
                  <br />
                  24/7 Support Available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PhysioHeal</span>
              </div>
              <p className="text-slate-400 mb-4">
                Professional physiotherapy care for your complete recovery and wellness.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Initial Assessment</li>
                <li>Manual Therapy</li>
                <li>Exercise Therapy</li>
                <li>Sports Rehabilitation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@physioheal.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  123 Health Street
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} PhysioHeal. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
