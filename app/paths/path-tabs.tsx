"use client";

import { useState } from "react";

type TimelineItem = {
  title: string;
  location: string;
  period: string;
  subtitle?: string;
  current?: boolean;
  details: string[];
};

type PathTabsProps = {
  academicItems: TimelineItem[];
  careerItems: TimelineItem[];
  interestItems: TimelineItem[];
};

export function PathTabs({
  academicItems,
  careerItems,
  interestItems,
}: PathTabsProps) {
  const [activeTab, setActiveTab] = useState<
    "academic" | "career" | "interest"
  >("academic");
  const items =
    activeTab === "academic"
      ? academicItems
      : activeTab === "career"
        ? careerItems
        : interestItems;

  return (
    <section className="timeline-section">
      <div className="tab-list" role="tablist" aria-label="路径分类">
        <button
          aria-selected={activeTab === "academic"}
          className="tab-button"
          onClick={() => setActiveTab("academic")}
          role="tab"
          type="button"
        >
          学术发展路径
        </button>
        <button
          aria-selected={activeTab === "career"}
          className="tab-button"
          onClick={() => setActiveTab("career")}
          role="tab"
          type="button"
        >
          职业实习发展路径
        </button>
        <button
          aria-selected={activeTab === "interest"}
          className="tab-button"
          onClick={() => setActiveTab("interest")}
          role="tab"
          type="button"
        >
          兴趣与技能
        </button>
      </div>

      <div className="timeline-list">
        {items.map((item) => (
          <article
            className={`timeline-item${item.current ? " current-item" : ""}`}
            key={`${item.title}-${item.period}`}
          >
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-topline">
                <h2>{item.title}</h2>
                <span>
                  {item.location} | {item.period}
                </span>
              </div>
              {item.subtitle ? <p className="timeline-subtitle">{item.subtitle}</p> : null}
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
