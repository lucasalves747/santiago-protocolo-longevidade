/**
 * PÁGINA DE VENDAS — SALES PAGE
 * Design: "Força Sombria" — Dark Luxury Editorial
 * Produto: Protocolo de Longevidade (Reset 45 Dias) — $17
 * Estrutura: Hero → Dor → Autoridade → Método → O que você recebe → Oferta → Garantia → FAQ → CTA
 */

import { useState } from "react";
import { useLocation } from "wouter";

const GOLD = "#D4A017";
const GOLD_LIGHT = "#F0C040";
const BG = "#0A0A0F";
const SURFACE = "#12121A";
const TEXT = "#F5F5F0";
const MUTED = "#B0B0C0";
const DIM = "#8A8A9A";

function GoldDivider() {
  return (
    <div
      style={{
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
        margin: "0 auto",
        maxWidth: "400px",
      }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
        gap: "12px",
      }}
    >
      <span
        style={{
          width: "30px",
          height: "1px",
          background: GOLD,
          display: "inline-block",
        }}
      />
      {children}
      <span
        style={{
          width: "30px",
          height: "1px",
          background: GOLD,
          display: "inline-block",
        }}
      />
    </div>
  );
}

function CTAButton({
  onClick,
  children,
  large,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="btn-cta"
      style={{
        padding: large ? "20px 48px" : "16px 36px",
        background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
        border: "none",
        borderRadius: "6px",
        color: BG,
        fontSize: large ? "17px" : "15px",
        fontWeight: 700,
        letterSpacing: "0.04em",
        cursor: "pointer",
        textTransform: "uppercase",
        transition: "transform 0.15s",
        width: "100%",
        maxWidth: large ? "480px" : "380px",
        display: "block",
        margin: "0 auto",
      }}
      onMouseEnter={(e) =>
        ((e.target as HTMLButtonElement).style.transform = "scale(1.02)")
      }
      onMouseLeave={(e) =>
        ((e.target as HTMLButtonElement).style.transform = "scale(1)")
      }
      onMouseDown={(e) =>
        ((e.target as HTMLButtonElement).style.transform = "scale(0.97)")
      }
    >
      {children}
    </button>
  );
}

export default function Vendas() {
  const [, navigate] = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleBuy = () => {
    navigate("/obrigado");
  };

  const faqs = [
    {
      q: "Para quem é este protocolo?",
      a: "Para homens entre 30 e 70 anos que sentem que estão envelhecendo mais rápido do que deveriam. Empresários, CEOs, executivos e profissionais de alta performance que não aceitam o declínio como inevitável.",
    },
    {
      q: "Preciso de médico para seguir o protocolo?",
      a: "O protocolo foi desenhado para ser aplicado com acompanhamento médico. Ele serve como guia para você levar ao seu médico e solicitar os exames e ajustes necessários. Para suplementação básica, não é necessário prescrição.",
    },
    {
      q: "Em quanto tempo vejo resultados?",
      a: "O Reset de 45 Dias foi estruturado para que você perceba mudanças na energia e no foco já nas primeiras 2 semanas. Resultados em composição corporal e exames laboratoriais são evidentes ao final dos 45 dias.",
    },
    {
      q: "O protocolo funciona para quem tem mais de 60 anos?",
      a: "Sim. O protocolo é dividido por faixas etárias: 30-40, 40-50 e 60-70 anos. Cada fase tem estratégias específicas de suplementação, treino e modulação hormonal adequadas à sua biologia.",
    },
    {
      q: "Qual é a garantia?",
      a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas.",
    },
    {
      q: "Como vou receber o material?",
      a: "Imediatamente após a confirmação do pagamento, você receberá o acesso por e-mail. O material é 100% digital e pode ser acessado em qualquer dispositivo.",
    },
    {
      q: "Por que apenas $17?",
      a: "Este é um produto de entrada. Meu objetivo é que você experimente a qualidade do meu método antes de investir em programas mais completos. É o menor investimento que você pode fazer na sua saúde.",
    },
    {
      q: "Existe alguma assinatura ou cobrança recorrente?",
      a: "Não. É um pagamento único de $17. Sem assinaturas, sem cobranças futuras, sem surpresas.",
    },
  ];

  return (
    <div
      style={{
        background: BG,
        color: TEXT,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* URGENCY BAR */}
      <div
        style={{
          background: "#1A0A00",
          borderBottom: `1px solid ${GOLD}30`,
          padding: "10px 24px",
          textAlign: "center",
          fontSize: "13px",
          color: GOLD,
          fontWeight: 500,
        }}
      >
        ⏳ Oferta especial de lançamento — Preço de $47 por apenas{" "}
        <strong style={{ color: GOLD_LIGHT }}>$17</strong>. Válido por tempo
        limitado.
      </div>

      {/* HERO */}
      <div
        style={{
          position: "relative",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://assets.cdn.filesafe.space/PMW6fmu3oCfXFYueuN2D/media/6a52b67aeada8c1f454d1699.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, ${BG}20 0%, ${BG}90 100%)`,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "800px",
            margin: "0 auto",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <SectionLabel>Protocolo de Longevidade — Reset 45 Dias</SectionLabel>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(38px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "28px",
              color: TEXT,
            }}
          >
            Você Está Envelhecendo
            <br />
            <span style={{ color: GOLD }}>Mais Rápido do que Deveria.</span>
          </h1>

          <p
            style={{
              fontSize: "19px",
              lineHeight: 1.7,
              color: MUTED,
              marginBottom: "16px",
              maxWidth: "620px",
              margin: "0 auto 16px",
            }}
          >
            O declínio não é inevitável. É uma escolha.
            <br />
            Em 45 dias, você pode reverter anos de dano metabólico e recuperar
            a energia, o foco e o corpo que você merece.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: DIM,
              marginBottom: "48px",
              fontStyle: "italic",
            }}
          >
            — Dr. Santiago Vecina, Médico Nutrólogo
          </p>

          <CTAButton onClick={handleBuy} large>
            Quero o Protocolo por $17 →
          </CTAButton>

          <p
            style={{
              marginTop: "16px",
              fontSize: "12px",
              color: DIM,
            }}
          >
            🔒 Pagamento 100% seguro · 7 dias de garantia · Acesso imediato
          </p>
        </div>
      </div>

      {/* PAIN SECTION */}
      <div style={{ padding: "80px 24px", background: SURFACE }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel>O Diagnóstico Real</SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "48px",
              lineHeight: 1.2,
            }}
          >
            Reconhece Algum Desses Sintomas?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              textAlign: "left",
            }}
          >
            {[
              {
                icon: "😴",
                title: "Cansaço Crônico",
                desc: "Acorda cansado mesmo dormindo 8 horas. Café já não resolve.",
              },
              {
                icon: "🧠",
                title: "Névoa Mental",
                desc: "Dificuldade de foco e concentração. Decisões ficaram mais difíceis.",
              },
              {
                icon: "🏋️",
                title: "Gordura que Não Sai",
                desc: "Especialmente na barriga. Mesmo com dieta e exercício.",
              },
              {
                icon: "😤",
                title: "Estresse Fora de Controle",
                desc: "Irritabilidade, ansiedade e dificuldade para desligar.",
              },
              {
                icon: "💤",
                title: "Sono Fragmentado",
                desc: "Acorda no meio da noite. Não atinge sono profundo restaurador.",
              },
              {
                icon: "📉",
                title: "Performance em Queda",
                desc: "Não é mais o mesmo de 5 anos atrás. Na empresa e em casa.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "24px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    `${GOLD}40`)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.07)")
                }
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 600,
                    color: TEXT,
                    marginBottom: "8px",
                    fontSize: "15px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", color: DIM, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "48px",
              padding: "28px 32px",
              background: "rgba(212,160,23,0.06)",
              border: `1px solid ${GOLD}30`,
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: MUTED,
                fontStyle: "italic",
              }}
            >
              "Esses sintomas não são normais da idade. São sinais de que sua
              biologia está pedindo socorro. A boa notícia é que todos eles são
              reversíveis com o protocolo correto."
            </p>
            <p
              style={{
                marginTop: "16px",
                fontSize: "14px",
                color: GOLD,
                fontWeight: 600,
              }}
            >
              — Dr. Santiago Vecina
            </p>
          </div>
        </div>
      </div>

      {/* METHOD SECTION */}
      <div style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <SectionLabel>O Método</SectionLabel>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 700,
                color: TEXT,
                lineHeight: 1.2,
              }}
            >
              Os 5 Pilares do{" "}
              <span style={{ color: GOLD }}>Reset de 45 Dias</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              {
                num: "01",
                title: "Diagnóstico Biológico",
                desc: "Painel completo de exames com alvos de alta performance. Não apenas 'dentro do normal' — mas no quartil superior. Inclui hormônios, marcadores inflamatórios, vitaminas e função mitocondrial.",
                tags: ["Testosterona Livre", "IGF-1", "DHEA-S", "Cortisol", "Vitamina D", "NMN/NAD+"],
              },
              {
                num: "02",
                title: "Nutrição Anti-inflamatória + Jejum Intermitente",
                desc: "Protocolo alimentar baseado em evidências para reduzir o inflammaging (inflamação crônica de baixo grau). Jejum 16:8 duas vezes por semana para ativar autofagia e queima de gordura visceral.",
                tags: ["Jejum 16:8", "Anti-inflamatório", "Autofagia", "Composição Corporal"],
              },
              {
                num: "03",
                title: "Treino Híbrido (Força + Cardio)",
                desc: "3 dias de musculação/força para preservar e construir massa muscular. 3 dias de cardio para saúde cardiovascular e VO2 máx. Metas de composição corporal por faixa etária via bioimpedância.",
                tags: ["Musculação 3x", "Cardio 3x", "VO2 Máx", "Bioimpedância"],
              },
              {
                num: "04",
                title: "Arsenal de Suplementação",
                desc: "Suplementação base + adaptógenos + ativadores de NAD+ + peptídeos. Cada suplemento com dosagem, timing e evidência científica. Stacks específicos por faixa etária (30-40, 40-50, 60-70).",
                tags: ["NMN", "Ashwagandha", "CoQ10", "GHK-Cu", "BPC-157", "Magnésio"],
              },
              {
                num: "05",
                title: "Ritual do Sono e Gestão do Estresse",
                desc: "Protocolo noturno completo para maximizar o sono profundo e a produção de GH. Técnicas de gestão do cortisol para empresários. Meditação e mindfulness aplicados à alta performance.",
                tags: ["Sono Profundo", "GH Noturno", "Cortisol", "Mindfulness"],
              },
            ].map((pillar, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "28px",
                  padding: "32px",
                  background: SURFACE,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  alignItems: "start",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    `${GOLD}30`)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.06)")
                }
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "48px",
                    fontWeight: 900,
                    color: `${GOLD}20`,
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {pillar.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: TEXT,
                      marginBottom: "12px",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.7,
                      color: MUTED,
                      marginBottom: "16px",
                    }}
                  >
                    {pillar.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {pillar.tags.map((tag, j) => (
                      <span
                        key={j}
                        style={{
                          border: `1px solid ${GOLD}30`,
                          borderRadius: "3px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          color: GOLD,
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT YOU GET */}
      <div style={{ padding: "80px 24px", background: SURFACE }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel>O Que Você Recebe</SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Tudo Que Você Precisa Para{" "}
            <span style={{ color: GOLD }}>Transformar Sua Biologia</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: MUTED,
              marginBottom: "48px",
              maxWidth: "600px",
              margin: "0 auto 48px",
            }}
          >
            Um sistema completo, não apenas um e-book. Cada componente foi
            desenhado para funcionar em conjunto.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              textAlign: "left",
            }}
          >
            {[
              {
                icon: "📋",
                title: "Protocolo de Longevidade Completo",
                desc: "O guia principal com todos os 5 pilares detalhados, plano de 45 dias e 6 meses.",
                value: "Valor: $97",
              },
              {
                icon: "🧪",
                title: "Painel de Exames de Alta Performance",
                desc: "Lista completa dos exames essenciais com os alvos de longevidade para cada marcador.",
                value: "Valor: $47",
              },
              {
                icon: "💊",
                title: "Guia de Suplementação por Faixa Etária",
                desc: "Stacks completos para 30-40, 40-50 e 60-70 anos com dosagens e horários.",
                value: "Valor: $67",
              },
              {
                icon: "🏋️",
                title: "Plano de Treino Híbrido (45 Dias)",
                desc: "Semana a semana: musculação 3x + cardio 3x com progressão e metas de bioimpedância.",
                value: "Valor: $47",
              },
              {
                icon: "🍽️",
                title: "Protocolo de Jejum Intermitente",
                desc: "Guia completo do jejum 16:8 com janela alimentar, o que comer e como adaptar à rotina.",
                value: "Valor: $37",
              },
              {
                icon: "🌙",
                title: "Ritual do Sono de Alta Performance",
                desc: "Checklist noturno completo, suplementação para sono profundo e ambiente ideal.",
                value: "Valor: $27",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 600,
                    color: TEXT,
                    marginBottom: "8px",
                    fontSize: "15px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: DIM,
                    lineHeight: 1.6,
                    marginBottom: "12px",
                  }}
                >
                  {item.desc}
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    color: `${GOLD}80`,
                    textDecoration: "line-through",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "40px",
              padding: "24px",
              background: `${GOLD}10`,
              border: `1px solid ${GOLD}30`,
              borderRadius: "8px",
            }}
          >
            <p style={{ fontSize: "15px", color: MUTED }}>
              Valor total:{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  color: DIM,
                  marginRight: "8px",
                }}
              >
                $322
              </span>
              <strong style={{ color: GOLD, fontSize: "24px" }}>
                Hoje por apenas $17
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCT MOCKUP + CTA */}
      <div style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="responsive-grid"
        >
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029042428/dB6c66yqaRyD437rv6weov/ebook_mockup-WwgvXLbF5j6gGehMYYbc95.webp"
              alt="Protocolo de Longevidade"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>

          <div>
            <SectionLabel>A Oferta</SectionLabel>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700,
                color: TEXT,
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              45 Dias Para Mudar
              <br />
              <span style={{ color: GOLD }}>Sua Biologia Para Sempre</span>
            </h2>

            <div style={{ marginBottom: "32px" }}>
              <div
                style={{
                  fontSize: "14px",
                  color: DIM,
                  textDecoration: "line-through",
                  marginBottom: "4px",
                }}
              >
                De $47
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "56px",
                  fontWeight: 900,
                  color: GOLD,
                  lineHeight: 1,
                }}
              >
                $17
              </div>
              <div style={{ fontSize: "13px", color: DIM, marginTop: "4px" }}>
                Pagamento único · Acesso imediato · Sem assinatura
              </div>
            </div>

            <CTAButton onClick={handleBuy} large>
              Garantir Meu Acesso Agora →
            </CTAButton>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {[
                "✓ Acesso imediato após pagamento",
                "✓ 7 dias de garantia incondicional",
                "✓ Funciona em celular, tablet e computador",
                "✓ Suporte por e-mail incluído",
              ].map((item, i) => (
                <div key={i} style={{ fontSize: "13px", color: MUTED }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GUARANTEE */}
      <div style={{ padding: "60px 24px", background: SURFACE }}>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
            padding: "48px 40px",
            border: `2px solid ${GOLD}40`,
            borderRadius: "12px",
          }}
        >
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🛡️</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "16px",
            }}
          >
            Garantia de 7 Dias —{" "}
            <span style={{ color: GOLD }}>Risco Zero</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: MUTED,
            }}
          >
            Se por qualquer motivo você não ficar 100% satisfeito com o
            Protocolo de Longevidade, basta enviar um e-mail em até 7 dias após
            a compra e devolvemos cada centavo do seu investimento.{" "}
            <strong style={{ color: TEXT }}>Sem perguntas. Sem burocracia.</strong>
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Perguntas Frequentes</SectionLabel>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 700,
                color: TEXT,
              }}
            >
              Ainda tem dúvidas?
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: SURFACE,
                  border: `1px solid ${openFaq === i ? GOLD + "40" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    color: TEXT,
                    fontSize: "15px",
                    fontWeight: 600,
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    cursor: "pointer",
                  }}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      color: GOLD,
                      fontSize: "20px",
                      flexShrink: 0,
                      transition: "transform 0.2s",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: MUTED,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div
        style={{
          padding: "80px 24px",
          background: `linear-gradient(180deg, ${SURFACE} 0%, #0A0A0F 100%)`,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <SectionLabel>Última Chance</SectionLabel>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 4vw, 50px)",
              fontWeight: 900,
              color: TEXT,
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            O Declínio é Opcional.
            <br />
            <span style={{ color: GOLD }}>A Decisão é Sua.</span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: MUTED,
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            Você pode continuar achando que é "normal da idade" — ou pode
            investir $17 e ter o mapa exato para reverter o processo. Empresários
            de sucesso tomam decisões com base em dados. Aqui estão os dados.
          </p>

          <CTAButton onClick={handleBuy} large>
            Sim, Quero Transformar Minha Biologia →
          </CTAButton>

          <p
            style={{
              marginTop: "20px",
              fontSize: "12px",
              color: DIM,
            }}
          >
            🔒 Pagamento seguro · 7 dias de garantia · Acesso imediato
          </p>
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
        }
      `}</style>
    </div>
  );
}
