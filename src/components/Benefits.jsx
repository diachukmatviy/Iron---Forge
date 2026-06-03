import FadeIn from "./FadeIn";
import s from "./Benefits.module.css";

const BENEFITS = [
  {
    icon: "⚡",
    title: "Science-Backed Programming",
    desc: "Every workout is built on peer-reviewed sports science. Progressive overload, periodization, and recovery protocols engineered for maximum results.",
  },
  {
    icon: "🎯",
    title: "Custom Body Targets",
    desc: "Your first session includes a full body composition scan and goal mapping. Your program is built around your body, your schedule, your life.",
  },
  {
    icon: "🔥",
    title: "Zero Plateau Guarantee",
    desc: "Our adaptive training system detects stagnation before it happens. If you stop progressing, your program updates automatically within 48 hours.",
  },
  {
    icon: "📲",
    title: "24/7 Coach Access",
    desc: "Message your personal coach anytime through our app. Get form checks, nutrition advice, and motivation when you need it — not just during sessions.",
  },
  {
    icon: "🍽️",
    title: "Precision Nutrition Plans",
    desc: "Macro targets calibrated to your goal, not a generic template. Weekly adjustments based on your weigh-ins and performance data.",
  },
  {
    icon: "🏆",
    title: "Transformation Competitions",
    desc: "Quarterly 12-week challenges with real prizes. Community accountability that makes skipping the gym feel like betrayal — in the best way.",
  },
];

export default function Benefits() {
  return (
    <section id="programs" className={s.section}>
      <div className={s.container}>
        <FadeIn>
          <div className={s.header}>
            <span className="section-label">Why Iron Forge</span>
            <h2 className="section-heading">
              THIS IS NOT YOUR
              <br />
              <span>AVERAGE GYM.</span>
            </h2>
            <p>
              Most gyms sell access to equipment. We sell results. Here's the
              difference.
            </p>
          </div>
        </FadeIn>

        <div className={s.grid}>
          {BENEFITS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className={s.card}>
                <div className={s.icon}>{item.icon}</div>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardText}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className={s.ctaWrap}>
            <a href="#pricing" className="btn-primary">
              Start My 7-Day Free Trial →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
