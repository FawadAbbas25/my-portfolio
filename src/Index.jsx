import { useState, useEffect } from "react";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Uroos Jewellers",
      url: "https://uroosjewellers.co.uk/",
      category: "eCommerce",
      description:
        "Premium jewellery eCommerce store for a UK-based brand. Full WooCommerce setup with product categories, cart, wishlist, and checkout. Covers rings, earrings, necklaces, diamonds, and wedding jewellery.",
      tech: ["WordPress", "WooCommerce"],
      gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      emoji: "💍",
      flag: "🇬🇧",
    },
    {
      title: "True Light Ministry",
      url: "https://truelightministry.pk/",
      category: "Non-Profit",
      description:
        "Professional website for a Pakistan-based ministry. Includes program pages, donation system, blog, impact stats, and testimonials with a clean mission-driven design.",
      tech: ["WordPress"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      emoji: "✝️",
      flag: "🇵🇰",
    },
    {
      title: "Glow Herb Natural",
      url: "https://www.glowherbnatural.com/",
      category: "eCommerce",
      description:
        "eCommerce store for a natural organic shampoo brand. Features product catalog, promotional banners, cash on delivery and free shipping across Pakistan.",
      tech: ["WordPress", "WooCommerce"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      emoji: "🌿",
      flag: "🇵🇰",
    },
  ];

  const services = [
    { icon: "🛒", title: "eCommerce Stores", desc: "Full WooCommerce stores with product listings, payments, cart, and checkout." },
    { icon: "🌐", title: "Business Websites", desc: "Clean, fast websites for companies, agencies, and organizations." },
    { icon: "⚙️", title: "Laravel Web Apps", desc: "Custom web apps — dashboards, portals, CRMs built with Laravel." },
    { icon: "🎨", title: "WordPress Development", desc: "Theme customization, plugin setup, speed optimization & full builds." },
    { icon: "📱", title: "Responsive Design", desc: "Pixel-perfect on mobile, tablet, and desktop — every time." },
    { icon: "🚀", title: "Website Optimization", desc: "Speed improvements, SEO basics, and performance tuning." },
  ];

  const stats = [
    { value: "3+", label: "Live Projects" },
    { value: "2", label: "Countries" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "2+", label: "Years Experience" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "#0a0a0f", color: "#fff", minHeight: "100vh" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; }
        .nav-link { color: #9ca3af; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .btn-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #fff; font-weight: 600; padding: 12px 28px; border-radius: 50px; border: none; cursor: pointer; transition: all 0.3s; font-size: 15px; display: inline-block; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(99,102,241,0.4); }
        .btn-outline { background: transparent; color: #d1d5db; font-weight: 600; padding: 12px 28px; border-radius: 50px; border: 1.5px solid #374151; cursor: pointer; transition: all 0.3s; font-size: 15px; display: inline-block; }
        .btn-outline:hover { border-color: #6366f1; color: #fff; transform: translateY(-2px); }
        .card { background: #111118; border: 1px solid #1f2937; border-radius: 16px; transition: all 0.3s; }
        .card:hover { border-color: #6366f1; transform: translateY(-4px); box-shadow: 0 20px 40px rgba(99,102,241,0.1); }
        .tag { background: rgba(99,102,241,0.15); color: #a5b4fc; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; }
        .skill-tag { background: #1a1a2e; border: 1px solid #2d2d44; color: #9ca3af; font-size: 13px; padding: 6px 14px; border-radius: 20px; transition: all 0.2s; display: inline-block; }
        .skill-tag:hover { border-color: #6366f1; color: #a5b4fc; }
        .glow { text-shadow: 0 0 40px rgba(99,102,241,0.5); }
        .gradient-text { background: linear-gradient(135deg, #6366f1, #a78bfa, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-title { font-size: 32px; font-weight: 800; text-align: center; margin-bottom: 8px; }
        .section-sub { color: #6b7280; text-align: center; font-size: 15px; margin-bottom: 48px; }
        .divider { width: 60px; height: 4px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 2px; margin: 12px auto 40px; }
        .contact-btn { display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 50px; transition: all 0.3s; cursor: pointer; border: none; }
        .whatsapp-btn { background: linear-gradient(135deg, #25d366, #128c7e); color: #fff; }
        .whatsapp-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(37,211,102,0.35); }
        .email-btn { background: #111118; color: #d1d5db; border: 1.5px solid #374151; }
        .email-btn:hover { border-color: #6366f1; color: #fff; transform: translateY(-2px); }
        @media (max-width: 768px) {
          .hero-title { font-size: 36px !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .contact-row { flex-direction: column !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 100,
        background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #1f2937" : "none",
        transition: "all 0.3s",
        padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
          <a href="#home" style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>
            Fawad <span style={{ color: "#818cf8" }}>Abbas</span>
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 32 }}>
            {["About", "Services", "Projects", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
            ))}
          </div>
          <a href="https://wa.me/923355033026" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "9px 20px", fontSize: 13 }}>
            💬 Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
        {/* Background blobs */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, background: "rgba(99,102,241,0.08)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 350, height: 350, background: "rgba(168,85,247,0.07)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 750, position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 50, padding: "6px 16px", marginBottom: 28, fontSize: 13, color: "#a5b4fc", fontWeight: 500 }}>
            <span style={{ width: 8, height: 8, background: "#6366f1", borderRadius: "50%", animation: "pulse 2s infinite" }} />
            Available for freelance projects
          </div>
          <h1 className="hero-title glow" style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Hi, I'm <span className="gradient-text">Fawad Abbas</span>
          </h1>
          <p style={{ fontSize: 20, color: "#6b7280", fontWeight: 500, marginBottom: 12 }}>
            WordPress & Laravel Web Developer
          </p>
          <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.8, marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            I build fast, modern, and professional websites — eCommerce stores, business sites, and custom web apps. Based in Pakistan, working with clients globally.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">View My Work →</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 64, padding: "32px", background: "rgba(255,255,255,0.02)", border: "1px solid #1f2937", borderRadius: 20 }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#818cf8", marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "100px 24px", background: "#0d0d14" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="section-sub" style={{ marginBottom: 4, color: "#6366f1", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="grid-2">
            <div>
              <p style={{ color: "#9ca3af", lineHeight: 1.9, fontSize: 15, marginBottom: 20 }}>
                I'm a web developer based in <strong style={{ color: "#fff" }}>Pakistan</strong> with hands-on experience building real-world websites and applications. I currently work at <strong style={{ color: "#fff" }}>Bin Amir Technology</strong>, where I sharpen my skills daily.
              </p>
              <p style={{ color: "#9ca3af", lineHeight: 1.9, fontSize: 15, marginBottom: 28 }}>
                I specialize in <strong style={{ color: "#a5b4fc" }}>WordPress</strong> and <strong style={{ color: "#a5b4fc" }}>Laravel</strong>, and I've built live projects for clients in the <strong style={{ color: "#fff" }}>UK and Pakistan</strong>. I care about clean code, fast performance, and designs that actually convert.
              </p>
              <a href="mailto:fawadabbas234@gmail.com" className="btn-primary" style={{ fontSize: 14 }}>✉️ Say Hello</a>
            </div>
            <div>
              <p style={{ color: "#6b7280", fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Tech Stack</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["WordPress", "WooCommerce", "Laravel", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "jQuery", "Git"].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#6366f1", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>What I Offer</p>
          <h2 className="section-title">My Services</h2>
          <div className="divider" />
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {services.map((s, i) => (
              <div key={s.title} className="card" style={{ padding: 28 }}>
                <div style={{ width: 52, height: 52, background: "rgba(99,102,241,0.12)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 18 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "#f3f4f6" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "100px 24px", background: "#0d0d14" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#6366f1", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Portfolio</p>
          <h2 className="section-title">My Projects</h2>
          <div className="divider" />
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {projects.map((p) => (
              <div key={p.title} className="card" style={{ overflow: "hidden" }}>
                <div style={{ height: 160, background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <span style={{ fontSize: 56 }}>{p.emoji}</span>
                  <span style={{ position: "absolute", top: 14, right: 14, fontSize: 22 }}>{p.flag}</span>
                  <span style={{ position: "absolute", top: 14, left: 14, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 20, letterSpacing: 0.5 }}>{p.category}</span>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: "#f3f4f6" }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, marginBottom: 16 }}>{p.description}</p>
                  <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                    {p.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#818cf8", fontSize: 14, fontWeight: 600, transition: "all 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
                    onMouseLeave={e => e.currentTarget.style.color = "#818cf8"}>
                    Visit Live Site <span style={{ fontSize: 16 }}>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#6366f1", fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="divider" />
          <p style={{ color: "#6b7280", fontSize: 16, lineHeight: 1.8, marginBottom: 48, maxWidth: 480, margin: "0 auto 48px" }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's build something great together.
          </p>
          <div className="contact-row" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/923355033026" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              +92 335 503 3026
            </a>
            <a href="mailto:fawadabbas234@gmail.com" className="contact-btn email-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              fawadabbas234@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1f2937", padding: "28px 24px", textAlign: "center" }}>
        <p style={{ color: "#4b5563", fontSize: 14 }}>
          © 2025 <span style={{ color: "#818cf8", fontWeight: 600 }}>Fawad Abbas</span> — Web Developer 🇵🇰
        </p>
      </footer>
    </div>
  );
}
