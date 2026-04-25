# 06. ローカル確認チェックリスト

**プロジェクト名**: CHAMP ティザーサイト
**作成日**: 2026-04-25
**前提**: VSCode + Live Server で `index.html` を起動した状態

実機・ブラウザで一通り眺めながら、未確認(`[ ]`)→ 確認済み(`[x]`)に書き換えてください。
不具合が見つかったら、本ファイル末尾の「気になった点」に箇条書きで残すと、修正タスクとして拾いやすいです。

---

## 1. 全体共通

### 1-1. ページの存在と切替
- [ ] `/index.html`(JA)が表示できる
- [ ] `/en/index.html`(EN)が表示できる
- [ ] ヘッダー右の `JA / EN` トグルで両ページを行き来できる
- [ ] 現在のページ側のトグルがハイライト(黒背景)されている
- [ ] トップに戻る(ロゴクリック)で `#top` にスクロールする

### 1-2. ヘッダーナビ
- [ ] `Problem` / `Solution` / `How` / `Waitlist` の各リンクで対応セクションへスクロールする
- [ ] ヘッダーが上部に固定表示されている(スクロール時も常に表示)

### 1-3. アニメーション
- [ ] スクロールに合わせて各セクションの要素がフェードイン(reveal)する
- [ ] パララックス図形(円・四角・ディスク)がスクロール速度に追従して動く
- [ ] §001 ヒーロー上部のマーキー(ティッカー)が左方向に流れている
- [ ] リロード時にマーキー速度・Theory カードのアクセント位置・How ステップの蛍光グリーン位置が微変化する

---

## 2. JA 版 (`index.html`)

### 2-1. § 001 Hero
- [ ] 巨大見出し「意思の力に / 頼らない、● / 新しい[習慣化]。」が表示されている
- [ ] `[習慣化]` が蛍光グリーンの帯ハイライト
- [ ] サブテキスト・FIRST THEME / DIET. / Join Waitlist ボタンが整列表示

### 2-2. § 002 Problem
- [ ] 見出し「続かないのは、あなたの意志が弱いからじゃない。」が表示
- [ ] `あなたの` が薄いグレー、`ない` が黒背景+蛍光グリーン
- [ ] 統計カード 3 枚(66日 / 92% / 1/4)が横並び、中央が蛍光グリーン背景
- [ ] REASON 01〜03 が横並びで表示

### 2-3. § 003 Solution(ダーク)
- [ ] 背景が黒、テキストが白
- [ ] 見出し「続けるのは、あなたじゃない。仕組みだ。」の `仕組みだ。` が蛍光グリーン
- [ ] 3 カード(01 / 02 / 03)が横並び、中央(02)が蛍光グリーン背景

### 2-4. § 004 Principles
- [ ] P—01 / P—02 / P—03 の 3 行(個別最適化 / 自動調整 / 摩擦ゼロ記録)が縦に積まれて表示
- [ ] 各行の右端に小さな図形(■ / ○ / 黒四角)

### 2-5. § 005 Theory
- [ ] 5 つの理論カード(Four Tendencies / Fogg Model / COM-B / If-Then Plans / SDT)が表示
- [ ] 04 と 05 が幅広(span 6)、01〜03 は幅狭(span 4)
- [ ] リロードごとにアクセント・ダーク背景の位置が変化する

### 2-6. § 006 How It Works
- [ ] 3 ステップ(計画策定 / 実績記録 / AI 調整)が縦に積まれて表示
- [ ] 1 つのステップが蛍光グリーン背景(リロードごとに変化)
- [ ] STEP 02 のモック内のマイクとウェーブアニメーションが動いている

### 2-7. § 007 Diet(ダーク)
- [ ] 背景が黒、巨大「DIET●」が蛍光グリーンドット付きで表示
- [ ] 右側に COMING SOON ボックス(Sleep Quality / Focus & Deep Work / Reading Habit / Mindfulness)
- [ ] パララックスの大きな丸と四角が背景に動いている

### 2-8. § 008 Waitlist
- [ ] 見出し「先に、変わってみる？」の `変わって` が蛍光グリーン帯
- [ ] CTA ボタン `Join the Waitlist →` が蛍光グリーン背景で表示
- [ ] CTA をクリックすると URL が `#waitlist-todo` に変わる(挙動はそれだけで OK)
- [ ] CTA 下のキャプション(招待制 / NO SPAM)が表示

### 2-9. Footer(ダーク)
- [ ] 巨大ワードマーク `CHAMP●`(蛍光グリーンドット)が表示
- [ ] **2 列構成**: 左側に CHAMP 説明文、右側に PRODUCT(Problem / Solution / How It Works / Diet)
- [ ] COMPANY / LEGAL / FOLLOW の列が**存在しない**ことを確認
- [ ] About / Privacy / Twitter 等のダミーリンクが**ない**ことを確認
- [ ] PRODUCT のリンクをクリックすると対応セクションへスクロール
- [ ] 最下部: `© 2026 CHAMP. ALL RIGHTS RESERVED.`(左)/ `MADE WITH BEHAVIOR SCIENCE / TOKYO`(右)

---

## 3. EN 版 (`en/index.html`)

JA 版と同じ視覚チェックを行ったうえで、英文として違和感がないかを確認。

- [ ] `<html lang="en">` になっている(DevTools / View Source で確認可)
- [ ] Hero 見出し「Habit, / without ● / willpower.」が表示
- [ ] § 002 見出し「You're not weak. The [design] is.」の `design` が黒+蛍光グリーン
- [ ] § 003 見出し「It's not you who keeps going. It's the system.」末尾が蛍光グリーン
- [ ] § 008 見出し「Want to [change] first?」の `change` が蛍光グリーン帯
- [ ] § 008 キャプションが英文(`* Beta is invite-only / Rolling onboarding ・ NO SPAM. UNSUBSCRIBE ANYTIME.`)
- [ ] Footer 説明文が英文(`Continuous Habit Assistance & Mentoring Program. Reinventing habit formation with behavioral science and AI.`)
- [ ] sec-label の補完翻訳が違和感ないか:
  - § 003 `WHAT CHAMP CHANGES`
  - § 004 `THREE PRINCIPLES`
  - § 005 `FIVE PILLARS`
  - § 006 `THREE STEPS`
  - § 007 `STARTING POINT`
  - § 008 `BE THE FIRST`
- [ ] § 004 各 Principle のタイトル(Personalization / Auto-adjustment / Frictionless logging)と本文に違和感がないか
- [ ] § 006 各 Step タイトル(Plan / Log / Adjust)と本文に違和感がないか

---

## 4. レスポンシブ(スマホ実機 or DevTools のレスポンシブモード)

### 4-1. スマホ(幅 ≤ 640px)
- [ ] ヘッダーから `Problem / Solution / How / Waitlist` のリンクが消え、ロゴ + 言語トグルだけ表示
- [ ] 各セクションのコンテンツが 1 列に積まれる
- [ ] CTA ボタンが画面幅いっぱいに広がる
- [ ] Theory カードが 1 列スタック
- [ ] How ステップが 1 列スタック
- [ ] 巨大 `CHAMP●` フッターワードマークがはみ出さない

### 4-2. タブレット(幅 641〜900px)
- [ ] Theory カードが 2 列
- [ ] How ステップが 1 列スタック(数字とテキストとモックが縦並び)
- [ ] ヘッダーナビが詰まりつつも全項目表示

### 4-3. PC(幅 > 900px)
- [ ] デスクトップ表示が 1440px 上限の中央配置
- [ ] 12 カラムグリッドが意図通り

---

## 5. ブラウザ互換

主要ブラウザの最新版で軽く確認する。

- [ ] Chrome
- [ ] Edge
- [ ] Firefox
- [ ] Safari(iOS Safari 含む)

---

## 6. アクセシビリティ(軽め)

- [ ] Tab キーでナビゲーションリンクをフォーカスでき、視覚的に追える
- [ ] CTA ボタンへ Tab → Enter で `#waitlist-todo` へ遷移する
- [ ] スクリーンリーダー想定:`<header>` `<nav>` `<main>` `<section>` `<footer>` がランドマークとして利用可能
- [ ] コントラスト比に違和感なし(蛍光グリーン背景の上の黒文字は意図的に高コントラスト)

---

## 7. 動作チェック(挙動)

- [ ] スクロールが滑らかに動く(60fps を体感ベースで)
- [ ] パララックスでガクつきが発生していない
- [ ] ナビゲーションリンクのアンカー遷移が正しいセクションへジャンプ
- [ ] 言語トグルクリックで該当 URL に遷移する(JA → `index.html`、EN → `en/index.html`)

---

## 8. 気になった点(ユーザーが書き込む欄)

> 確認中に見つけた違和感・修正したい箇所をここに箇条書きで残す。

- (なし)
