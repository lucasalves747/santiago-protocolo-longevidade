/**
 * PÁGINA DE OBRIGADO — ENTREGA DO PRODUTO
 * Design: "Força Sombria" — Dark Luxury Editorial
 * Conteúdo: Confirmação + Download + Próximos Passos + Upsell suave
 */

import { useLocation } from "wouter";

const GOLD = "#D4A017";
const GOLD_LIGHT = "#F0C040";
const BG = "#0A0A0F";
const SURFACE = "#12121A";
const TEXT = "#F5F5F0";
const MUTED = "#B0B0C0";
const DIM = "#8A8A9A";

export default function Obrigado() {
  const [, navigate] = useLocation();

  return (
    <div
      style={{
        background: BG,
        color: TEXT,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* SUCCESS BAR */}
      <div
        style={{
          background: "linear-gradient(90deg, #0A2A0A, #0F3A0F)",
          borderBottom: "1px solid #2A5A2A",
          padding: "12px 24px",
          textAlign: "center",
          fontSize: "14px",
          color: "#6FD46F",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "18px" }}>✅</span>
        Pagamento confirmado! Seu acesso foi liberado com sucesso.
      </div>

      {/* HERO OBRIGADO */}
      <div
        style={{
          padding: "80px 24px 60px",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {/* Animated checkmark */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: `${GOLD}15`,
            border: `2px solid ${GOLD}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
            fontSize: "36px",
          }}
        >
          🏆
        </div>

        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.18em",
            color: GOLD,
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <span style={{ width: "30px", height: "1px", background: GOLD, display: "inline-block" }} />
          Bem-vindo ao Protocolo
          <span style={{ width: "30px", height: "1px", background: GOLD, display: "inline-block" }} />
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            color: TEXT,
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Sua Transformação
          <br />
          <span style={{ color: GOLD }}>Começa Agora.</span>
        </h1>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: MUTED,
            marginBottom: "16px",
          }}
        >
          Parabéns pela decisão. Você acabou de dar o primeiro passo para
          recuperar sua energia, seu foco e sua vitalidade. O Protocolo de
          Longevidade está disponível para acesso imediato abaixo.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: DIM,
            marginBottom: "48px",
          }}
        >
          Você também receberá um e-mail de confirmação com o link de acesso.
        </p>

        {/* DOWNLOAD BUTTON */}
        <div
          style={{
            background: SURFACE,
            border: `2px solid ${GOLD}`,
            borderRadius: "12px",
            padding: "40px 32px",
            marginBottom: "48px",
          }}
        >
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", color: GOLD, fontWeight: 600, textTransform: "uppercase", marginBottom: "16px" }}>
            Seu Acesso Exclusivo
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "24px",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "8px",
            }}
          >
            Protocolo de Longevidade
          </h2>
          <p style={{ fontSize: "14px", color: DIM, marginBottom: "28px" }}>
            Reset de 45 Dias — Edição Completa
          </p>

          <a
            href="/Protocolo_Longevidade_Reset45Dias_Dr_Santiago.pdf"
            download
            style={{
              display: "inline-block",
              padding: "16px 40px",
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
              borderRadius: "6px",
              color: BG,
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.15s",
              marginBottom: "16px",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.transform = "scale(1)")
            }
          >
            📥 Baixar o Protocolo Agora
          </a>

          <p style={{ fontSize: "12px", color: DIM }}>
            PDF · Acesso permanente · Funciona em qualquer dispositivo
          </p>
        </div>
      </div>

      {/* PRÓXIMOS PASSOS */}
      <div style={{ padding: "0 24px 80px", maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
            marginBottom: "60px",
          }}
        />

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: GOLD,
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span style={{ width: "30px", height: "1px", background: GOLD, display: "inline-block" }} />
            Guia de Início Rápido
            <span style={{ width: "30px", height: "1px", background: GOLD, display: "inline-block" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: TEXT,
            }}
          >
            Seus Próximos 3 Passos
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            {
              step: "1",
              title: "Hoje: Leia o Capítulo 1 — Diagnóstico",
              desc: "Imprima ou salve a lista de exames do Capítulo 1. Agende uma consulta com seu médico e leve a lista. Este é o passo mais importante — sem diagnóstico, não há protocolo.",
              time: "30 minutos",
            },
            {
              step: "2",
              title: "Esta Semana: Comece a Suplementação Base",
              desc: "Antes de receber os resultados dos exames, você já pode iniciar a suplementação base do Capítulo 5: Vitamina D3+K2, Magnésio Treonato, Ômega-3 e Ashwagandha.",
              time: "Semana 1",
            },
            {
              step: "3",
              title: "Dia 1 do Reset: Implemente o Protocolo de 24 Horas",
              desc: "Siga o timeline completo do Capítulo 2. Acorde no mesmo horário, faça o ritual matinal, implemente o jejum 16:8 e siga o ritual noturno. Consistência nos primeiros 7 dias é tudo.",
              time: "Dias 1-7",
            },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: "24px",
                padding: "28px",
                background: SURFACE,
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: `${GOLD}15`,
                  border: `2px solid ${GOLD}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: GOLD,
                  flexShrink: 0,
                }}
              >
                {step.step}
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: 600,
                      color: TEXT,
                      fontSize: "16px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <span
                    style={{
                      border: `1px solid ${GOLD}30`,
                      borderRadius: "3px",
                      padding: "3px 10px",
                      fontSize: "11px",
                      color: GOLD,
                      fontWeight: 500,
                      flexShrink: 0,
                    }}
                  >
                    {step.time}
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: MUTED, lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UPSELL SUAVE */}
      <div
        style={{
          padding: "60px 24px",
          background: SURFACE,
          borderTop: `1px solid ${GOLD}20`,
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: GOLD,
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <span style={{ width: "30px", height: "1px", background: GOLD, display: "inline-block" }} />
            Próximo Nível
            <span style={{ width: "30px", height: "1px", background: GOLD, display: "inline-block" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Quer Implementar o Protocolo
            <br />
            <span style={{ color: GOLD }}>Com Acompanhamento Médico?</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: MUTED,
              marginBottom: "32px",
            }}
          >
            O Protocolo de Longevidade é o mapa. A consultoria individual é o
            GPS. Se você quer resultados acelerados com acompanhamento
            personalizado, conheça o Programa Motor de Alto Rendimento.
          </p>

          <button
            onClick={() => navigate("/protocolo")}
            style={{
              padding: "14px 36px",
              background: "transparent",
              border: `1px solid ${GOLD}`,
              borderRadius: "6px",
              color: GOLD,
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = `${GOLD}15`;
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Conhecer o Programa Completo →
          </button>
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
          Dúvidas? Entre em contato: suporte@drsantiago.com
        </p>
      </div>
    </div>
  );
}
