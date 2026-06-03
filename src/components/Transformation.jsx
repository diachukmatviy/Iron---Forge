import FadeIn from "./FadeIn";
import s from "./Transformation.module.css";

const STATS = [
  { before: "22%", after: "12%", label: "Body Fat" },
  { before: "165 lbs", after: "182 lbs", label: "Lean Mass" },
  { before: "0", after: "3x/wk", label: "Training Freq." },
  { before: "Guessing", after: "Precision", label: "Nutrition" },
];

export default function Transformation() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <FadeIn>
          <div className={s.header}>
            <span className="section-label">Real Results</span>
            <h2 className="section-heading">
              WHAT 90 DAYS
              <br />
              <span>ACTUALLY LOOKS LIKE.</span>
            </h2>
          </div>
        </FadeIn>

        <div className={s.twoCol}>
          <FadeIn>
            <div className={s.beforeAfter}>
              <div className={s.cardGrid}>
                <div className={`${s.card} ${s.cardBefore}`}>
                  <div className={s.cardBgLetter}>B</div>
                  <div className={s.cardLabel}>
                    <div className={s.cardTag}>Before</div>
                    <div className={s.cardDay}>Day 1</div>
                  </div>
                </div>
                <div className={`${s.card} ${s.cardAfter}`}>
                  <div className={s.cardBgLetter}>A</div>
                  <div className={s.cardLabel}>
                    <div className={s.cardTag}>After</div>
                    <div className={s.cardDay}>Day 90</div>
                  </div>
                </div>
              </div>
              <div className={s.caption}>
                Marcus T. — Lost 24 lbs fat, gained 17 lbs muscle
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className={s.quoteCol}>
              <p className={s.quote}>
                "I'd tried four other gyms in three years. Nothing stuck. Iron
                Forge was different — the coaches actually gave a damn about my
                results, not just my membership fee. 90 days later I'm in the
                best shape of my life."
              </p>
              <p className={s.quoteAuthor}>
                — Marcus T., 29, Software Engineer
              </p>

              <div className={s.statsGrid}>
                {STATS.map((stat) => (
                  <div key={stat.label} className={s.statCard}>
                    <div className={s.statLabel}>{stat.label}</div>
                    <div className={s.statValues}>
                      <span className={s.statBefore}>{stat.before}</span>
                      <span className={s.arrow}>→</span>
                      <span className={s.statAfter}>{stat.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
