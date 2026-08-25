import Link from "next/link";
import { KeywordBubbles } from "./keyword-bubbles";
import { PathTabs } from "./path-tabs";

const academicItems = [
  {
    title: "新加坡国立大学 · 硕士",
    location: "新加坡",
    period: "2025.08-2027.01",
    subtitle: "市场营销分析与洞察专业",
    details: [
      "GPA: 4.3/5.0",
      "核心课程：市场分析；数字化营销；商业分析中的 Python 编程；客户关系管理；市场营销中的大数据；市场分析可视化",
    ],
  },
  {
    title: "北京外国语大学 · 本科",
    location: "北京",
    period: "2021.09-2025.07",
    subtitle: "德语专业（外交学）",
    details: [
      "GPA: 3.55/4.0 (3.96/4.0)",
      "核心课程：跨文化经济交际；德国经济；跨文化传播；德国国家概况；德国外交；计算机科学与 Python 等",
      "荣誉奖项：校级二等奖学金（2024）、三好学生（2024）",
    ],
  },
];

const careerItems = [
  {
    title: "腾讯营销 · 产品互联网营销实习生",
    location: "上海",
    period: "2026.07 - 至今",
    current: true,
    details: [
      "内容操盘：对接 AI 产品推广诉求，面向 B 端行业客户策划公众号内容体系、输出价值文案，全程跟进视觉设计与排版落地，实现内容全链路闭环交付",
      "专区统筹：参与腾讯营销学堂产业专区建设，负责专题架构规划、物料口径标准化及上线节奏管控，搭建规范化产业内容阵地",
      "赛事传播：撰写媒体 Brief、对外宣传文案及沟通物料，联动合作媒体推进产业圈层宣发排期，协助落地赛事传播工作",
      "线下协同：配合产业开展线下对客营销活动，统筹产品价值传递与精准客户触达，打通线上内容与线下活动的一体化营销闭环",
    ],
  },
  {
    title: "小米科技 · 整合营销实习生",
    location: "新加坡",
    period: "2026.04-2026.06",
    details: [
      "本地化营销策划：跟随总部传播方向，制定新品上市、门店开业及促销节点的本地化传播策略，统筹社媒内容规划、UGC/KOL 协同及活动机制设计",
      "营销项目执行：协调设计师、agency、销售及电商团队，推进视觉、CTA、价格优惠、产品链接及活动规则等落地",
      "广告投放支持：配合 Meta/Google 投放，整理广告素材、Offer、UTM 及 Landing Page，支持曝光、点击到转化链路",
      "数据复盘与优化：跟踪社媒内容与线上广告投放数据表现，评估内容互动、活动热度、投放成本及转化效率，为内容排期和广告策略优化提供依据",
    ],
  },
  {
    title: "阳狮集团 · 公关实习生",
    location: "北京",
    period: "2025.04-2025.05",
    details: [
      "舆论监控：通过 Python 抓取实时页面数据，监控多个社交媒体平台的在线公众情绪，帮助团队识别潜在的公关风险",
      "数据整合：整合并维护超过 50 家门店的品牌店铺表现数据，生成月度监测看板，提升客户决策效率并促进行动调整",
    ],
  },
  {
    title: "德中维迪玛商务咨询（北京）有限公司 · 办公室助理实习生",
    location: "北京",
    period: "2024.08-2024.11",
    details: [
      "活动策划：负责公司 20 周年庆典推广部分物料设计与场地协调，包括邮件横幅与赞助方案等，最终邀约超过 150 位客户",
      "宣传设计：利用 Canva 平台设计并制作公司品牌宣传材料，包括电子邮件横幅和赞助套餐，提升公司形象并推动营销活动",
      "数据调研：系统性收集和整理展览及行业数据，并利用 Microsoft Excel 进行数据分析与可视化，产出数据报告为客户提供决策支持",
    ],
  },
  {
    title: "环球网 · 海外社交媒体实习生",
    location: "北京",
    period: "2024.01-2024.04",
    details: [
      "账号运维：负责公司海外平台账号运营，包括文案创作、图文编辑、粉丝互动等，发布帖文 200+，负责撰写账号数据周报、月报等，实时跟进用户",
      "账号创建：独立创建负责德语 YouTube 账号，负责期间视频播放量达到 35000 次，互动量超 200 次",
      "活动策划：主导海外社交媒体活动，从调研、创意策划到战略落地，结合客户需求与平台特性，产出 3 份跨文化数字推广方案",
    ],
  },
];

const interestItems = [
  {
    title: "刘文利性教育工作组 · bilibili账号运营",
    location: "北京",
    period: "2024.06-至今",
    details: [
      "内容策划：负责账号内容的整体策划与管理，推动性教育与女性议题相关话题的讨论，互动增强粉丝参与感与话题热度",
      "视频剪辑：使用剪映进行视频的拍摄与剪辑，确保视频质量与创意性，单视频最高播放量破万，显著提升观众的互动参与",
    ],
  },
  {
    title: "技术能力",
    location: "职业技能",
    period: "工具与数据",
    details: [
      "善用 Python 编程进行数据处理，熟练运用 Excel 进行数据分析与处理，掌握 SQL 并精通 R 语言的数据处理方法，具备 Canva 设计与剪映视频剪辑技能，能够高效地运用这些工具进行数据分析、创意设计及视频内容制作",
    ],
  },
  {
    title: "语言能力",
    location: "职业技能",
    period: "多语言沟通",
    details: [
      "具备扎实的英语语言能力，持有英语四六级以及专业四级、八级证书，并通过托福考试获得 106 分；精通德语，获得德语专业八级 PGH 证书，能够在多语言环境中进行流畅沟通和工作",
    ],
  },
];

export default function PathsPage() {
  return (
    <main className="paths-shell">
      <div className="path-header">
        <div className="path-actions">
          <Link className="back-link" href="/">
            返回首页
          </Link>
          <KeywordBubbles />
        </div>
        <div>
          <p className="eyebrow">Growth Path</p>
          <h1>完整路径</h1>
        </div>
      </div>
      <PathTabs
        academicItems={academicItems}
        careerItems={careerItems}
        interestItems={interestItems}
      />
    </main>
  );
}
