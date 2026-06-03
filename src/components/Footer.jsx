import s from "./Footer.module.css";

const COLS = [
  {
    title: "Programs",
    links: [
      "Strength Training",
      "Body Transformation",
      "Athletic Performance",
      "Group Classes",
      "Nutrition Coaching",
    ],
  },
  {
    title: "Company",
    links: [
      "About Iron Forge",
      "Our Coaches",
      "Success Stories",
      "Careers",
      "Press",
    ],
  },
  {
    title: "Support",
    links: [
      "FAQ",
      "Contact Us",
      "App Download",
      "Membership Terms",
      "Privacy Policy",
    ],
  },
];

const SOCIALS = [
  { name: "TT", photo: "src/pictures/Без названия (10).jpg" }, // ← сюди шлях до фото
  { name: "YT", photo: "src/pictures/Без названия (11).jpg" }, // ← сюди шлях до фото
  { name: "TW", photo: "src/pictures/TWITTER X ICON SQUARE.jpg" }, // ← сюди шлях до фото
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.grid}>
          <div>
            <div className={s.logo}>IRON FORGE</div>
            <p className={s.brandText}>
              Premium fitness coaching and gym membership for people serious
              about body transformation.
            </p>
            <div className={s.socials}>
              {SOCIALS.map((item) => (
                <a href="#" key={item.name} className={s.socialBtn}>
                  <img
                    src={item.photo}
                    alt={item.name}
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "contain",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div className={s.colTitle}>{col.title}</div>
              <ul className={s.linkList}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={s.bottomBar}>
          <p className={s.copyright}>
            © 2025 Iron Forge Gym. All rights reserved.
          </p>
          <p className={s.copyright}>
            Results may vary. Individual outcomes depend on effort, consistency,
            and program adherence.
          </p>
        </div>
      </div>
    </footer>
  );
}
