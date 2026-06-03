import s from "./Hero.module.css";

const STATS = [
  ["3,200+", "Members Transformed"],
  ["94%", "Hit Their 90-Day Goal"],
  ["12+", "Elite Coaches"],
  ["4.9★", "Average Rating"],
];

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.gridBg} />
      <div className={s.rightFade} />
      <div className={s.rightLetters}>IF</div>

      <div className={s.content}>
        <div className={s.inner}>
          <div className={s.badge}>
            <span className={s.badgeDot} />
            Only 14 Spots Remaining — Free Trial Ends Friday
          </div>

          <h1 className={s.headline}>
            FORGE YOUR
            <br />
            <span>BEST BODY</span>
            <br />
            IN 90 DAYS.
          </h1>

          <p className={s.subtext}>
            Elite programming. Expert coaching. A proven system that has
            transformed over 3,200 members — from first-timers to competitive
            athletes. Your transformation starts here.
          </p>

          <div className={s.ctaRow}>
            <a href="#pricing" className="btn-primary">
              Claim Free Trial
            </a>
            <a href="#programs" className="btn-secondary">
              View Programs →
            </a>
          </div>

          <div className={s.statsRow}>
            {STATS.map(([value, label]) => (
              <div key={label} className={s.stat}>
                <div className={s.statValue}>{value}</div>
                <div className={s.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={s.bottomFade} />
    </section>
  );
}
