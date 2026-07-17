import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("homepage and paths contain the core requested content", async () => {
  const [home, paths] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/paths/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(home, /贵阳市/);
  assert.match(home, /出生地/);
  assert.match(home, /北京市/);
  assert.match(home, /大学/);
  assert.match(home, /新加坡/);
  assert.match(home, /研究生/);
  assert.match(home, /上海市/);
  assert.match(home, /李函忆 Penny/);
  assert.doesNotMatch(home, /个人主页/);
  assert.match(home, /成长旅途/);
  assert.match(home, /Personal Website/);
  assert.match(home, /查看完整路径/);
  assert.match(home, /Every man's life represents a path to herself/);
  assert.match(home, /Das Leben jedes Menschen ist ein Weg zu sich selber hin/);

  assert.match(paths, /新加坡国立大学 · 硕士/);
  assert.match(paths, /北京外国语大学 · 本科/);
  assert.match(paths, /腾讯营销 · 产品互联网营销实习生/);
  assert.match(paths, /小米科技 · 整合营销实习生/);
  assert.match(paths, /刘文利性教育工作组 · bilibili账号运营/);
  assert.match(paths, /技术能力/);
  assert.match(paths, /语言能力/);
  assert.match(
    await readFile(new URL("../app/paths/keyword-bubbles.tsx", import.meta.url), "utf8"),
    /数据分析.*市场营销.*广告.*创意.*团队协作.*INFJ/s,
  );
});
