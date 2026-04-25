# 05. 実装ノート

**プロジェクト名**: CHAMP ティザーサイト
**作成日**: 2026-04-25
**バージョン**: 1.0(初回実装)

---

## 1. ファイル構成と各ファイルの役割

| パス | 役割 |
|---|---|
| `index.html` | 日本語版 LP。8 セクション 1 ページ構成。 |
| `en/index.html` | 英語版 LP。JA 版と同構造で全文を英訳。 |
| `assets/css/styles.css` | JA / EN 共通スタイル。Claude Design 版の 7 つの `<style>` ブロックを統合し、レスポンシブ対応 (`max-width: 900px` / `640px`) を追記。 |
| `assets/js/main.js` | IntersectionObserver による reveal、パララックス、ランダム微変化(How ステップ・Theory カード・ティッカー速度)。 |
| `design-handoff/CHAMP_LP.html` | Claude Design が生成した初版モックアップ。実装の参照素材として保存。本番には未使用。 |
| `.nojekyll` | GitHub Pages の Jekyll を無効化。`_` で始まるディレクトリの除外を防ぐ予防策。 |
| `docs/01_requirements.md` | 要件定義書。 |
| `docs/02_content.md` | 公開情報・コピーの正本。 |
| `docs/05_implementation.md` | 本ファイル。 |
| `docs/06_adjustments.md` | ローカル確認チェックリスト。 |

---

## 2. ベース HTML からの主な変更点(Task 3 五項目)

`design-handoff/CHAMP_LP.html` をベースに、以下を変更して `index.html` を生成。

### 2-1. Waitlist フォーム → CTA リンクに置換

- 元: `<form class="waitlist-form" onsubmit="handleSubmit(event)">` 内に email 入力欄 + 送信ボタン + JS で擬似送信。
- 変更後: `<a class="btn primary lg" href="#waitlist-todo">Join the Waitlist →</a>` のみ。
- 旧 `.waitlist-form` / `.waitlist-grid` / `.waitlist-input` 系の CSS は削除。代わりに最小限の `.waitlist-cta` を追加。
- HTML コメントに `<!-- Placeholder CTA — replace href with Google Form URL when ready -->` を残し、後日差し替えの導線を明示。
- 同時に `assets/js/main.js` から `handleSubmit()` を削除。

### 2-2. Footer を 4 列 → 2 列に簡略化

- 削除: COMPANY / LEGAL / FOLLOW 列。
- 残存: CHAMP 説明(`grid-column: 1 / span 5`)+ PRODUCT(`grid-column: 9 / span 4`)。
- レイアウトのバランス: PRODUCT を右側にアンカーし、`MADE WITH BEHAVIOR SCIENCE / TOKYO` のコピーライト右寄せと整合。

### 2-3. Footer 内ダミーリンク全削除

`About / Blog / Press / Contact / Privacy / Terms / Cookies / Twitter / Instagram / YouTube` のすべての `<a href="#">` を含む `<ul>` を削除。

### 2-4. 言語切替トグルにリンク設定

- ベース版は `<button>` で見た目のみの切替。
- 変更後は `<a>` に置換し、JA → `index.html`(JA ページ自身)/ EN → `en/index.html` を相互参照。
- 現在ページのリンクには `class="active"` と `aria-current="page"` を付与しハイライト。

> **GitHub Pages 仕様によるパス決定**: Task 3 仕様書では `href="/"` `href="/en/"` を指定されていたが、当リポジトリはプロジェクトページとして公開されるため、絶対パス `/` は `https://fwipin.github.io/` (gh.io ドメイン直下) を指してしまい、サイト外に遷移する。Live Server と GitHub Pages の双方で確実に動作する**相対パス**に変更した(`index.html` / `en/index.html` / `../index.html`)。

### 2-5. meta 情報を `02_content.md § 0` グローバル情報に従って設定

- `<title>`: `CHAMP — Continuous Habit Assistance & Mentoring Program`(JA / EN 共通)
- `<meta name="description">`: JA 版 / EN 版それぞれ § 0 のメタディスクリプションを設定
- Open Graph: `og:type=website`, `og:title`, `og:description`, `og:url`(各言語ページ別 URL), `og:site_name=CHAMP`, `og:locale`(`ja_JP` / `en_US`), `og:locale:alternate`
- `og:image` は未作成のためコメントで TODO を残す

---

## 3. 翻訳方針(Task 4 の判断)

### 3-1. 出典

`02_content.md` の各セクション表に記載されている **EN 欄をそのまま転写** することを基本方針とした。
独自意訳・流麗化は加えていない。

### 3-2. 出典外で英訳を補ったコピー

`02_content.md` に EN 欄が存在しないものは、編集デザイン誌的な簡潔さを優先し、最小限のラベルとして補った。レビュー時に上書き要望があれば差し替えやすい。

| 箇所 | JA(原文) | EN(補完) |
|---|---|---|
| § 003 sec-label | `CHAMP がもたらす変化` | `WHAT CHAMP CHANGES` |
| § 004 sec-label | `設計思想` | `THREE PRINCIPLES` |
| § 004 description | `CHAMP は 3 つの原則で…` | `CHAMP is designed around three principles. Every feature, UI element, and notification flows from them.` |
| § 005 sec-label | `背景理論` | `FIVE PILLARS` |
| § 006 sec-label | `使い方は 3 ステップ` | `THREE STEPS` |
| § 006 各ステップ説明 | (HTML 内の長文 JA) | 02_content.md の短い EN を基に若干補完して翻訳 |
| § 006 各ステップ箇条書き | (JA) | 直訳 |
| § 007 sec-label | `最初のテーマ` | `STARTING POINT` |
| § 008 sec-label | `最初のメンバーになる` | `BE THE FIRST` |
| § 004 各 Principle 本文 | (HTML 内の長文 JA) | 02_content.md の短い EN を基に若干補完して翻訳 |

### 3-3. 翻訳しない要素(意図的に英語のまま両言語共通)

- マーキー(`NOW IN PRIVATE BETA — EST. 2026` 等)
- ナビメニュー(`Problem` / `Solution` / `How` / `Waitlist`)
- Hero メタ(`A NEW SCIENCE OF HABIT` / `2026 — VOL.01`)
- Hero 下部マーカー(`↓ SCROLL TO READ` / `07 SECTIONS / 1 THESIS`)
- `FIRST THEME` / `[ 2026 SUMMER LAUNCH ]` / `LAUNCH 2026` / `EARLY ACCESS / 2026 SUMMER`
- §007 Coming Soon リスト(`Sleep Quality` / `Focus & Deep Work` / `Reading Habit` / `Mindfulness`)
- §002 統計カードラベル(`AVG. DAYS TO FORM A HABIT` 等)
- §004 各 Principle 補足ラベル(`PERSONALIZATION FROM DAY ZERO` 等)
- §006 ステップタグ(`STEP 01 / WEEK 0` 等)
- §008 補足キャプションの末尾(`NO SPAM. UNSUBSCRIBE ANYTIME.`)
- フッターのコピーライト(`© 2026 CHAMP. ALL RIGHTS RESERVED.` / `MADE WITH BEHAVIOR SCIENCE / TOKYO`)

### 3-4. CSS クラスの切替

JA 版で `class="ja-display"`(Noto Sans JP 優先)を使っていた巨大見出しは、EN 版では `class="display"`(Helvetica Neue 優先)に置換。日本語特有のカーニング・行間調整を英文に最適化した値へ切り替えるため。

---

## 4. ファイル分離方針(Task 2 確認済み)

Claude Design 版はインライン `<style>` が 7 ブロック・インライン `<script>` が 1 ブロックの単一ファイル構成だった。これを以下に分離した。

- 共通スタイル → `assets/css/styles.css`(出現順を維持して結合)
- スクリプト → `assets/js/main.js`

JA / EN 双方から `link rel="stylesheet"` と `script src` で参照する。重複コピーを避け、メンテナンスを一元化。

セクション固有のスタイルもクラスベースのため、結合に伴うスコープ衝突は発生しない。挙動はベース版と同等。

---

## 5. レスポンシブ対応

ベース版にメディアクエリは存在しなかったため、`assets/css/styles.css` に最小限のブレークポイントを追加:

- `@media (max-width: 900px)`: タブレット相当。How ステップを縦積み、Theory カードを 2 列、コンテナ余白を縮小。
- `@media (max-width: 640px)`: スマートフォン相当。`grid-column` のインラインスタイルを `!important` で上書きして 1 列スタックに、トップナビリンクを非表示(言語トグル + ロゴのみ残す)、巨大セクション余白を縮小、CTA を全幅に。

`!important` は **インラインスタイルを CSS から上書きするための已むを得ない選択肢**。ベース HTML をリファクタしないという制約(「デザインは可能な限り維持」)とのトレードオフ。

---

## 6. 既知の制約

| # | 内容 | 対応見込み |
|---|---|---|
| 1 | Waitlist CTA は `#waitlist-todo` プレースホルダ。クリックしても何も起こらない。 | Google フォーム作成後に href を差し替え |
| 2 | favicon (`<link rel="icon">`) 未設定 | `02_content.md § 11` の素材作成後に追加 |
| 3 | `og:image` 未設定 | OGP 画像作成後に追加 |
| 4 | EN 版の sec-label / 一部本文は 02_content.md に EN 欄がないため補完翻訳済み(本書 § 3-2 参照) | レビュー後に必要なら差し替え |
| 5 | レスポンシブは「最低限通る」レベル。ブレークポイント間の中間幅で意図しない挙動の可能性あり | スマホ実機確認後に微調整 |
| 6 | パララックス JS は `scroll` イベントベースで `prefers-reduced-motion` 未対応 | 必要なら後追加 |
| 7 | ランダム微変化(`Math.random()`)はリロードごと変化。Theory カードと How ステップで初期 SSR 想定の `class="accent"` / `class="alt"` 等が一瞬見える可能性あり(JS 適用前) | 気になる場合は CSS 側で初期値を中立化 |

---

## 7. 起動方法

### Live Server(ローカル確認)

1. VSCode で本リポジトリを開く
2. `index.html` を右クリック → **Open with Live Server**
3. 保存ごとに自動リロード
4. EN 版は `en/index.html` を同様に開くか、起動後にヘッダー右の `EN` トグルから遷移

### 直接ブラウザで開く

`index.html` をダブルクリックでも表示は可能だが、Google Fonts と同一オリジン制約の関係で Live Server 経由の方が安定する。

### GitHub Pages(公開)

`main` ブランチへの push で自動デプロイ(設定済み):

```bash
git push origin main
```

公開後、数十秒〜数分でビルドが完了。

---

## 8. 関連ドキュメント

- [docs/01_requirements.md](01_requirements.md) — 要件定義書
- [docs/02_content.md](02_content.md) — 公開情報・コピー一覧
- [docs/06_adjustments.md](06_adjustments.md) — ローカル確認チェックリスト
- [design-handoff/CHAMP_LP.html](../design-handoff/CHAMP_LP.html) — Claude Design 初版
