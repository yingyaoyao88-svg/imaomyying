import { ArrowRight } from "lucide-react";
import "./SheTalkBrand.css";

export function SheTalkBrand({ language }) {
  const zh = language === "zh";
  return (
    <section className="bento-section" id="brands" aria-labelledby="she-talk-title">
      <div className="section-head">
        <span className="section-eyebrow">{zh ? "我主理的品牌" : "A BRAND I HOST"}</span>
      </div>
      <article className="she-talk-brand">
        <div className="she-talk-brand__copy">
          <span className="she-talk-brand__label">AOMYYING × SHE TALK AI</span>
          <h2 id="she-talk-title">SHE TALK AI<span>女性 AI 共创沙龙</span></h2>
          <p>作为SHE Talk AI主理人，连接对 AI 充满好奇的女性，一起学习、实践、共创，让每次相聚都带走一个自己的 AI 作品。</p>
          <a className="she-talk-brand__link" href="/she-talk-ai/">了解品牌 <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
        <a className="she-talk-brand__art" href="/she-talk-ai/" aria-label="了解 SHE TALK AI 品牌">
          <img src="/she-talk-ai/assets/poster.png" alt="SHE TALK AI 女性共创品牌海报" loading="lazy" />
        </a>
      </article>
    </section>
  );
}
