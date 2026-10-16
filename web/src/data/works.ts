export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

const ZH_SECTIONS: WorkSection[] = [
  {
    "id": "project-1",
    "no": "01",
    "title": "用户沟通与获客转化",
    "tagline": "需求识别｜产品讲解｜活动获客｜AI复盘",
    "items": [
      {
        "name": "AI资讯产品用户沟通与获客转化",
        "meta": "User Communication & Acquisition Conversion",
        "slug": "ai-news-dashboard",
        "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
        "tags": [
          "需求识别：价格问卷与反馈，明确分阶段沟通重点",
          "讲解触达：100+条内容、达人协作及线上线下活动",
          "过程跟踪：AI看板定位流失，结合A/B测试优化",
          "转化复盘：注册较前一期+50%，首次专题创建率相对约+15%"
        ]
      }
    ]
  },
  {
    "id": "project-2",
    "no": "02",
    "title": "用户维护与体验服务",
    "tagline": "社群维护｜场景讲解｜现场答疑｜反馈改进",
    "items": [
      {
        "name": "AI教育产品用户维护与体验服务",
        "meta": "User Relationships & Product Experience Service",
        "slug": "ai-education-partnership",
        "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
        "tags": [
          "用户维护：整理100+条反馈，识别场景需求与障碍",
          "使用引导：30+篇指南、FAQ、教程与场景案例",
          "体验服务：高校宣讲、产品体验及现场答疑",
          "反馈改进：10余项建议；期间核心功能使用率+30%"
        ]
      }
    ]
  },
  {
    "id": "project-4",
    "no": "03",
    "title": "新品卖点与渠道传播",
    "tagline": "消费需求｜卖点表达｜社媒执行｜渠道协同",
    "items": [
      {
        "name": "ZUS Coffee新品卖点与渠道传播",
        "meta": "Product Messaging & Channel Communication",
        "slug": "zus-everywhere",
        "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
        "tags": [
          "卖点提炼：结合用户偏好、社媒反馈与竞品内容",
          "社媒执行：50条Instagram内容及拍摄剪辑、英文文案",
          "渠道协同：线上首发及FamilyMart素材、门店信息与排期",
          "复盘优化：15+次内容复盘，协同带动粉丝增长1.1w+"
        ]
      }
    ]
  }
]

const EN_SECTIONS: WorkSection[] = [
  {
    "id": "project-1",
    "no": "01",
    "title": "User Communication & Conversion",
    "tagline": "Needs · Product Explanation · Acquisition · AI Review",
    "items": [
      {
        "name": "AI Information Product: User Communication & Acquisition",
        "meta": "From User Needs to Communication, Activities & Conversion Reviews",
        "slug": "ai-news-dashboard",
        "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
        "tags": [
          "Needs: pricing surveys and feedback informed communication by user stage",
          "Communication: 100+ posts, creator support and online/offline activities",
          "Tracking: AI dashboard identified drop-offs; A/B tests informed optimisation",
          "Review: registrations +50% versus prior period; first-topic rate approximately +15% relatively"
        ]
      }
    ]
  },
  {
    "id": "project-2",
    "no": "02",
    "title": "User Relationships & Experience",
    "tagline": "Community · Product Guidance · On-site Support · Feedback",
    "items": [
      {
        "name": "AI Education Product: User Relationships & Experience Service",
        "meta": "From Community Feedback to Product Guidance, Trials & Improvements",
        "slug": "ai-education-partnership",
        "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
        "tags": [
          "User relationships: classified 100+ feedback items and usage barriers",
          "Guidance: 30+ guides, FAQs, tutorials and practical cases",
          "Experience: university presentations, product trials and on-site Q&A",
          "Improvement: over 10 suggestions; core-feature usage +30% during the period"
        ]
      }
    ]
  },
  {
    "id": "project-4",
    "no": "03",
    "title": "Product Messages & Channels",
    "tagline": "Consumer Needs · Messaging · Social Content · Channels",
    "items": [
      {
        "name": "ZUS Coffee Product Messages & Channel Communication",
        "meta": "From Audience Preferences to Content, Channel Support & Reviews",
        "slug": "zus-everywhere",
        "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
        "tags": [
          "Messages: audience preferences, social feedback and competitor content",
          "Execution: 50 Instagram posts, shooting, editing and English copy",
          "Channels: online launch and FamilyMart assets, store details and schedules",
          "Review: 15+ content reviews; contributed to overall account growth of 11k+ followers"
        ]
      }
    ]
  }
]

export const WORKS: Record<WorkLanguage, WorksLang> = {
  zh: {
    title: '项目经历', closeLabel: '返回', openLabel: '展开作品', hint: '继续下滑',
    awardsLabel: '项目成果', visitLabel: '查看完整项目', detailPlaceholder: '项目详情',
    phImageLabel: '项目预览', phButtonLabel: '打开项目', countLabel: (n: number) => `${n} 个项目`,
    sections: ZH_SECTIONS,
  },
  en: {
    title: 'Project Experience', closeLabel: 'Back', openLabel: 'Open case', hint: 'Scroll to continue',
    awardsLabel: 'Outcomes', visitLabel: 'View full case', detailPlaceholder: 'Project details',
    phImageLabel: 'Project preview', phButtonLabel: 'Open project', countLabel: (n: number) => `${n} projects`,
    sections: EN_SECTIONS,
  },
}

export const WORKS_CONTENT = WORKS
export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
