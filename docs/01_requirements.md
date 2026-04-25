# 01. 要件定義書

**プロジェクト名**: CHAMP ティザーサイト
**リポジトリ**: https://github.com/fwipin/ContinuousHabitAssistance-MentoringProgram
**作成日**: 2026-04-25
**バージョン**: 1.0

---

## 1. サイトの目的

開発中アプリ **CHAMP (Continuous Habit Assistance & Mentoring Program)** のリリース前ティザーサイトとして、以下を達成する。

1. アプリの存在認知を獲得する
2. アプリの価値・設計思想を端的に伝える
3. 興味を持った訪問者をウェイティングリスト(メールアドレス登録)に誘導する

---

## 2. ターゲットユーザー

### プライマリ
- 何らかの習慣化に挫折経験がある人
- 「意思の力で頑張る」アプローチしか知らず、繰り返し失敗している人
- 当初のテーマは**ダイエット**(運動・食習慣の改善)に焦点

### セカンダリ
- 自己改善・行動変容に関心がある人
- 既存の習慣化アプリでは続かなかった人

### ユーザーの心理状態(想定)
- 「自分は意思が弱い」と自己評価している
- 既存の方法(根性論)に疲弊している
- 「今度こそ続けたい」という諦めきれない期待がある

---

## 3. 達成指標(KPI)

| 指標 | 内容 |
|---|---|
| 主要指標 | ウェイティングリスト登録数(メールアドレス取得数) |
| 補助指標 | 滞在時間、スクロール到達率、Googleフォーム遷移率 |

※計測手段は本サイトの範囲外(GA等は後日検討)

---

## 4. サイト構成

### ページ構成
シングルページLP構成。スクロールで以下8セクションを展開。

```
/ (index.html / JA)
/en/ (index.html / EN)
  ├─ Header(ロゴ + ナビ + 言語切替)
  ├─ § 001 Hero
  ├─ § 002 Problem
  ├─ § 003 Solution
  ├─ § 004 Principles(設計思想)
  ├─ § 005 Theory(背景理論)
  ├─ § 006 How It Works(使い方)
  ├─ § 007 First Theme: Diet
  ├─ § 008 Waitlist CTA
  └─ Footer
```

### 言語切替
- ヘッダー右の `JA / EN` トグル
- `/` → 日本語、`/en/` → 英語
- 切替時は同一セクションのアンカーへ遷移(理想)

---

## 5. デザイン方針

### コンセプト
- **海外スタイリッシュ系**(編集デザイン誌的なトーン)
- 「使っている自分がかっこいい」と感じられる洗練されたビジュアル
- スタイル融合: **Typography Design × Minimalism × Swiss Style × Neo-Brutalism**

### キービジュアル要素
- 巨大な見出しタイポグラフィ(Helvetica Neue極太)
- 厳密な12カラムグリッドレイアウト
- 太い黒の罫線・ボーダー(2px solid)
- 余白を大胆に活かす
- 影なし、グラデーションなし(ブルータリズム的)

### カラーパレット(Claude Design生成版で確定)

| 役割 | 値 | 用途 |
|---|---|---|
| Background | `#FAFAF7` | ベース背景(オフホワイト) |
| Ink | `#0A0A0A` | テキスト・罫線(黒) |
| Muted | `#6B6B66` | 補助テキスト |
| Accent | `#C7F94E` | 蛍光グリーン(強調・CTA) |

ダークセクション(Solution / Diet / Footer)では Ink を背景、Background をテキスト色として反転利用。

### タイポグラフィ
| 用途 | フォント |
|---|---|
| 英文ディスプレイ | Helvetica Neue / Inter (weight: 900) |
| 和文ディスプレイ | Noto Sans JP (weight: 900) |
| 等幅(メタ情報) | JetBrains Mono |
| 本文 | Helvetica Neue / Noto Sans JP (weight: 400-500) |

### 動的要素
- IntersectionObserverによるスクロール連動フェードイン
- パララックス(円・四角・ディスクが速度差で移動)
- アクセス毎に微変化する仕掛け(How Itのアクセント色当たるステップ、Theoryのアクセント/反転カード位置、ティッカー速度)

---

## 6. 技術仕様

| 項目 | 内容 |
|---|---|
| サイト種別 | 静的サイト(SPA不要) |
| 構成技術 | HTML / CSS / JavaScript (Vanilla) |
| ホスティング | GitHub Pages |
| 公開URL | https://fwipin.github.io/ContinuousHabitAssistance-MentoringProgram/ |
| ドメイン | github.io 提供のサブドメインで運用(独自ドメインなし) |
| レスポンシブ | 必須(スマホ・タブレット・PC) |
| ブラウザ対応 | 最新版の Chrome / Safari / Edge / Firefox |
| メールアドレス収集 | Googleフォーム埋め込み or 遷移リンク |
| アクセシビリティ | 基本的な配慮(alt属性、コントラスト比、キーボード操作) |
| パフォーマンス | 初回表示3秒以内を目標、画像は最適化 |
| フォント配信 | Google Fonts(Inter / Noto Sans JP / JetBrains Mono) |

### 採用しないもの
- バックエンドサーバー、データベース
- ユーザー認証
- 決済機能
- 利用規約・プライバシーポリシー(掲載なし)
- SNSリンク(掲載なし)

---

## 7. リポジトリ構成(予定)

```
ContinuousHabitAssistance-MentoringProgram/
├── index.html              # 日本語版
├── en/
│   └── index.html          # 英語版
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── design-handoff/         # Claude Designからの引き継ぎ素材(参照用)
│   └── CHAMP_LP.html       # 初版モックアップ
├── docs/
│   ├── 01_requirements.md  # 本ドキュメント
│   ├── 02_content.md       # 公開情報の整理
│   ├── 03_design.md        # デザイン詳細
│   ├── 04_prototype.md     # プロトタイプ確認記録
│   ├── 05_implementation.md
│   ├── 06_adjustments.md
│   └── 07_deployment.md
└── README.md
```

---

## 8. 制約・前提

- 公開リポジトリのため、機密情報・未公開のシステム詳細はサイト上に記載しない
- 商標・著作権配慮(理論引用元への明示的リンク)
- アプリ自体は開発中のため、UIスクリーンショットは使用せず抽象的なビジュアルで表現
- メール収集は Googleフォーム経由で個人情報取り扱いを最小化

---

## 9. 完了条件(Definition of Done)

1. GitHub Pages で公開URLが有効になっていること
2. PC・スマホで主要セクションが正しく表示されること
3. Googleフォームへの導線が機能していること
4. JA/EN 両方のページが表示できること
5. スクロールアニメーション・パララックスが動作すること
6. `docs/01_requirements.md` 〜 `docs/07_deployment.md` が揃っていること

---

## 10. スケジュール(2時間スプリント)

| 時刻目安 | 工程 | ステータス |
|---|---|---|
| 0:00-0:20 | 要件定義・コンテンツ整理 | ✅ 完了 |
| 0:20-0:50 | Claude Designでデザイン生成 | ✅ 完了 |
| 0:50-1:30 | Claude CodeでJA/EN実装 | 進行中 |
| 1:30-1:50 | Live Serverで微修正 | 未着手 |
| 1:50-2:00 | GitHub Pagesデプロイ | 未着手 |

---

## 11. 確定事項(意思決定ログ)

| # | 項目 | 決定内容 |
|---|---|---|
| 1 | 公開URL | GitHub Pages標準URL(独自ドメインなし) |
| 2 | サイト言語 | EN/JA 2言語(ヘッダーで切替、ページ分割方式) |
| 3 | 利用規約・プライバシーポリシー | 掲載なし |
| 4 | SNSリンク | 掲載なし |
| 5 | デザイン基調 | ライト |
| 6 | デザインスタイル | Typography Design / Minimalism / Swiss Style / Neo-Brutalism |
| 7 | アクセントカラー | 蛍光グリーン `#C7F94E`(Claude Design提案を採用) |
| 8 | 公開時期 | 本日中(2時間スプリント) |

---

## 12. 関連ドキュメント

- `docs/02_content.md`(公開情報の整理)
- `design-handoff/CHAMP_LP.html`(Claude Design生成版)
- 添付:`habit_matrix.md`(習慣化理論マトリクス)
