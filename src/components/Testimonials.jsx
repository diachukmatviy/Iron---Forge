import FadeIn from "./FadeIn";
import s from "./Testimonials.module.css";

const REVIEWS = [
  {
    name: "Ashley T.",
    age: 27,
    goal: "Fat Loss",
    text: "Down 31 lbs in 12 weeks. I've tried every diet and every gym. The difference here is the coaches actually hold you accountable — the weekly check-ins are non-negotiable and it works.",
  },
  {
    name: "Ryan C.",
    age: 31,
    goal: "Muscle Gain",
    text: "Gained 22 lbs of lean mass in 6 months at 31 years old. The programming is incredibly precise. I've never had a coach who knew so much about how my body responds to training.",
  },
  {
    name: "Priya N.",
    age: 24,
    goal: "Athletic Performance",
    text: "My vertical improved by 4 inches, my 100m time dropped by 0.3s. Not just a gym — they treated me like an athlete from day one.",
  },
  {
    name: "Marcus W.",
    age: 35,
    goal: "Body Recomposition",
    text: "I work 60-hour weeks. Iron Forge built a program around my actual life. Lost 18 lbs of fat and added muscle simultaneously. Still can't quite believe it.",
  },
  {
    name: "Lena S.",
    age: 29,
    goal: "Post-Pregnancy Fitness",
    text: "6 months post-partum, completely new body. The coaches made me feel safe, seen, and challenged. This isn't a gym — it's a transformation ecosystem.",
  },
  {
    name: "Chris P.",
    age: 22,
    goal: "First Time Lifter",
    text: "Zero experience coming in. Within 3 months I deadlifted 2x my bodyweight. The coaching staff doesn't let you stay a beginner for long.",
  },
];

export default function Testimonials() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <FadeIn>
          <div className={s.header}>
            <span className="section-label">Member Stories</span>
            <h2 className="section-heading">
              3,200 PEOPLE
              <br />
              <span>CAN'T BE WRONG.</span>
            </h2>
          </div>
        </FadeIn>

        <div className={s.grid}>
          {REVIEWS.map((r, i) => (
            <FadeIn key={r.name} delay={i * 0.07}>
              <div className={s.card}>
                <div className={s.stars}>★★★★★</div>
                <p className={s.quote}>"{r.text}"</p>
                <div className={s.footer}>
                  <div>
                    <div className={s.name}>
                      {r.name}, {r.age}
                    </div>
                    <div className={s.goal}>Goal: {r.goal}</div>
                  </div>
                  <div className={s.avatar}>{r.name[0]}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
