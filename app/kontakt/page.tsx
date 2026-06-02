"use client"

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const services = [
  'Botoks i fileri',
  'Morpheus8 RF Microneedling',
  'Laserska epilacija',
  'Hemijski pilinzi',
  'PRP tretman',
  'Profhilo',
  'Dermoskopija',
  'Medicinska dermatologija',
  'Drugo'
]

const workingHours = [
  { day: 'Ponedeljak', hours: '10:00 - 18:00' },
  { day: 'Utorak', hours: '10:00 - 18:00' },
  { day: 'Sreda', hours: '10:00 - 18:00' },
  { day: 'Četvrtak', hours: '10:00 - 18:00' },
  { day: 'Petak', hours: '10:00 - 18:00' },
  { day: 'Subota', hours: 'Zatvoreno' },
  { day: 'Nedelja', hours: 'Zatvoreno' },
]

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#faf9f7] pt-36 pb-20">
        <div className="hidden md:block absolute right-8 top-1/3 w-[1px] h-32 bg-[#b91c1c]/30" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[#b91c1c] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Javite nam se
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a]">
            Kontakt
          </h1>
          <div className="w-24 h-[2px] bg-[#b91c1c] mx-auto mt-8" />
          <p className="text-[#6b6b6b] mt-8 max-w-xl mx-auto font-light">
            Javite nam se za više informacija ili zakazivanje pregleda
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Kontakt forma</p>
              <h2 className="font-serif text-3xl text-[#1a1a1a] mb-8">
                Pošaljite Nam Poruku
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-10" />

              {isSubmitted && (
                <div className="mb-8 p-5 bg-[#b91c1c]/5 border border-[#b91c1c]/30 text-[#b91c1c]">
                  Hvala vam na poruci! Kontaktiraćemo vas u najkraćem mogućem roku.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-2 tracking-wide">
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#faf9f7] border border-[#e5e0da] text-[#1a1a1a] px-5 py-4 focus:outline-none focus:border-[#b91c1c] transition-colors"
                    placeholder="Vaše ime i prezime"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2 tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#faf9f7] border border-[#e5e0da] text-[#1a1a1a] px-5 py-4 focus:outline-none focus:border-[#b91c1c] transition-colors"
                      placeholder="vas@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-2 tracking-wide">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#faf9f7] border border-[#e5e0da] text-[#1a1a1a] px-5 py-4 focus:outline-none focus:border-[#b91c1c] transition-colors"
                      placeholder="+381 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#1a1a1a] mb-2 tracking-wide">
                    Koja usluga vas zanima?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#faf9f7] border border-[#e5e0da] text-[#1a1a1a] px-5 py-4 focus:outline-none focus:border-[#b91c1c] transition-colors"
                  >
                    <option value="">Izaberite uslugu</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-2 tracking-wide">
                    Poruka *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#faf9f7] border border-[#e5e0da] text-[#1a1a1a] px-5 py-4 focus:outline-none focus:border-[#b91c1c] transition-colors resize-none"
                    placeholder="Opišite vaše potrebe ili postavite pitanje..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#b91c1c] text-white px-10 py-5 text-sm font-medium tracking-[0.15em] uppercase hover:bg-[#991b1b] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
                >
                  {isSubmitting ? (
                    'Slanje...'
                  ) : (
                    <>
                      <Send size={18} />
                      Pošaljite poruku
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">Kako do nas</p>
              <h2 className="font-serif text-3xl text-[#1a1a1a] mb-8">
                Informacije
              </h2>
              <div className="w-16 h-[2px] bg-[#b91c1c] mb-10" />

              <div className="space-y-10">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-[#e5e0da] flex-shrink-0">
                    <MapPin size={24} className="text-[#b91c1c]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] font-medium mb-2">Adresa</h3>
                    <p className="text-[#6b6b6b] font-light">Kosovska 51, Beograd, 11000</p>
                    <div className="flex gap-3 mt-2 text-sm">
                      <a
                        href="https://maps.app.goo.gl/1QuFk4f2xaXxMegp7"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#6b6b6b] font-light hover:text-[#b91c1c] transition-colors"
                      >
                        Google Maps
                      </a>
                      <a
                        href="https://maps.apple/p/ad.WyF4.88me0~"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#6b6b6b] font-light hover:text-[#b91c1c] transition-colors"
                      >
                        Apple Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-[#e5e0da] flex-shrink-0">
                    <Phone size={24} className="text-[#b91c1c]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] font-medium mb-2">Telefon</h3>
                    <a href="tel:+381628412909" className="text-[#6b6b6b] font-light hover:text-[#b91c1c] transition-colors">
                      +381 62 841 29 09
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-[#e5e0da] flex-shrink-0">
                    <Mail size={24} className="text-[#b91c1c]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] font-medium mb-2">Email</h3>
                    <a href="mailto:mdterzic@gmail.com" className="text-[#6b6b6b] font-light hover:text-[#b91c1c] transition-colors">
                      mdterzic@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-[#e5e0da] flex-shrink-0">
                    <Clock size={24} className="text-[#b91c1c]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#1a1a1a] font-medium mb-4">Radno vreme</h3>
                    <div className="space-y-2">
                      {workingHours.map((item) => (
                        <div key={item.day} className="flex justify-between text-sm">
                          <span className="text-[#6b6b6b] font-light">{item.day}</span>
                          <span className={item.hours === 'Zatvoreno' ? 'text-[#b91c1c]' : 'text-[#1a1a1a]'}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video w-full overflow-hidden rounded-[1.5rem] border border-[#e5ddd3] bg-[#f5f3f0] p-1.5 shadow-lg">
                <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-0.375rem)] border border-[#efe7dd]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4776961904257!2d20.4794!3d44.8039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ4JzE0LjAiTiAyMMKwMjgnNDUuOCJF!5e0!3m2!1sen!2srs!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.35) sepia(0.2) saturate(0.85) hue-rotate(-10deg) contrast(0.92)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokacija ordinacije Dr. Terzić"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
