import { Button } from "./components/ui/button"
import { Home, Shield, Phone, User, Phone as PhoneIcon, MapPin, Wrench, MessageSquare } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Tommie Exterior Services</h1>
          </div>
          <nav>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Gallery</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Keeping Your Gutters Happy, One Home at a Time
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Professional gutter cleanouts and guard installations in St. Thomas
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Book a Clearout
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <Home className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Gutter Clearouts</h3>
              <p className="text-muted-foreground mb-4">
                Remove debris and prevent water damage to your home with our thorough cleaning services.
              </p>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" alt="Clean gutters" className="rounded-lg mb-4" />
              <Button>Learn More</Button>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Gutter Guard Installations</h3>
              <p className="text-muted-foreground mb-4">
                Install leaf protection systems for long-term maintenance and protection.
              </p>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400" alt="Gutter guards" className="rounded-lg mb-4" />
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p className="text-muted-foreground">Dependable professionals you can trust.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-muted-foreground">Quality work at fair prices.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local St. Thomas Experts</h3>
              <p className="text-muted-foreground">Proudly serving our community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Before & After Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400" alt="Before" className="rounded-lg" />
              <p className="text-center font-semibold">Before</p>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400" alt="After" className="rounded-lg" />
              <p className="text-center font-semibold">After</p>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400" alt="Gutter guard installation" className="rounded-lg" />
              <p className="text-center font-semibold">Guard Installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to keep your gutters happy? Contact us today for professional service in St. Thomas.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-card p-8 rounded-xl shadow-lg border">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Phone className="h-6 w-6 mr-3 text-primary" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Service Area</p>
                        <p className="text-muted-foreground">St. Thomas, VI</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Licensed & Insured</p>
                        <p className="text-muted-foreground">Your home is protected</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-purple-600 text-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">Why Choose Tommie?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Reliable, local service
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Competitive pricing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      100% satisfaction guarantee
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card p-8 rounded-xl shadow-lg border">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Property Address"
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Wrench className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <select className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none bg-white" required>
                      <option value="">Select Service Type</option>
                      <option value="gutter-cleaning">Gutter Cleaning</option>
                      <option value="gutter-guard">Gutter Guard Installation</option>
                      <option value="christmas-lights">Christmas Lights Installation</option>
                    </select>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <textarea
                      placeholder="Additional Details"
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      rows={4}
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg font-semibold hover:shadow-lg transition-shadow">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Tommie Exterior Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
