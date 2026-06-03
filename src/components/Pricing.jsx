import FadeIn from "./FadeIn";
import s from "./Pricing.module.css";

const PLANS = [
  {
    name: "Grind",
    price: "49",
    badge: null,
    desc: "For self-motivated individuals who want access and structure without hand-holding.",
    features: [
      "Full gym access (6AM–11PM)",
      "Digital workout library (200+ programs)",
      "Body scan on sign-up",
      "Group fitness classes",
      "Nutrition calculator",
      "Community app access",
    ],
    excluded: ["Personal coach", "Custom programming", "1-on-1 check-ins"],
    cta: "Start Free Trial",
    accent: false,
  },
  {
    name: "Forge",
    price: "129",
    badge: "MOST POPULAR",
    desc: "The complete transformation system. 94% of our 90-day success stories are on this plan.",
    features: [
      "Everything in Grind",
      "Dedicated personal coach",
      "Custom 12-week program",
      "Weekly 1-on-1 check-ins",
      "Precision macro plan",
      "Monthly body comp analysis",
      "Priority class booking",
      "Coach messaging (24/7)",
    ],
    excluded: [],
    cta: "Claim Free Trial",
    accent: true,
  },
  {
    name: "Elite",
    price: "299",
    badge: null,
    desc: "For athletes and executives who demand the absolute maximum — concierge-level fitness.",
    features: [
      "Everything in Forge",
      "3x weekly PT sessions",
      "Blood panel + hormone review",
      "Recovery suite (cryo, sauna, compression)",
      "Meal prep consultation",
      "24/7 facility access",
      "Guest passes (unlimited)",
      "Quarterly physique shoots",
    ],
    excluded: [],
    cta: "Apply for Elite",
    accent: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={s.section}>
      <div className={s.container}>
        <FadeIn>
          <div className={s.header}>
            <span className="section-label">Membership Plans</span>
            <h2 className="section-heading">
              PICK YOUR
              <br />
              <span>WEAPON.</span>
            </h2>
            <p>
              Every plan starts with a 7-day free trial. No contracts. Cancel
              anytime. Lock in current pricing — rates increase Jan 1st.
            </p>
          </div>
        </FadeIn>

        <div className={s.grid}>
          {PLANS.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div className={`${s.card} ${plan.accent ? s.cardAccent : ""}`}>
                {plan.badge && <div className={s.badge}>{plan.badge}</div>}

                <div className={s.cardInner}>
                  <div className={s.planName}>{plan.name}</div>

                  <div className={s.priceRow}>
                    <span className={s.price}>${plan.price}</span>
                    <span className={s.period}>/mo</span>
                  </div>

                  <p className={s.desc}>{plan.desc}</p>

                  <ul className={s.features}>
                    {plan.features.map((f) => (
                      <li key={f} className={s.featureItem}>
                        <span className={s.check}>✓</span> {f}
                      </li>
                    ))}
                    {plan.excluded.map((f) => (
                      <li key={f} className={`${s.featureItem} ${s.excluded}`}>
                        <span className={s.cross}>✕</span> {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`${s.ctaBtn} ${plan.accent ? s.ctaBtnAccent : ""}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className={s.finePrint}>
          7-day free trial · No credit card required · Cancel anytime · Prices
          in USD
        </p>
      </div>
    </section>
  );
}
