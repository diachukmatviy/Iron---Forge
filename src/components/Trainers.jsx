import FadeIn from "./FadeIn";
import s from "./Trainers.module.css";

const TEAM = [
  {
    name: "Jordan Reeves",
    role: "Head Strength Coach",
    creds: "CSCS · 11 Years",
    spec: "Powerlifting & Athletic Performance",
    photo: "src/pictures/olimp-5-1.jpg",
  },
  {
    name: "Mia Okafor",
    role: "Body Transformation Lead",
    creds: "NASM-CPT · 8 Years",
    spec: "Physique Competition & Fat Loss",
    photo: "src/pictures/team-2.jpg",
  },
  {
    name: "Dex Morales",
    role: "Nutrition & Recovery Coach",
    creds: "RD · CISSN · 9 Years",
    spec: "Sports Nutrition & Metabolic Health",
    photo: "src/pictures/troya-8.jpg",
  },
  {
    name: "Sara Kim",
    role: "Mobility & Conditioning",
    creds: "FMS · USAW · 7 Years",
    spec: "Functional Fitness & Injury Prevention",
    photo: "src/pictures/images (4).jpg",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className={s.section}>
      <div className={s.container}>
        <FadeIn>
          <div className={s.header}>
            <span className="section-label">The Team</span>
            <h2 className="section-heading">
              COACHED BY THE
              <br />
              <span>BEST IN THE FIELD.</span>
            </h2>
          </div>
        </FadeIn>

        <div className={s.grid}>
          {TEAM.map((coach, i) => {
            const initials = coach.name
              .split(" ")
              .map((w) => w[0])
              .join("");
            return (
              <FadeIn key={coach.name} delay={i * 0.1}>
                <div className={s.card}>
                  <div className={s.cardInner}>
                    <div className={s.hoverGlow} />
                    <div className={s.bgInitials}>{initials}</div>

                    {coach.photo ? (
                      <img
                        src={coach.photo}
                        alt={coach.name}
                        className={s.avatar}
                      />
                    ) : (
                      <div className={s.avatarInitials}>{initials}</div>
                    )}

                    <div className={s.info}>
                      <div className={s.creds}>{coach.creds}</div>
                      <div className={s.name}>{coach.name}</div>
                      <div className={s.role}>{coach.role}</div>
                      <div className={s.spec}>{coach.spec}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
