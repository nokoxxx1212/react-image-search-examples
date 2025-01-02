# 類似画像検索システム

## 開発環境のセットアップ手順

### 1. 必要なツールのインストール

Node.jsのインストール（Macの場合）:

    brew install node

nvmのインストール（Node.jsのバージョン管理用）:

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

シェルの再起動:

    source ~/.zshrc  # または source ~/.bash_profile

Node.js LTS版のインストールと使用:

    nvm install --lts
    nvm use --lts

### 2. プロジェクトのセットアップ

Create React Appでプロジェクト作成:

    # プロジェクトの作成（カレントディレクトリに作成される）
    npx create-react-app . --template typescript
    # または新しいディレクトリに作成する場合
    # npx create-react-app image-search-app --template typescript
    # cd image-search-app

必要なパッケージのインストール:

    npm install react-router-dom @types/react-router-dom tailwindcss postcss autoprefixer
    npm install --save-dev @types/react @types/react-dom typescript

### 3. プロジェクトの構造作成

以下のディレクトリ構造を作成します：

    mkdir -p src/components/upload
    mkdir -p src/pages
    mkdir -p src/hooks
    mkdir -p src/types

### 4. Tailwind CSSの設定

Tailwind CSSの初期化:

    npx tailwindcss init -p

tailwind.config.jsの内容を以下のように更新:

    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }

src/index.cssの内容を以下のように更新:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### 5. TypeScript設定の確認

Create React Appがプロジェクトのルートディレクトリにtsconfig.jsonを自動生成します。

以下のコマンドで確認できます：

    cat tsconfig.json

もし存在しない場合は、以下のコマンドで再生成できます：

    npm run eject
    # または
    npx tsc --init

## アプリケーションの起動

1. 開発サーバーの起動:

    npm start

2. ブラウザでアクセス:

ブラウザが自動的に開かない場合は、以下のURLにアクセス:

    http://localhost:3000

## 機能確認

現在実装されている機能:

- 画像アップロード（最大5ファイル、JPEG/PNG形式、各10MB以下）
- アップロードした画像のプレビュー表示
- アップロード進捗状況の表示
- 検索結果の表示（モックデータ）
- 履歴一覧と詳細表示（モックデータ）

## トラブルシューティング

### よくあるエラーと解決方法

1. TypeScriptの型定義エラーが発生する場合:

    npm install --save-dev @types/react @types/react-dom

2. モジュールが見つからないエラーが発生する場合:

    rm -rf node_modules
    npm install

3. Tailwind CSSのスタイルが適用されない場合:

    npm run build:css

## 注意事項

- このアプリケーションは開発環境用の実装です
- バックエンドAPIは実装されていないため、すべての機能はモックデータを使用しています
- 実際の類似画像検索機能は実装されていません
