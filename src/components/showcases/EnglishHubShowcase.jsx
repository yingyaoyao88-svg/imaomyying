import { ExternalLink } from "lucide-react";
export function EnglishHubShowcase({ language = "zh" }) {
  return <div className="showcase-box">
    <div className="showcase-nav-bar">
      <strong>{language === "zh" ? "英语学习导航" : "English Learning Hub"}</strong>
      <a href="/english" target="_blank" rel="noreferrer" className="btn-pill btn-pill--secondary"><ExternalLink size={16}/><span>{language === "zh" ? "全屏打开" : "Open full screen"}</span></a>
    </div>
    <iframe src="/english" title={language === "zh" ? "英语学习导航：搜索与筛选学习资源" : "English learning resource directory"} loading="lazy" style={{display:"block",width:"100%",height:"min(1100px, 85vh)",minHeight:600,border:0,background:"#f7f8f2"}}/>
  </div>;
}
