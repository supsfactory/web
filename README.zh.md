<div align="center">
  <h1>SUPsfactory</h1>
  <p>创办你自己的 SUP 品牌——10 个制造平台、真实 OEM/ODM、双语营销站、边缘原生部署。</p>
  <p>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License"></a>
    <a href="https://developers.cloudflare.com/workers/"><img src="https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white" alt="Cloudflare Workers"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="TypeScript"></a>
  </p>
  <p>
    <em>Bright Ocean Studio × Premium Manufacturing——基于 FlareStarter 全栈 SaaS 起步模板构建的完整 SUP 品牌平台。</em>
  </p>
</div>

---

[English](README.md) | **简体中文**

SUPsfactory 是 SUP（站立式桨板）OEM/ODM 制造商的生产级官网。它将完整设计的双语（en / zh）营销站与 [FlareStarter](https://github.com/FlareStarter/flarestarter) 的全套 SaaS 后端结合：认证、计费、邮件、运营后台等——每个功能都是真实实现，没有 mock 或占位，全部跑在 Cloudflare 低成本（乃至免费）技术栈上（Workers + D1 + KV + R2）。

## 营销站

自研 "Bright Ocean Studio × Premium Manufacturing" 设计系统：Ocean White / Ocean Blue / Aqua / Sunset / Deep Navy 配色、Manrope + Inter 字体、水波动效、玻璃卡片与滚动渐显——亮/暗双模式。

| 页面 | 内容 |
|------|------|
| **首页** | 100svh 海洋主视觉 + 旗舰产品实拍图、实时数据、选择我们（数据卡）、客户群体（场景大图）、**Custom SUP Studio 横向滑动 5 层流程**（板型→图案→防滑垫→配件→包装）、产品目录预览、5 步合作时间线、品牌故事画廊、CTA 水波带 |
| **产品** | **10 个真实系列**全目录（SKU、规格、价格、实拍图、工艺说明）带 SKU + 价格徽章——见下表 |
| **SUP Design Studio** | 可交互配置器：挑颜色、实时预览板面效果图——「把你的 Logo 放上去」的获客演示 |
| **解决方案 / 客户群体** | 面向初创品牌、度假村、俱乐部与贴牌客户的专属板块 |
| **5 个 SEO 落地页** | `/sup-startup-brands`、`/sup-for-resorts`、`/sup-for-clubs`、`/private-label-sup`、`/custom-sup-manufacturing`——针对搜索与 AI 答案引擎的关键词页 |
| **画廊 / 合作流程 / 关于我们 / 联系我们** | 真实项目照片品牌故事、制造时间线、公司介绍、询盘表单 |

**10 个产品系列**（数据在 `src/features/site/content.ts`，照片由 `assets.afarer.com` CDN 提供）：

| 系列 | SKU | 价格 | 定位 |
|------|-----|------|------|
| SUP Explorer 11' | SUP-EX11 | $399 | 全能入门平台，完整套装 |
| Ocean Pulse | SUP-OP11 | $449 | 机械热压花蒂芙尼等高线 |
| Cheetah Surge | SUP-CS11 | $449 | 多彩 EVA 拼块 |
| Medusa Glow | SUP-MG11 | $449 | 瑜伽向薄荷梦境 |
| Deep Wave | SUP-DW11 | $449 | CNC 拼块裁切 + PANTONE 校准 |
| Floating Lotus | SUP-FL11 | $449 | 激光蚀刻 EVA + 渐变 UV |
| Jellyfish Moon | SUP-JM11 | $449 | 多工艺组合 + 丝印侧边 |
| Living Water | SUP-LW11 | $449 | UV 印刷 + 机械压花 |
| Ocean Voyager | SUP-OV11 | $449 | 巡航向海龟图案 + 统一配件套件 |
| Tropic Breeze | SUP-TB11 | $449 | 冲切 EVA 拼布旅行板 |

每个系列都是制造平台——板型、图案、EVA 防滑垫与包装都适配客户品牌（单图设计 50 件起订）。

**AI 友好内容**：`/llms.txt` 与 `/llms-full.txt` 同时索引文档与**完整产品目录**（名称、SKU、规格、价格、适用人群），答案引擎可直接引用真实产品信息。

## 底层平台

| 模块 | 能力 |
|------|------|
| **认证** | 基于 [better-auth](https://better-auth.com) 的邮箱密码登录（强制邮箱验证）、找回密码、注销账号。Google 与 GitHub OAuth——未配置环境变量时按钮自动隐藏（优雅降级）。会话以 D1 作为唯一数据源，并配合 cookie 缓存。 |
| **计费** | [Stripe](https://stripe.com) 订阅（月付/年付）**以及**一次性终身买断、Customer Portal 入口、基于套餐的路由守卫 (`requirePlan`)、幂等 webhook 处理、可靠触发的计费事件钩子。续费扣款失败时在 app 内提示更新支付方式——见 [计费文档](src/content/docs/features/billing.mdx)。 |
| **存储** | [R2](https://developers.cloudflare.com/r2/) 对象存储，内置完整的头像上传功能（校验 + 私有服务路由流式返回）。本地开发经 miniflare 零配置——见 [存储文档](src/content/docs/features/storage.mdx)。 |
| **邮件** | [Resend](https://resend.com) + 字符串模板（React Email 在 workerd 上不可用）。没配 API key 时邮件打印到控制台，本地开发不会被卡住。 |
| **等待列表** | 完整 pre-launch 报名闭环：公开报名页、Turnstile 防刷、后台管理页 + CSV 导出、报名邮箱自动同步 [Resend](https://resend.com) audience（未配 key 时优雅跳过）。 |
| **更新日志** | MDX 驱动、按语言区分、带 `published` 开关的站内 `/changelog` 页。 |
| **赞助** | 独立 `/sponsor` 页演示真实 Stripe 收款闭环：**纯捐赠不解锁**。一次性与月度均为金额驱动（PWYW），支持微信支付（走 Stripe `wechat_pay`），GitHub 致谢头像墙按金额分层。配置在 `src/features/sponsor/sponsor.config.ts`。 |
| **反馈箱** | 登录用户提交反馈 +「我的反馈」列表；后台治理页做状态流转与回复。同时是**加你自己功能的教学范本**：纵向切片、归属过滤、双门控模式与双池测试——见 [反馈文档](src/content/docs/features/feedback.mdx)。 |
| **i18n** | 通过 TanStack 的 `{-$locale}` 可选前缀做路径式多语言路由——英文在 `/`，中文在 `/zh`。营销文案、UI 字符串与文档均已翻译。 |
| **SEO** | 按语言生成的 sitemap、`hreflang`、canonical、OpenGraph 标签（封面图已改为 afarer CDN 的真实产品实拍）、`robots.txt`、认证页 `noindex`，以及 5 个关键词落地页。 |
| **AI 友好** | **部署侧**：内置 [`llms.txt`](/llms.txt) 索引与 [`llms-full.txt`](/llms-full.txt) 全文语料——文档**加产品目录**；`/docs-md/*` 提供去除 frontmatter 的干净 Markdown；`robots.txt` 主动指向二者。**代码侧**：[`AGENTS.md`](AGENTS.md) 是编码 agent 的单一事实来源（自动导入 [`CLAUDE.md`](CLAUDE.md)）。 |
| **后台** | better-auth admin 插件：角色、封禁、用户模拟登录、可搜索/分页用户表、统计仪表盘——全部基于真实数据。 |
| **主题** | 暗色优先 + 亮/暗切换，cookie 持久化。 |
| **安全 & 可观测性** | Turnstile 防刷、安全响应头 + 生产 CSP、认证端点限流（D1 存储）、启动期 env 校验（fail-fast）；CF Web Analytics（无 cookie）与 Sentry 上报——均可选，留空即关。 |
| **运维** | Cron Triggers 参考实现（每日清理过期 session/token/限流行）、local/staging/prod 多环境、GitHub Actions CI（lint + typecheck + build）。 |

## 技术栈

- **[TanStack Start](https://tanstack.com/start)**（React 19、文件式路由、Server Functions）
- **[Cloudflare Workers](https://workers.cloudflare.com)** 运行时，经 `@cloudflare/vite-plugin` 部署
- **[D1](https://developers.cloudflare.com/d1/)** (SQLite) + **[Drizzle ORM](https://orm.drizzle.team)** + 数据迁移
- **[KV](https://developers.cloudflare.com/kv/)** 缓存、**[R2](https://developers.cloudflare.com/r2/)** 对象存储
- **[better-auth](https://better-auth.com)**、**[Stripe](https://stripe.com)**、**[Resend](https://resend.com)**
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Vitest](https://vitest.dev)**（Node 单测 + 经 `@cloudflare/vitest-pool-workers` 的 Workers/D1 集成测试）

## 前置依赖

- **Node.js** >= 22（推荐 [nvm](https://github.com/nvm-sh/nvm) 或 [volta](https://volta.sh/)）
- **pnpm** >= 9
- 一个 **Cloudflare** 账号（免费档足够起步）
- `wrangler` CLI（已作为 dev 依赖安装，无需全局安装）

## 快速开始

```bash
# 1. 安装依赖
pnpm install

# 2. 生成本地 Wrangler 配置（含 D1/KV id 等，git 忽略；参考模板已提交）
cp wrangler.example.jsonc wrangler.jsonc

# 3. 配置本地环境变量（复制示例，按需填写）
cp .dev.vars.example .dev.vars
#    本地一切都可选——Stripe/Resend key 留空会优雅降级
#    （无计费入口、邮件打印到控制台）。

# 4. 建立本地 D1 表结构
pnpm db:migrate:local

# 5. 跑起来！
pnpm dev          # 访问 http://localhost:3000
```

### 常用脚本

```bash
pnpm dev               # 开发服务器 (:3000)
pnpm build             # 生产构建
pnpm test              # 全量测试 (Vitest)
pnpm typecheck         # tsc --noEmit
pnpm lint              # eslint
pnpm db:generate       # 从 schema 变更生成 Drizzle 迁移
pnpm db:migrate:local  # 对本地 D1 应用迁移
pnpm db:reset:local    # 清空 + 重新迁移 + 重新填充测试数据
pnpm cf-typegen        # 从 wrangler.jsonc 重新生成 worker-configuration.d.ts
```

## 目录结构

```
src/
  features/        # 按业务逻辑纵向切片，每个模块自包含
    site/          # 营销内容（content.ts：产品/板块/FAQ）+ landings.ts + llm.ts
    auth/          # better-auth 配置、中间件、社交登录按钮
    billing/       # Stripe provider、权益控制、webhook、事件钩子
    storage/       # R2 对象存储：校验上传 + 服务路由（头像）
    email/         # Resend 客户端 + 字符串模板
    waitlist/      # 报名页 + Turnstile + 后台管理 + CSV 导出 + Resend audience 同步
    audience/      # Resend 联系人/受众同步（waitlist 复用）
    changelog/     # MDX 驱动的站内更新日志页 (/changelog)
    sponsor/       # 独立赞助页：一次性/月度 Stripe 收款 + GitHub 致谢墙
    feedback/      # 示例反馈箱：提交/我的列表/后台治理——加自己功能的教学范本
    i18n/          # 语言字典 (en/zh) + provider
    seo/           # sitemap、robots、多语言 head 标签（og:image、hreflang）
    docs/          # fumadocs 源/布局配置 + llms.txt 文本生成
    admin/         # admin 插件接线 + 仪表盘
    analytics/     # CF Web Analytics beacon（可选）
    maintenance/   # Cron 定时清理任务（过期 session/token/限流行）
    theme/         # 暗色优先的主题切换
  components/
    ui/            # 基础组件
    marketing/     # hero、why-us、who-we-serve、studio-section、products-section、
                   # how-it-works、gallery-section、cta、reveal、board-art、landing-page
  routes/
    {-$locale}/    # 带可选语言前缀的页面：/、/zh、/products、/solutions、/customizer、
                   # /sup-startup-brands、/admin、/app …
    api/, docs/, docs-md/, llms.txt, robots.txt, sitemap.xml   # 顶级路由（locale 组之外）
  content/docs/    # 站内文档内容 (fumadocs 的 mdx 源)
  db/              # Drizzle schema barrel + client + 迁移逻辑
drizzle/           # 生成的 SQL 迁移文件（仓库根，与 src/ 同级）
```

> **产品照片**目前热链自 `assets.afarer.com`（制造商自有 CDN）。上线前把 `src/features/site/content.ts`（及 `src/features/seo/seo.ts` 的 `OG_IMAGE`）里的 URL 换成你自己的资产。

## 环境变量

完整清单见 [`.dev.vars.example`](.dev.vars.example)。本地开发时一切可选、优雅降级。生产环境 secrets 及配置方式见 [部署文档](src/content/docs/getting-started/deploy.mdx)：

- `BETTER_AUTH_SECRET`、`BETTER_AUTH_URL`（同时决定 canonical / sitemap origin）—— **必填**；启动时校验。
- `RESEND_API_KEY`、`EMAIL_FROM`（邮件服务；留空则由控制台捕获）。
- `GOOGLE_CLIENT_ID/SECRET`、`GITHUB_CLIENT_ID/SECRET`（可选社交登录）。
- `STRIPE_SECRET_KEY`、`STRIPE_WEBHOOK_SECRET`、`STRIPE_PRICE_PRO_*`（计费）；`STRIPE_WECHAT_PAY_ENABLED`（可选）。
- `ADMIN_EMAILS`（管理员邮箱）。
- `TURNSTILE_SITE_KEY`、`TURNSTILE_SECRET_KEY`（可选 bot 防护）。
- `CF_ANALYTICS_TOKEN`、`SENTRY_DSN`（可选分析 + 错误上报）。

每个可选集成均优雅降级：key 留空即自动关闭。启动期 env 校验会拦截错误配置（缺失必填项、OAuth/Turnstile 配了一半）并快速失败。

## 部署

资源与 secrets 配好后，上线只需两步：

```bash
CLOUDFLARE_ENV=production pnpm build   # 环境在构建时选定（见下）
wrangler deploy
```

> Cloudflare 运行环境在**构建时**通过 `CLOUDFLARE_ENV` 选定（而不是 `wrangler deploy --env`），因为 Vite 插件会将选定环境的 bindings 注入构建产物。

首次部署的**完整流程**——创建 D1/KV、设置 secrets、远程迁移、配置 Stripe webhook——请参阅 [部署文档](src/content/docs/getting-started/deploy.mdx)。

> R2 已在 `wrangler.jsonc` 默认启用并接入代码（头像上传参考）。部署前先建桶：`wrangler r2 bucket create supsfactory-files`（见 [存储文档](src/content/docs/features/storage.mdx)）。

## GitHub Actions 配置

仓库内置两个工作流：`ci.yml`（lint + typecheck + test + build，无需任何密钥）和 `deploy.yml`（每次 push 到 `main` 用 `CLOUDFLARE_ENV=production` 构建并部署）。在 **Settings → Secrets and variables → Actions** 中配置：

**Variables**（非敏感标识符，供 `.github/scripts/gen-wrangler.mjs` 使用）：

| 变量 | 必填 | 获取方式 |
|------|------|----------|
| `CF_PROD_D1_ID` | ✅ | 生产 D1 数据库 id——Dashboard → D1，或 `wrangler d1 list`（缺失则部署失败） |
| `CF_PROD_KV_ID` | ✅ | 生产 KV 命名空间 id——Dashboard → Workers & Pages → KV，或 `wrangler kv namespace list` |
| `CF_PROD_DOMAIN` | ❌ | 自定义域名，如 `supsfactory.com`（作为 custom domain 路由绑定） |

**Secrets**（部署凭据）：

| 密钥 | 获取方式 |
|------|----------|
| `CLOUDFLARE_API_TOKEN` | Dashboard → My Profile → API Tokens → Create Token——权限 `Workers Scripts:Edit`、`D1`、`KV`、`R2`。未配置时部署步骤优雅跳过（不报红叉） |
| `CLOUDFLARE_ACCOUNT_ID` | 32 位 hex 账号 ID——Dashboard 侧栏 / Workers 概览页 |

**Secrets**（应用密钥，每次部署经 `wrangler secret bulk` 自动同步到 Worker）：

| 密钥 | 获取方式 | 留空 = |
|------|----------|--------|
| `BETTER_AUTH_SECRET` | `openssl rand -base64 32` | **必填**——启动 fail-fast |
| `BETTER_AUTH_URL` | 生产域名，如 `https://supsfactory.com`（同时决定 canonical/sitemap origin） | **必填** |
| `RESEND_API_KEY` | Resend → API Keys | 邮件打印到控制台 |
| `EMAIL_FROM` | 如 `SUPsfactory <onboarding@你的域名.com>`（先在 Resend 验证域名） | 无发件人 |
| `RESEND_AUDIENCE_ID` | Resend → Audiences → id | 不同步 waitlist 受众 |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google Cloud Console → OAuth 客户端，回调 `https://api.<域名>/api/auth/callback/google` | 登录按钮隐藏 |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub → Settings → Developer settings → OAuth Apps | 登录按钮隐藏 |
| `STRIPE_SECRET_KEY` | Stripe Dashboard → Developers → API keys（`sk_live_…`） | 计费关闭 |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Webhooks → 端点（`whsec_…`） | webhook 校验失败 |
| `STRIPE_PRICE_PRO_MONTHLY` / `_YEARLY` / `_LIFETIME` | Stripe → Products → Price id（`price_…`） | 无 Pro 定价 |
| `ADMIN_EMAILS` | 逗号分隔的管理员邮箱 | 无管理员 |
| `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Dashboard → Turnstile → 创建 widget | 表单照常可用（无验证码） |
| `CF_ANALYTICS_TOKEN` | Dashboard → Analytics & Logs → Web Analytics | 不注入统计 |
| `SENTRY_DSN` | Sentry 项目 → Client Keys (DSN) | 不上报错误 |

说明：GitHub 里留空的 key 在同步时自动跳过（不会覆盖 Cloudflare 已有值）；要"删除"某密钥请先在 GitHub 清空，再手动清理 Cloudflare 侧。`STRIPE_WECHAT_PAY_ENABLED` 不在同步清单内——生产要开启微信支付请手动 `wrangler secret put STRIPE_WECHAT_PAY_ENABLED --env production`。

## 文档

文档内置于主应用，访问 `/docs` 即可阅读（基于 [Fumadocs](https://fumadocs.dev)，随应用部署）。
源文件在 [`src/content/docs/`](src/content/docs/)：

- [`install.mdx`](src/content/docs/getting-started/install.mdx) —— 本地环境安装
- [`deploy.mdx`](src/content/docs/getting-started/deploy.mdx) —— 生产环境部署
- [`branding.mdx`](src/content/docs/customization/branding.mdx) —— 标题/描述/社交预览图/logo
- [`billing.mdx`](src/content/docs/features/billing.mdx) —— 计费与订阅、扣款失败（dunning）处理
- [`security.mdx`](src/content/docs/platform/security.mdx) —— 安全头/CSP、env 校验、限流、Turnstile
- [`observability.mdx`](src/content/docs/platform/observability.mdx) —— 分析 + Sentry
- [`storage.mdx`](src/content/docs/features/storage.mdx) —— R2 对象存储与文件上传
- [`migrations.mdx`](src/content/docs/getting-started/migrations.mdx) —— D1 迁移流程
- [`i18n.mdx`](src/content/docs/features/i18n.mdx) —— 语言路由 & SEO origin
- [`admin.mdx`](src/content/docs/features/admin.mdx) —— 运营后台引导 & 角色
- [`feedback.mdx`](src/content/docs/features/feedback.mdx) —— 反馈箱示例域：垂直切片解剖 + 照抄清单
- [`cf-gotchas.mdx`](src/content/docs/platform/cf-gotchas.mdx) —— Cloudflare / workerd 踩坑记录

## 联系

- **询盘与演示**：使用站内 [联系表单](/contact)。
- **遇到问题？** 本地运行或部署问题，请在仓库提 issue。
- [`CONTRIBUTING.md`](CONTRIBUTING.md) —— 本地开发环境搭建、检查项与约定
- [`CHANGELOG.md`](CHANGELOG.md) —— 版本变更记录

## 许可证

本项目基于 [Apache License 2.0](LICENSE) 开源协议。
