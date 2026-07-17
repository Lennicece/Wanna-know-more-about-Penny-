"use client";

import { useState } from "react";

const keywords = ["数据分析", "市场营销", "广告", "创意", "团队协作", "INFJ"];

export function KeywordBubbles() {
  const [burst, setBurst] = useState(0);

  return (
    <div className="keyword-bubble-area">
      <button
        className="back-link keyword-trigger"
        onClick={() => setBurst((value) => value + 1)}
        type="button"
      >
        关键词气泡
      </button>
      <div className="keyword-bubble-layer" key={burst} aria-hidden="true">
        {burst > 0
          ? keywords.map((keyword, index) => (
              <span
                className={`keyword-bubble keyword-bubble-${index + 1}`}
                key={keyword}
              >
                {keyword}
              </span>
            ))
          : null}
      </div>
    </div>
  );
}
