import FadeIn from "./FadeIn";
import s from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={s.section}>
      <div className={s.glow} />
      <div className={s.bgWord}>START</div>

      <div className={s.content}>
        <FadeIn>
          <div className={s.badge}>
            <span className={s.badgeDot} />
            Offer expires Friday · Only 14 trial spots left
          </div>

          <h2 className={s.headline}>
            STOP WAITING.
            <br />
            <span>START FORGING.</span>
          </h2>

          <p className={s.subtext}>
            Every day you wait is another day behind. Your 7-day free trial is
            waiting. No credit card. No commitment. Just results.
          </p>

          <a href="#pricing" className="btn-primary">
            Claim My Free Trial Now
          </a>

          <p className={s.finePrint}>
            7 days free · No card needed · Cancel anytime
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
