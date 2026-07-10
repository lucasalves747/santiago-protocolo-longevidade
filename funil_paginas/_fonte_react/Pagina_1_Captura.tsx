/**
 * PÁGINA DE CAPTURA — ISCA DIGITAL
 * Design: "Força Sombria" — Dark Luxury Editorial
 * Cores: #0A0A0F bg, #D4A017 gold accent, #F5F5F0 text
 * Fontes: Playfair Display (headlines) + Inter (body)
 * Oferta: E-book gratuito "Os 7 Exames que Seu Médico Não Pede"
 */

import { useState } from "react";
import { useLocation } from "wouter";

export default function Captura() {
  const [, navigate] = useLocation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email) return;
    setLoading(true);
    setTimeout(() => {
      navigate("/protocolo");
    }, 800);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#0A0A0F",
        color: "#F5F5F0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          background: "#D4A017",
          padding: "10px 0",
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          color: "#0A0A0F",
          letterSpacing: "0.05em",
        }}
      >
        ⚡ ACESSO GRATUITO POR TEMPO LIMITADO — BAIXE AGORA SEM CUSTO
      </div>

      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310419663029042428/dB6c66yqaRyD437rv6weov/hero_captura-ViBEJzXW5DrbgAeEKUs3WL.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            opacity: 0.35,
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #0A0A0F 55%, rgba(10,10,15,0.3) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "80px 24px",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "60px",
            alignItems: "center",
            width: "100%",
          }}
          className="responsive-grid"
        >
          {/* LEFT — Copy */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #D4A017",
                borderRadius: "4px",
                padding: "6px 14px",
                marginBottom: "28px",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#D4A017",
                textTransform: "uppercase",
              }}
              className="animate-fade-up"
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#D4A017",
                  display: "inline-block",
                }}
              />
              Guia Médico Gratuito — Dr. Santiago Vecina
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "24px",
                color: "#F5F5F0",
              }}
              className="animate-fade-up-delay-1"
            >
              Os{" "}
              <span style={{ color: "#D4A017" }}>7 Exames</span>{" "}
              Que Seu Médico Não Pede
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontSize: "0.75em",
                  color: "#8A8A9A",
                }}
              >
                e que ditam a sua energia, longevidade e performance
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#B0B0C0",
                marginBottom: "32px",
                maxWidth: "520px",
              }}
              className="animate-fade-up-delay-2"
            >
              Se você tem mais de 35 anos, sente cansaço crônico, névoa mental
              ou dificuldade para perder gordura — seus exames "normais" estão
              mentindo para você. Descubra o painel completo que uso com CEOs e
              empresários para revelar o que está freando sua biologia.
            </p>

            {/* Benefits list */}
            <div
              style={{ marginBottom: "40px" }}
              className="animate-fade-up-delay-3"
            >
              {[
                "Os marcadores hormonais que a medicina convencional ignora",
                "Os alvos de alta performance para cada exame (não apenas o 'normal')",
                "O que pedir ao seu médico na próxima consulta",
                "Como interpretar seus resultados como um CEO da sua saúde",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "12px",
                    fontSize: "15px",
                    color: "#D0D0E0",
                  }}
                >
                  <span
                    style={{
                      color: "#D4A017",
                      fontWeight: 700,
                      fontSize: "16px",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                color: "#8A8A9A",
                fontSize: "13px",
              }}
              className="animate-fade-up-delay-4"
            >
              <div
                style={{ display: "flex", gap: "-8px" }}
              >
                {["🧑‍💼", "👨‍💼", "🧑‍💼"].map((emoji, i) => (
                  <span
                    key={i}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "#1A1A2A",
                      border: "2px solid #D4A017",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      marginLeft: i > 0 ? "-8px" : "0",
                    }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <span>
                <strong style={{ color: "#F5F5F0" }}>+4.200 empresários</strong>{" "}
                já baixaram este guia
              </span>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            style={{
              background: "rgba(18,18,26,0.95)",
              border: "1px solid rgba(212,160,23,0.3)",
              borderRadius: "12px",
              padding: "40px 32px",
              backdropFilter: "blur(20px)",
            }}
            className="animate-fade-up-delay-2"
          >
            {/* Form header */}
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "#D4A017",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Acesso Imediato e Gratuito
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#F5F5F0",
                  lineHeight: 1.3,
                }}
              >
                Receba o Guia Agora
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  color: "#8A8A9A",
                  marginTop: "8px",
                }}
              >
                Preencha abaixo e acesse imediatamente
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#8A8A9A",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Seu Primeiro Nome
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Carlos"
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "6px",
                    color: "#F5F5F0",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(212,160,23,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                  }
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#8A8A9A",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "6px",
                    color: "#F5F5F0",
                    fontSize: "15px",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(212,160,23,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                  }
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-cta"
                style={{
                  width: "100%",
                  padding: "16px",
                  background: loading
                    ? "#8A6A10"
                    : "linear-gradient(135deg, #D4A017, #F0C040)",
                  border: "none",
                  borderRadius: "6px",
                  color: "#0A0A0F",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "transform 0.15s, opacity 0.15s",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) =>
                  !loading &&
                  ((e.target as HTMLButtonElement).style.transform =
                    "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.transform = "scale(1)")
                }
                onMouseDown={(e) =>
                  ((e.target as HTMLButtonElement).style.transform =
                    "scale(0.97)")
                }
              >
                {loading ? "Liberando acesso..." : "Quero o Guia Gratuito →"}
              </button>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "11px",
                  color: "#5A5A6A",
                  marginTop: "16px",
                  lineHeight: 1.5,
                }}
              >
                🔒 Seus dados estão seguros. Sem spam. Cancele quando quiser.
              </p>
            </form>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)",
                margin: "24px 0",
              }}
            />

            {/* Value stack */}
            <div style={{ fontSize: "13px", color: "#6A6A7A" }}>
              <p style={{ marginBottom: "8px", color: "#8A8A9A", fontWeight: 600 }}>
                O que você vai receber:
              </p>
              {[
                "📋 Guia completo dos 7 exames essenciais",
                "🎯 Tabela de alvos de alta performance",
                "💊 Lista de suplementos por deficiência",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ marginBottom: "6px", display: "flex", gap: "8px" }}
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF STRIP */}
      <div
        style={{
          background: "#12121A",
          borderTop: "1px solid rgba(212,160,23,0.15)",
          borderBottom: "1px solid rgba(212,160,23,0.15)",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {[
            { num: "+4.200", label: "Empresários Atendidos" },
            { num: "15+", label: "Anos de Experiência Clínica" },
            { num: "45", label: "Dias para Transformação" },
            { num: "100%", label: "Base Científica" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#D4A017",
                }}
              >
                {stat.num}
              </div>
              <div style={{ fontSize: "12px", color: "#6A6A7A", marginTop: "4px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT DR. SANTIAGO */}
      <div style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="responsive-grid-about"
        >
          <div style={{ position: "relative" }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029042428/dB6c66yqaRyD437rv6weov/doctor_authority-fHrYxVwoZRGhQThnrRv5xx.webp"
              alt="Dr. Santiago Vecina"
              style={{
                width: "100%",
                borderRadius: "8px",
                border: "1px solid rgba(212,160,23,0.2)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                background: "#D4A017",
                color: "#0A0A0F",
                padding: "8px 16px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              CRM Verificado
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                color: "#D4A017",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Quem é o Dr. Santiago Vecina
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 700,
                color: "#F5F5F0",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              O Médico que Trata CEOs
              <br />
              <span style={{ color: "#D4A017" }}>Como Atletas de Elite</span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#B0B0C0",
                marginBottom: "24px",
              }}
            >
              Médico Nutrólogo com especialização em Bioquímica, Metabolismo e
              Medicina do Esporte. Há mais de 15 anos trabalho exclusivamente com
              empresários, CEOs e executivos que precisam de performance máxima —
              não apenas "saúde normal".
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#B0B0C0",
                marginBottom: "32px",
              }}
            >
              Minha abordagem combina medicina funcional, otimização hormonal,
              nutraceutivos e protocolos de longevidade baseados nas pesquisas
              mais recentes de Harvard, Stanford e Mayo Clinic.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {[
                "Medicina Funcional",
                "Otimização Hormonal",
                "Nutraceutivos",
                "Longevidade",
                "Alta Performance",
              ].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    border: "1px solid rgba(212,160,23,0.4)",
                    borderRadius: "4px",
                    padding: "6px 14px",
                    fontSize: "12px",
                    color: "#D4A017",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "32px 24px",
          textAlign: "center",
          color: "#4A4A5A",
          fontSize: "12px",
        }}
      >
        <p>© 2025 Dr. Santiago Vecina — Todos os direitos reservados.</p>
        <p style={{ marginTop: "8px" }}>
          Este material é de caráter informativo e não substitui consulta médica
          individualizada.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .responsive-grid { grid-template-columns: 1fr !important; }
          .responsive-grid-about { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
