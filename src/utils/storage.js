const STORAGE_KEY = "aomy_site_submissions";

export const DEFAULT_SUBMISSIONS = [
  {
    id: "sub_1",
    type: "resource",
    typeName: "推荐学习资源",
    name: "李同学",
    contact: "13800138000 (微信同号)",
    title: "BBC Learning English 官方精选",
    url: "https://www.bbc.co.uk/learningenglish",
    message: "小A你好！在导航站看了听力版块，觉得 BBC 6 Minute English 很赞，推荐把他们的 Words in the News 也收录进去，生词释义非常地道！",
    status: "pending",
    createdAt: "2026-10-15 14:20:00",
  },
  {
    id: "sub_2",
    type: "collab",
    typeName: "项目合作咨询",
    name: "Mark Zhang",
    contact: "mark.zhang@edutech.io",
    title: "AI 词汇记忆工具联合开发",
    url: "https://github.com/yingyaoyao88-svg",
    message: "你好小A，看了你的英语资源导航站和自媒体分享，我们团队正在研发一款结合间隔重复记忆的 Chrome 划词插件，想探讨是否有合作共创或联名发布的可能。",
    status: "contacted",
    createdAt: "2026-10-14 18:35:10",
  },
  {
    id: "sub_3",
    type: "media",
    typeName: "自媒体商务/交流",
    name: "小红书运营-林静",
    contact: "linjing_creator (微信)",
    title: "AI 工具评测专题约稿",
    url: "https://www.xiaohongshu.com",
    message: "小A老师您好，我们在小红书关注您的「小A的AI日记」很久了，非常喜欢您的 3D 视觉风格和实战内容。下个月我们有自媒体创作者提效工具合集，希望能与您交流合作！",
    status: "approved",
    createdAt: "2026-10-13 11:12:45",
  },
];

export function getSubmissions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SUBMISSIONS));
      return DEFAULT_SUBMISSIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_SUBMISSIONS;
  } catch (err) {
    console.error("Failed to load submissions from localStorage", err);
    return DEFAULT_SUBMISSIONS;
  }
}

export function saveSubmissions(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.error("Failed to save submissions to localStorage", err);
  }
}

export function addSubmission(newSub) {
  const current = getSubmissions();
  const item = {
    id: `sub_${Date.now()}`,
    createdAt: new Date().toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }),
    status: "pending",
    ...newSub,
  };
  const updated = [item, ...current];
  saveSubmissions(updated);
  return item;
}

export function updateSubmissionStatus(id, newStatus) {
  const current = getSubmissions();
  const updated = current.map((sub) =>
    sub.id === id ? { ...sub, status: newStatus } : sub
  );
  saveSubmissions(updated);
  return updated;
}

export function deleteSubmission(id) {
  const current = getSubmissions();
  const updated = current.filter((sub) => sub.id !== id);
  saveSubmissions(updated);
  return updated;
}

export function exportSubmissionsToCSV(submissions) {
  const headers = ["提交时间", "分类", "称呼", "联系方式", "资源/项目名称", "访问链接", "内容详情", "状态"];
  const rows = submissions.map((s) => [
    `"${s.createdAt || ""}"`,
    `"${s.typeName || s.type || ""}"`,
    `"${(s.name || "").replace(/"/g, '""')}"`,
    `"${(s.contact || "").replace(/"/g, '""')}"`,
    `"${(s.title || "").replace(/"/g, '""')}"`,
    `"${(s.url || "").replace(/"/g, '""')}"`,
    `"${(s.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
    `"${s.status || ""}"`,
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `aomyying_submissions_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
