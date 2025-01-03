# 類似画像検索システム

## ローカル開発環境セットアップ手順（Dockerを使用しない場合）

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
    node -v

### 2. プロジェクトのクローン

    git clone https://github.com/nokoxxx1212/react-image-search-examples
    cd react-image-search-examples

### 3. 依存パッケージのインストール

    npm install

### 4. 開発サーバーの起動

    npm start

### 5. ブラウザでアクセス

ブラウザが自動的に開かない場合は、以下のURLにアクセス:

    http://localhost:3000

## トラブルシューティング

### よくあるエラーと解決方法

* TypeScriptの型定義エラーが発生する場合:

    npm install --save-dev @types/react @types/react-dom

* モジュールが見つからないエラーが発生する場合:

    rm -rf node_modules
    npm install

* Tailwind CSSのスタイルが適用されない場合:

    npm run build:css

## 注意事項
- このアプリケーションは開発環境用の実装です
- バックエンドAPIは実装されていないため、すべての機能はモックデータを使用しています
- 実際の類似画像検索機能は実装されていません