"use client"

import Image from 'next/image'
import { SectionTitle } from '@/components/section-title'
import { ExpandableBio } from '@/components/expandable-bio'
import {
  HeartHandshake,
  ShieldCheck,
  Award,
  CircleUserRound,
  Stethoscope,
  ScanEye,
  Zap,
  Radio,
  Sparkles,
  Hourglass,
  Droplets,
} from 'lucide-react'
import { FadeUp, StaggerChildren, StaggerItem } from '@/components/motion-primitives'
import { useTranslation } from '@/lib/i18n/LanguageContext'

const valueIcons = [HeartHandshake, ShieldCheck, Award]
const bavimoSeIcons = [Stethoscope, ScanEye, Zap, Radio, Sparkles, Hourglass, Droplets]

export default function ONamaPage() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#faf9f7] pt-36 pb-20">
        <div className="hidden md:block absolute left-8 top-1/3 w-[1px] h-32 bg-[#b91c1c]/30" />
        <FadeUp>
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-[#b91c1c] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              {t.onama.eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight">
              {t.onama.title}
            </h1>
            <div className="w-24 h-[2px] bg-[#b91c1c] mx-auto mt-8" />
            <p className="text-[#6b6b6b] mt-8 max-w-2xl mx-auto font-light leading-relaxed">
              {t.onama.heroIntro}
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Clinic Story Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp delay={0.1}>
                <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">{t.onama.storyEyebrow}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
                  {t.onama.storyTitle}
                </h2>
                <div className="w-16 h-[2px] bg-[#b91c1c] mb-8" />
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-[#6b6b6b] leading-relaxed mb-5 font-light">
                  {t.onama.storyP1}
                </p>
                <p className="text-[#6b6b6b] leading-relaxed font-light">
                  {t.onama.storyP2}
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.3} className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/Services/ordinacijaonama.png"
                alt="Unutrašnjost ordinacije Dr. Terzić"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#b91c1c]" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#b91c1c]" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="bg-[#1a1a1a] py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7">
              {t.onama.tagline.map((word, index) => (
                <span key={word} className="flex items-center gap-x-5 sm:gap-x-7">
                  <span className="font-serif text-lg sm:text-xl text-white/90 tracking-wide text-center">
                    {word}
                  </span>
                  {index < t.onama.tagline.length - 1 && (
                    <span className="w-1.5 h-1.5 bg-[#b91c1c]" />
                  )}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-[#faf9f7] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeUp>
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4">{t.onama.approachEyebrow}</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-8">
              {t.onama.approachTitle}
            </h2>
            <div className="w-16 h-[2px] bg-[#b91c1c] mx-auto mb-8" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[#6b6b6b] leading-relaxed mb-5 font-light">
              {t.onama.storyP3}
            </p>
            <p className="text-[#6b6b6b] leading-relaxed font-light">
              {t.onama.storyP4}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Bavimo Se Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-4 text-center">{t.onama.bavimoSeEyebrow}</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <SectionTitle title={t.onama.bavimoSeTitle} />
          </FadeUp>
          <StaggerChildren className="flex flex-wrap justify-center gap-6">
            {t.onama.bavimoSeItems.map((item, index) => {
              const Icon = bavimoSeIcons[index]
              return (
                <StaggerItem
                  key={item}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <div className="group h-full flex flex-col items-center text-center gap-4 border border-[#e5e0da] bg-[#faf9f7] px-6 py-10 transition-all duration-500 hover:border-[#b91c1c]/40 hover:-translate-y-1 hover:shadow-lg">
                    <div className="w-14 h-14 flex items-center justify-center border border-[#b91c1c]/30 text-[#b91c1c] transition-all duration-500 group-hover:bg-[#b91c1c]/5 group-hover:scale-110">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <p className="text-[#1a1a1a] font-light leading-snug">{item}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="bg-[#f5f3f0] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTitle title={t.onama.specialistsTitle} />

          {/* Dr. Marta Terzić */}
          <div id="marta-terzic" className="mb-24 scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1">
                <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto overflow-hidden shadow-2xl">
                  <Image
                    src="/images/people/Marta/marta new in labcoat 1.png"
                    alt="Dr. Marta Terzić"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#b91c1c]" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#b91c1c]" />
                </div>
              </div>
              <div className="lg:col-span-2 border-l-2 border-[#b91c1c] pl-8">
                <h3 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-3">
                  Dr. Marta Terzić
                </h3>
                <p className="text-[#b91c1c] font-medium text-sm tracking-[0.15em] uppercase mb-6">
                  {t.onama.marta.title}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {t.onama.marta.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 border border-[#e5e0da] bg-white px-4 py-2 text-xs font-medium tracking-wide text-[#1a1a1a]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#b91c1c]" />
                      {badge}
                    </span>
                  ))}
                </div>
                <ExpandableBio
                  paragraphs={t.onama.marta.bio}
                  readMoreLabel={t.onama.readMoreLabel}
                  readLessLabel={t.onama.readLessLabel}
                />
                <div className="mt-8">
                  <h4 className="text-[#1a1a1a] font-medium mb-4 text-sm tracking-wide uppercase">
                    {t.onama.marta.specializationsTitle}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {t.onama.marta.specializations.map((spec) => (
                      <li key={spec} className="text-[#6b6b6b] text-sm flex items-center gap-3 font-light">
                        <span className="w-2 h-2 bg-[#b91c1c]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Biljana Petković */}
          {/* TODO: replace with real CV content from Marta — bio below is provisional pending client-supplied CV (see docs/client-content-map-2026-07-09.md §7) */}
          <div id="biljana-petkovic" className="scroll-mt-28 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1 lg:order-2">
                <div className="relative aspect-[3/4] w-full max-w-[400px] mx-auto overflow-hidden shadow-2xl">
                  <Image
                    src="/images/people/Biljana/drbiljanapetkovicheadshot.png"
                    alt="Dr. Biljana Petković"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#b91c1c]" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#b91c1c]" />
                </div>
              </div>
              <div className="lg:col-span-2 lg:order-1 border-r-2 border-[#b91c1c] pr-8 lg:text-right">
                <h3 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-3">
                  Dr. Biljana Petković
                </h3>
                <p className="text-[#b91c1c] font-medium text-sm tracking-[0.15em] uppercase mb-8">
                  {t.home.doctorsList[1].title}
                </p>
                <ExpandableBio
                  paragraphs={t.onama.biljana.bio}
                  readMoreLabel={t.onama.readMoreLabel}
                  readLessLabel={t.onama.readLessLabel}
                />
                <div className="mt-8">
                  <h4 className="text-[#1a1a1a] font-medium mb-4 text-sm tracking-wide uppercase">
                    {t.onama.biljana.specializationsTitle}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {t.onama.biljana.specializations.map((spec) => (
                      <li key={spec} className="text-[#6b6b6b] text-sm flex items-center lg:flex-row-reverse gap-3 font-light">
                        <span className="w-2 h-2 bg-[#b91c1c]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of the team */}
          <div className="pt-16 border-t border-[#e5e0da]">
            <p className="text-[#b91c1c] text-sm tracking-[0.2em] uppercase mb-10 text-center">
              {t.onama.otherTeamTitle}
            </p>

            {/* Snežana — spotlight card */}
            <div className="max-w-4xl mx-auto mb-12 border border-[#e5e0da] bg-white p-8 md:p-10">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-full border border-[#e5e0da] bg-[#faf9f7]">
                  <CircleUserRound size={30} className="text-[#b91c1c]" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#1a1a1a] mb-1">{t.onama.snezana.name}</h4>
                  <p className="text-[#b91c1c] text-xs font-medium tracking-[0.1em] uppercase mb-4">{t.onama.snezana.title}</p>
                  {t.onama.snezana.bio.map((p, i) => (
                    <p key={i} className="text-[#6b6b6b] text-sm leading-relaxed font-light mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Rest of the cosmetologists */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {t.onama.otherTeam.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center gap-3">
                  <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full border border-[#e5e0da] bg-white">
                    <CircleUserRound size={22} className="text-[#b91c1c]" />
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] font-medium">{member.name}</p>
                    <p className="text-[#6b6b6b] text-xs uppercase tracking-[0.1em]">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeUp>
            <SectionTitle title={t.onama.valuesTitle} />
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {t.onama.values.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <StaggerItem key={value.title}>
                  <div className="text-center group">
                    <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center border border-[#e5e0da] transition-all duration-500 group-hover:border-[#b91c1c]/40 group-hover:bg-[#b91c1c]/5 group-hover:-translate-y-1">
                      <Icon size={36} className="text-[#b91c1c] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-3deg]" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4 transition-colors duration-300 group-hover:text-[#b91c1c]">
                      {value.title}
                    </h3>
                    <p className="text-[#6b6b6b] leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </div>
      </section>
    </>
  )
}
