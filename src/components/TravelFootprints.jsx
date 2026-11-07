import { ArrowUpRight, Compass } from "lucide-react";

export function TravelFootprints({ language }) {
  const zh = language === "zh";
  return (
    <a className="bento-card travel-footprints" href="/album/" aria-labelledby="travel-footprints-title">
      <div className="travel-footprints__preview">
        <img
          src="/travel-album-preview.webp"
          alt={zh ? "小A旅行相册的湖边跨页，米白纸纹与蓝色撕纸拼贴" : "A lake spread from Xiao-A's travel album, with ivory paper and blue collage"}
          width="960"
          height="640"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="travel-footprints__copy">
        <span className="section-eyebrow"><Compass size={14} aria-hidden="true" />{zh ? "生活里的另一面" : "Beyond the screen"}</span>
        <h3 id="travel-footprints-title">{zh ? "小A的旅行足迹" : "Xiao-A's Travel Footprints"}</h3>
        <p>{zh ? "把湖边的风、路上的光和海边的片刻，收进一本可以翻阅的旅行相册。" : "Lake breezes, light along the road, and moments by the sea — collected in a travel album you can turn through."}</p>
        <span className="travel-footprints__action">{zh ? "翻开旅行相册" : "Open the travel album"}<ArrowUpRight size={18} aria-hidden="true" /></span>
      </div>
    </a>
  );
}
