'use client'

import { useEffect } from 'react'
import { useTranslation } from '@/lib/i18n/LanguageContext'

export function IntroOverlay() {
  const { t } = useTranslation()

  useEffect(() => {
    // ── Lock scroll ──
    // Target both to ensure absolutely no grey bar / scrollbar gutter
    document.documentElement.classList.add('intro-active')
    document.body.classList.add('intro-active')
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    // Helpers
    const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

    // ── Create Elements ──
    const overlay = document.createElement('div')
    overlay.id = 'introOverlay'
    overlay.setAttribute('aria-hidden', 'true')
    document.body.appendChild(overlay)

    // Background layer (Video)
    const introBg = document.createElement('video')
    introBg.className = 'intro-bg'
    introBg.src = '/Videos/overlay intro video - skin.MOV'
    introBg.autoplay = true
    introBg.muted = true
    introBg.loop = true
    introBg.setAttribute('playsinline', 'true')
    introBg.setAttribute('muted', 'true')
    introBg.setAttribute('autoplay', 'true')
    overlay.appendChild(introBg)

    const introWash = document.createElement('div')
    introWash.className = 'intro-wash'
    overlay.appendChild(introWash)

    // Grain Canvas
    const grainCanvas = document.createElement('canvas')
    grainCanvas.id = 'introGrain'
    overlay.appendChild(grainCanvas)

    // Reveal Container
    const reveal = document.createElement('div')
    reveal.className = 'intro-reveal'
    overlay.appendChild(reveal)

    // Logo Wrap
    const logoWrap = document.createElement('div')
    logoWrap.className = 'intro-logo-wrap'
    reveal.appendChild(logoWrap)

    const logoMask = document.createElement('div')
    logoMask.className = 'intro-logo-mask'
    logoWrap.appendChild(logoMask)

    const logoImg = document.createElement('img')
    logoImg.id = 'introLogo'
    logoImg.src = '/images/Logos/dr terzic beli logo.png'
    logoImg.alt = 'Dr Terzić'
    logoMask.appendChild(logoImg)

    // Copy
    const copy = document.createElement('div')
    copy.className = 'intro-copy'
    reveal.appendChild(copy)

    const kicker = document.createElement('div')
    kicker.className = 'intro-kicker'
    kicker.textContent = t.home.hero.sloganEyebrow || 'VIŠE OD 20 GODINA SA VAMA'
    copy.appendChild(kicker)

    const title = document.createElement('h1')
    title.className = 'intro-title'
    title.textContent = t.home.hero.sloganMain || 'Briga o zdravlju i lepoti'
    copy.appendChild(title)

    const sub = document.createElement('div')
    sub.className = 'intro-sub'
    sub.textContent = t.home.hero.sloganItalic || 'na prirodan i bezbedan način.'
    copy.appendChild(sub)

    // Bars
    const barsContainer = document.createElement('div')
    barsContainer.className = 'intro-bars'
    for (let i = 0; i < 6; i++) {
      const span = document.createElement('span')
      barsContainer.appendChild(span)
    }
    overlay.appendChild(barsContainer)

    // ── Inject CSS ──
    const styleTag = document.createElement('style')
    styleTag.id = 'intro-styles'
    styleTag.textContent = `
      :root {
        --intro-bg: #000;
        --intro-text: #ffffff;
        --intro-muted: #e0e0e0;
        --intro-red: #ff4d4d;
        --intro-shadow: rgba(0, 0, 0, 0.4);
        --intro-ease: cubic-bezier(0.22, 1, 0.36, 1);
      }

      html.intro-active,
      body.intro-active {
        overflow: hidden !important;
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
        height: 100% !important;
        width: 100% !important;
      }
      
      html.intro-active::-webkit-scrollbar,
      body.intro-active::-webkit-scrollbar {
        display: none !important;
      }

      body.intro-active main,
      body.intro-active nav,
      body.intro-active footer,
      body.intro-active main h1,
      body.intro-active main p,
      body.intro-active main div.mt-10 {
        opacity: 0 !important;
        transform: translateY(30px) !important;
        filter: blur(12px) !important;
        transition: none !important;
      }

      #introOverlay {
        position: fixed;
        inset: 0;
        z-index: 99999;
        overflow: hidden;
        background: transparent; /* VERY IMPORTANT: Must be transparent to reveal site underneath */
        display: grid;
        place-items: center;
        isolation: isolate;
      }

      .intro-bg {
        position: absolute;
        inset: -2%;
        width: 104%;
        height: 104%;
        object-fit: cover;
        transform: scale(1.03);
        z-index: 0;
        will-change: transform, opacity;
      }

      .intro-wash {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        z-index: 0;
        opacity: 1;
        will-change: transform, opacity;
      }

      #introGrain {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        opacity: 0.12;
        pointer-events: none;
        z-index: 1;
      }

      .intro-reveal {
        position: relative;
        z-index: 3;
        width: min(92vw, 1280px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        padding: 2rem;
        text-align: center;
      }

      .intro-logo-wrap {
        width: min(86vw, 1180px);
        opacity: 0;
        transform: translateY(26px) scale(0.985);
        filter: blur(10px);
        transition:
          opacity 1s var(--intro-ease),
          transform 1.2s var(--intro-ease),
          filter 1.2s var(--intro-ease);
        will-change: transform, opacity, filter;
      }

      .intro-logo-wrap.is-in {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
      }

      .intro-logo-mask {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      .intro-logo-mask::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          rgba(245,240,232,0) 0%,
          rgba(255,255,255,0.65) 46%,
          rgba(255,255,255,0) 58%
        );
        transform: translateX(-140%);
        opacity: 0;
        pointer-events: none;
      }

      .intro-logo-wrap.sweep .intro-logo-mask::after {
        opacity: 1;
        animation: introLightSweep 1.5s var(--intro-ease) forwards;
      }

      #introLogo {
        display: block;
        width: 100%;
        height: auto;
        max-height: 42vh;
        object-fit: contain;
        transform-origin: center center;
        filter: drop-shadow(0 10px 18px var(--intro-shadow));
        will-change: transform, filter;
      }

      .intro-copy {
        margin-top: 0.75rem;
        max-width: 900px;
        opacity: 0;
        transform: translateY(18px);
        transition:
          opacity 0.9s var(--intro-ease),
          transform 0.9s var(--intro-ease),
          filter 0.9s var(--intro-ease);
        will-change: transform, opacity;
      }

      .intro-copy.is-in {
        opacity: 1;
        transform: translateY(0);
      }

      .intro-kicker {
        font-size: 11px;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: var(--intro-red);
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .intro-title {
        margin: 0;
        font-family: var(--font-playfair), serif;
        font-size: clamp(2.1rem, 4.3vw, 4.6rem);
        line-height: 1.08;
        font-weight: 600;
        color: var(--intro-text);
      }

      .intro-sub {
        margin-top: 0.45rem;
        font-family: var(--font-playfair), serif;
        font-size: clamp(1.35rem, 2.7vw, 2.6rem);
        line-height: 1.15;
        font-style: italic;
        color: var(--intro-muted);
        font-weight: 400;
      }

      .intro-bars {
        position: absolute;
        inset: 0;
        z-index: 20;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        pointer-events: none;
        opacity: 0;
      }

      .intro-bars span {
        display: block;
        height: 100%;
        background: #000;
        transform: scaleY(1);
        transform-origin: top center;
        will-change: transform, opacity;
      }

      @keyframes introLightSweep {
        to { transform: translateX(140%); }
      }

      @keyframes introBarOpen {
        to { transform: scaleY(0); }
      }

      @keyframes introBgLift {
        to { transform: scale(1.1); opacity: 0; }
      }

      #introOverlay.is-revealing .intro-bars {
        opacity: 1;
      }

      #introOverlay.is-revealing .intro-bars span {
        animation: introBarOpen 1.2s var(--intro-ease) forwards;
      }

      #introOverlay.is-revealing .intro-bars span:nth-child(2) { animation-delay: 0.05s; }
      #introOverlay.is-revealing .intro-bars span:nth-child(3) { animation-delay: 0.1s; }
      #introOverlay.is-revealing .intro-bars span:nth-child(4) { animation-delay: 0.15s; }
      #introOverlay.is-revealing .intro-bars span:nth-child(5) { animation-delay: 0.2s; }
      #introOverlay.is-revealing .intro-bars span:nth-child(6) { animation-delay: 0.25s; }

      #introOverlay.is-revealing .intro-bg,
      #introOverlay.is-revealing .intro-wash {
        animation: introBgLift 1.3s var(--intro-ease) forwards;
      }

      #introOverlay.is-out .intro-copy {
        opacity: 0;
        transform: translateY(-10px);
        filter: blur(8px);
        transition: all 0.8s var(--intro-ease);
      }

      #introOverlay.is-out .intro-logo-wrap {
        transform: translateY(-6px) scale(1.02);
        filter: blur(2px);
        opacity: 0;
        transition: all 0.8s var(--intro-ease);
      }
    `
    document.head.appendChild(styleTag)

    // ── Grain Animation ──
    const ctx = grainCanvas.getContext('2d')!
    let grainRAF: number
    function resizeGrain() {
      grainCanvas.width = window.innerWidth
      grainCanvas.height = window.innerHeight
    }
    resizeGrain()
    window.addEventListener('resize', resizeGrain)

    function renderGrain() {
      const w = grainCanvas.width
      const h = grainCanvas.height
      const imageData = ctx.createImageData(w, h)
      const d = imageData.data
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255
        d[i] = v
        d[i + 1] = v
        d[i + 2] = v
        d[i + 3] = 15 // Very subtle
      }
      ctx.putImageData(imageData, 0, 0)
      grainRAF = requestAnimationFrame(renderGrain)
    }
    renderGrain()

    // ── Timeline ──
    async function run() {
      await delay(200)

      // Step 1: Logo fades in
      logoWrap.classList.add('is-in')
      await delay(600)

      // Step 2: Light sweep
      logoWrap.classList.add('sweep')
      await delay(800)

      // Step 3: Copy fades in
      copy.classList.add('is-in')
      await delay(2500)

      // Step 4: Outro starts - fade/blur content
      overlay.classList.add('is-out')
      await delay(600)

      // Step 5: Reveal website via bars
      overlay.classList.add('is-revealing')
      
      // Target website elements for coordinated reveal
      const nav = document.querySelector('nav') as HTMLElement | null
      const main = document.querySelector('main') as HTMLElement | null
      const footer = document.querySelector('footer') as HTMLElement | null
      
      const revealStyle = 'opacity 2.2s cubic-bezier(0.22, 1, 0.36, 1), transform 2.2s cubic-bezier(0.22, 1, 0.36, 1), filter 2.2s cubic-bezier(0.22, 1, 0.36, 1)'

      if (nav) {
        nav.style.setProperty('transition', revealStyle, 'important')
        nav.style.setProperty('opacity', '1', 'important')
        nav.style.setProperty('transform', 'translateY(0)', 'important')
        nav.style.setProperty('filter', 'blur(0)', 'important')
      }

      // Slightly stagger the main content reveal
      await delay(300)

      if (main) {
        // Individual staggered reveal for hero elements
        const heroTitle = main.querySelector('h1') as HTMLElement | null
        const heroButtons = main.querySelector('div.mt-10') as HTMLElement | null
        const heroParagraphs = main.querySelectorAll('p')

        const elementRevealStyle = 'opacity 2.5s cubic-bezier(0.22, 1, 0.36, 1), transform 2.5s cubic-bezier(0.22, 1, 0.36, 1), filter 2.5s cubic-bezier(0.22, 1, 0.36, 1)'

        if (heroTitle) {
          heroTitle.style.setProperty('transition', elementRevealStyle, 'important')
          setTimeout(() => {
            heroTitle.style.setProperty('opacity', '1', 'important')
            heroTitle.style.setProperty('transform', 'translateY(0)', 'important')
            heroTitle.style.setProperty('filter', 'blur(0)', 'important')
          }, 100)
        }

        heroParagraphs.forEach((p, index) => {
          const el = p as HTMLElement
          el.style.setProperty('transition', elementRevealStyle, 'important')
          setTimeout(() => {
            el.style.setProperty('opacity', '1', 'important')
            el.style.setProperty('transform', 'translateY(0)', 'important')
            el.style.setProperty('filter', 'blur(0)', 'important')
          }, 300 + (index * 150))
        })

        if (heroButtons) {
          heroButtons.style.setProperty('transition', elementRevealStyle, 'important')
          setTimeout(() => {
            heroButtons.style.setProperty('opacity', '1', 'important')
            heroButtons.style.setProperty('transform', 'translateY(0)', 'important')
            heroButtons.style.setProperty('filter', 'blur(0)', 'important')
          }, 700)
        }
        
        main.style.setProperty('transition', revealStyle, 'important')
        main.style.setProperty('opacity', '1', 'important')
        main.style.setProperty('transform', 'translateY(0)', 'important')
        main.style.setProperty('filter', 'blur(0)', 'important')
      }

      if (footer) {
        footer.style.setProperty('transition', revealStyle, 'important')
        footer.style.setProperty('opacity', '1', 'important')
        footer.style.setProperty('transform', 'translateY(0)', 'important')
        footer.style.setProperty('filter', 'blur(0)', 'important')
      }

      await delay(2500)

      // Cleanup
      cancelAnimationFrame(grainRAF)
      window.removeEventListener('resize', resizeGrain)
      overlay.remove()
      styleTag.remove()
      document.documentElement.classList.remove('intro-active')
      document.body.classList.remove('intro-active')
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }

    run()

    return () => {
      cancelAnimationFrame(grainRAF)
      window.removeEventListener('resize', resizeGrain)
      const el = document.getElementById('introOverlay')
      if (el) el.remove()
      const styles = document.getElementById('intro-styles')
      if (styles) styles.remove()
      document.documentElement.classList.remove('intro-active')
      document.body.classList.remove('intro-active')
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [t])

  return null
}
