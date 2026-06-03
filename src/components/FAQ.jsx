import { useState } from "react";
import FadeIn from "./FadeIn";
import s from "./FAQ.module.css";

const FAQS = [
  {
    q: "Do I need fitness experience to join?",
    a: "Not at all. We have members ranging from complete beginners to competitive athletes. Your program is built from scratch around your current fitness level. Our coaches specialize in meeting you exactly where you are.",
  },
  {
    q: "How does the 7-day free trial work?",
    a: "You get full access to the gym, a coach intake session, and your first custom workout plan — no credit card required. After 7 days, if you want to continue, you pick a plan. If not, you walk away with zero charges.",
  },
  {
    q: "What happens if I don't see results in 90 days?",
    a: "We extend your membership for free until you do. Our 90-Day Transformation Guarantee is real — if you follow the program and attend your check-ins, results are contractually guaranteed or you don't pay another cent.",
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Yes to both. No contracts. You can freeze for up to 3 months per year or cancel anytime with 7 days notice. One tap in the app — no phone-call maze.",
  },
  {
    q: "What are your gym hours?",
    a: "Standard hours are 5AM–11PM, 7 days a week. Elite members have 24/7 keycard access. Holiday hours are posted in the app 2 weeks in advance.",
  },
  {
    q: "Do you offer nutrition coaching or just workouts?",
    a: "Forge and Elite plans include full macro-targeted nutrition plans built by a registered dietitian. Not generic calorie trackers — actual meal structures, timing protocols, and weekly adjustments based on your biometrics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className={s.section}>
      <div className={s.container}>
        <FadeIn>
          <div className={s.header}>
            <span className="section-label">FAQs</span>
            <h2 className="section-heading">
              GOT QUESTIONS?
              <br />
              <span>WE'VE GOT ANSWERS.</span>
            </h2>
          </div>
        </FadeIn>

        {FAQS.map((faq, i) => (
          <FadeIn key={faq.q} delay={i * 0.05}>
            <div className={s.item}>
              <button
                className={s.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span
                  className={`${s.icon} ${openIndex === i ? s.iconOpen : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className={`${s.answerWrap} ${openIndex === i ? s.answerWrapOpen : ""}`}
              >
                <p className={s.answer}>{faq.a}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
