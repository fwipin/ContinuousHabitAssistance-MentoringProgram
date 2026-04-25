# CHAMP — Teaser Site

開発中アプリ **CHAMP (Continuous Habit Assistance & Mentoring Program)** のリリース前ティザーサイト。
HTML / CSS / Vanilla JS のみで構成された静的サイトを GitHub Pages で公開する。

- **公開URL**: https://fwipin.github.io/ContinuousHabitAssistance-MentoringProgram/
- **EN版**: https://fwipin.github.io/ContinuousHabitAssistance-MentoringProgram/en/

---

## ディレクトリ構成

```
.
├── index.html              # 日本語版 LP
├── en/
│   └── index.html          # 英語版 LP
├── assets/
│   ├── css/styles.css      # 共通スタイル(JA / EN 共有)
│   ├── js/main.js          # IntersectionObserver + パララックス + ランダム微変化
│   └── images/             # (現状ファイルなし)
├── design-handoff/
│   └── CHAMP_LP.html       # Claude Design 生成版モックアップ(参照用)
├── docs/
│   ├── 01_requirements.md  # 要件定義書
│   ├── 02_content.md       # 公開情報の整理(コピー一覧)
│   ├── 05_implementation.md # 実装ノート
│   └── 06_adjustments.md   # ローカル確認チェックリスト
├── .nojekyll               # GitHub Pages の Jekyll を無効化
└── README.md
```

---

## 開発手順

ビルド不要。VSCode + Live Server で完結する。

1. このリポジトリを clone
2. VSCode で開き、拡張機能 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) をインストール
3. `index.html` を右クリック → **Open with Live Server**
4. 保存ごとに自動リロードされる

英語版を確認する場合は `en/index.html` を Live Server で開く、または起動後にナビゲーションヘッダーの `EN` トグルから遷移。

---

## 公開フロー

`main` ブランチへの push が GitHub Pages に反映される（Pages 設定: Source = `main` / `/` (root)）。

```bash
git push origin main
```

---

## 技術仕様

| 項目 | 内容 |
|---|---|
| サイト種別 | 静的サイト(SPA 不要) |
| 構成技術 | HTML5 / CSS3 / Vanilla JavaScript |
| ホスティング | GitHub Pages(プロジェクトページ) |
| フォント | Google Fonts(Inter / Noto Sans JP / JetBrains Mono) |
| ブラウザ対応 | 最新版 Chrome / Safari / Edge / Firefox |

---

## 既知の制約

- Waitlist CTA は `href="#waitlist-todo"` のプレースホルダ。Google フォーム作成後に差し替える。
- favicon / OGP 画像は未作成（`docs/02_content.md` § 11 参照）。

詳細は [docs/05_implementation.md](docs/05_implementation.md) を参照。
