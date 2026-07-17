import Link from "next/link";

const routeStops = [
  { city: "贵阳市", label: "出生地", x: 27, y: 71 },
  { city: "北京市", label: "大学", x: 47, y: 32 },
  { city: "新加坡", label: "研究生", x: 58, y: 84 },
  { city: "上海市", label: "当前", x: 73, y: 55 },
];

export default function Home() {
  return (
    <main className="home-shell">
      <div className="ambient-image" aria-hidden="true" />
      <div className="home-watermark" aria-hidden="true">
        Personal Website
      </div>
      <header className="profile-signature" aria-label="个人信息">
        <div className="profile-identity">
          <img
            alt="李函忆 Penny 个人头像"
            className="profile-avatar"
            src="/avatar-penny.png"
          />
          <div className="profile-text">
            <span className="profile-name">李函忆 Penny</span>
            <div className="profile-contact-list" aria-label="联系方式">
              <a className="profile-contact" href="mailto:hanyili@u.nus.edu">
                <span className="contact-mark">@</span>
                hanyili@u.nus.edu
              </a>
              <span className="profile-contact">
                <span className="contact-mark">微</span>
                Virrseptlennice
              </span>
            </div>
          </div>
        </div>
      </header>
      <section className="map-panel" aria-label="城市成长路线动画">
        <div className="map-card">
          <div className="map-title">
            <span>成长旅途</span>
            <strong>Guiyang · Beijing · Singapore · Shanghai</strong>
          </div>

          <div className="route-map">
            <div className="map-land land-one" />
            <div className="map-land land-two" />
            <div className="map-land land-three" />
            <svg
              aria-hidden="true"
              className="route-curve"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path d="M27 71 C34 55, 39 39, 47 32 S55 72, 58 84 S66 64, 73 55" />
            </svg>
            <div className="route-pulse" />
            {routeStops.map((stop, index) => (
              <div
                className={`city-node city-${index + 1}`}
                key={stop.city}
                style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
              >
                <span className="node-dot" />
                <span className="node-label">
                  <em>{stop.label}</em>
                  {stop.city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="copy-panel" aria-label="首页三语文案">
        <div className="quote-stack">
          <p className="quote quote-cn">
            每个人的生命都是通向自我的征途，是对一条道路的尝试，是一条小径的悄然召唤。
          </p>
          <p className="quote quote-en">
            Every man's life represents a path to herself, an attempt at a path,
            the suggestion of a trail.
          </p>
          <p className="quote quote-de">
            Das Leben jedes Menschen ist ein Weg zu sich selber hin, der Versuch
            eines Weges, die Andeutung eines Pfades.
          </p>
        </div>
      </section>

      <Link className="floating-path-button" href="/paths">
        查看完整路径
      </Link>
    </main>
  );
}
