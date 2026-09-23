import { useEffect } from 'react'
import gearClock1 from '../assets/gear-clock/gear-clock1.png'
import gearClock2 from '../assets/gear-clock/gear-clock2.png'

const BEcon = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="hero-mesh relative flex flex-col items-center justify-center px-[var(--page-gutter)] text-center">
        <div className="hero-gears" aria-hidden="true">
          <div className="absolute -right-16 top-[18%] opacity-50 md:-right-20 md:top-[30%] md:opacity-100 lg:-right-24">
            <div className="hero-gear-spin relative h-[88px] w-[88px] md:h-[220px] md:w-[220px] lg:h-[300px] lg:w-[300px] xl:h-[340px] xl:w-[340px]">
              <img src={gearClock1} alt="" className="hero-clock-icon" />
            </div>
          </div>
          <div className="absolute -left-14 top-[8%] opacity-50 md:-left-16 md:top-[12%] md:opacity-100 lg:-left-20">
            <div className="hero-gear-spin-rev relative h-[80px] w-[80px] md:h-[200px] md:w-[200px] lg:h-[260px] lg:w-[260px] xl:h-[300px] xl:w-[300px]">
              <img src={gearClock2} alt="" className="hero-clock-icon" />
            </div>
          </div>
          <div className="hero-gear-float absolute top-24 right-16 hidden opacity-80 md:top-28 md:right-36 md:block lg:top-32 lg:right-48 xl:right-60">
            <div className="relative h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
              <img src={gearClock1} alt="" className="hero-clock-icon" />
            </div>
          </div>
          <div className="absolute -left-20 bottom-[6%] hidden md:block md:-left-20 lg:-left-24 lg:bottom-[8%]">
            <div className="hero-gear-spin-rev relative h-[180px] w-[180px] lg:h-[220px] lg:w-[220px] xl:h-[250px] xl:w-[250px]">
              <img src={gearClock2} alt="" className="hero-clock-icon" />
            </div>
          </div>
        </div>

        <div className="site-wrap relative z-[2]">
          <span className="hero-rule" aria-hidden="true" />
          <h1 className="text-hero font-semibold text-ink tracking-[-0.038em] text-balance max-w-[18ch] mx-auto [animation:fade-up_1.2s_var(--ease-out-quart)_both]">
            BEcon&apos;26
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-muted max-w-[34rem] mx-auto [animation:fade-up_1.2s_var(--ease-out-quart)_0.16s_both]">
            Coming Soon
          </p>
        </div>
      </section>
    </main>
  )
}

export default BEcon
