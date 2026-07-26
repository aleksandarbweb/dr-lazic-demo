"use client"

import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'
import { useTranslation } from '@/lib/i18n/LanguageContext'
import { businessData } from '@/lib/business-data'

const workDayHours = `${businessData.openingHours.opens} - ${businessData.openingHours.closes}`
const workingHoursData = [
  workDayHours,
  workDayHours,
  workDayHours,
  workDayHours,
  workDayHours,
  null,
  null,
]

export default function KontaktPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background pt-36 pb-20">
        <div className="hidden md:block absolute right-8 top-1/3 w-[1px] h-32 bg-primary/30" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            {t.kontakt.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground">
            {t.kontakt.title}
          </h1>
          <div className="w-24 h-[2px] bg-primary mx-auto mt-8" />
          <p className="text-muted-foreground mt-8 max-w-xl mx-auto font-light">
            {t.kontakt.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">{t.kontakt.formEyebrow}</p>
              <h2 className="font-serif text-3xl text-foreground mb-8">
                {t.kontakt.formTitle}
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-10" />

              <div className="mb-8 p-5 bg-background border border-border text-muted-foreground text-sm leading-relaxed">
                {t.kontakt.formInterimMessage}
              </div>

              {/* Direct contact actions — the real, working path until the form has a backend. */}
              <div className="mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href={`tel:${businessData.telephone}`}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-[#991b1b] transition-colors"
                >
                  <Phone size={16} />
                  {t.kontakt.callCta}
                </a>
                <a
                  href={`mailto:${businessData.email}`}
                  className="flex items-center justify-center gap-2 border border-foreground text-foreground px-5 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-foreground hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  {t.kontakt.emailCta}
                </a>
                <a
                  href={businessData.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-foreground text-foreground px-5 py-4 text-sm font-medium tracking-[0.1em] uppercase hover:bg-foreground hover:text-white transition-colors"
                >
                  <Instagram size={16} />
                  {t.kontakt.instagramCta}
                </a>
              </div>

              {/* Form preview, visually disabled — not wired to a backend yet (Future Door). */}
              <fieldset disabled aria-disabled="true" className="space-y-6 opacity-50 cursor-not-allowed">
                <legend className="sr-only">{t.kontakt.formInterimMessage}</legend>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                    {t.kontakt.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-background border border-border text-foreground px-5 py-4"
                    placeholder={t.kontakt.namePlaceholder}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                      {t.kontakt.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-background border border-border text-foreground px-5 py-4"
                      placeholder={t.kontakt.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                      {t.kontakt.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-background border border-border text-foreground px-5 py-4"
                      placeholder={t.kontakt.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                    {t.kontakt.serviceLabel}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-background border border-border text-foreground px-5 py-4"
                  >
                    <option value="">{t.kontakt.servicePlaceholder}</option>
                    {t.kontakt.services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 tracking-wide">
                    {t.kontakt.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-background border border-border text-foreground px-5 py-4 resize-none"
                    placeholder={t.kontakt.messagePlaceholder}
                  />
                </div>
              </fieldset>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">{t.kontakt.infoEyebrow}</p>
              <h2 className="font-serif text-3xl text-foreground mb-8">
                {t.kontakt.infoTitle}
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-10" />

              <div className="space-y-10">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-border flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">{t.kontakt.addressLabel}</h3>
                    <p className="text-muted-foreground font-light">{businessData.addressDisplay}</p>
                    <div className="flex gap-3 mt-2 text-sm">
                      <a
                        href={businessData.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground font-light hover:text-primary transition-colors"
                      >
                        Google Maps
                      </a>
                      <a
                        href={businessData.appleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground font-light hover:text-primary transition-colors"
                      >
                        Apple Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-border flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">{t.kontakt.phoneContactLabel}</h3>
                    <a href={`tel:${businessData.telephone}`} className="text-muted-foreground font-light hover:text-primary transition-colors">
                      {businessData.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-border flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">{t.kontakt.emailContactLabel}</h3>
                    <a href={`mailto:${businessData.email}`} className="text-muted-foreground font-light hover:text-primary transition-colors">
                      {businessData.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 flex items-center justify-center border border-border flex-shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground font-medium mb-4">{t.kontakt.hoursLabel}</h3>
                    <div className="space-y-2">
                      {t.kontakt.workingDays.map((day, i) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="text-muted-foreground font-light">{day}</span>
                          <span className={workingHoursData[i] === null ? 'text-primary' : 'text-foreground'}>
                            {workingHoursData[i] ?? t.kontakt.closed}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 aspect-video w-full overflow-hidden rounded-[1.5rem] border border-[#e5ddd3] bg-[#f5f3f0] p-1.5 shadow-lg">
                <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-0.375rem)] border border-[#efe7dd]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.4903897087634!2d20.465245076415652!3d44.81157337107071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aadeeb46a91%3A0x758c96041e4f1d68!2sDr%20Terzic!5e0!3m2!1sen!2srs!4v1782281143179!5m2!1sen!2srs"
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
