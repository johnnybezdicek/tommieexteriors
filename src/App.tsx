import { Button } from "./components/ui/button"
import { Home, Shield, Phone } from "lucide-react"

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
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <p className="text-center mb-8">
              <Phone className="inline h-6 w-6 mr-2" />
              Call us: (123) 456-7890
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-input rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-input rounded-md"
                required
              />
              <select className="w-full p-3 border border-input rounded-md" required>
                <option value="">Select Service</option>
                <option value="clearout">Gutter Clearout</option>
                <option value="guard">Gutter Guard Installation</option>
              </select>
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-input rounded-md resize-none"
                rows={4}
              ></textarea>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
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
