# WebToC: Display outline of the page

## 概要

WebToCは、ウェブページの見出しタグ（`<h1>`, `<h2>`, `<h3>`など）を抽出し、アウトラインを表示するブラウザ拡張機能です。この拡張機能を使用すると、現在閲覧しているページの構造を簡単に把握できます。

## インストール方法

開発者向けのインストール方法です。

### Chromeでのインストール

1. このリポジトリをクローンまたはダウンロードします。
    ```bash
    git clone https://github.com/yourusername/web-page-outline-extractor.git
    ```
2. Chromeで拡張機能のページ（`chrome://extensions/`）を開きます。
3. 右上の「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、クローンまたはダウンロードしたリポジトリのディレクトリを選択します。

### Firefoxでのインストール

1. このリポジトリをクローンまたはダウンロードします。
    ```bash
    git clone https://github.com/yourusername/web-page-outline-extractor.git
    ```
2. Firefoxで拡張機能のページ（`about:debugging#/runtime/this-firefox`）を開きます。
3. 「一時的なアドオンを読み込む」をクリックし、`manifest.json`ファイルを選択します。

## 使い方
1. インストール後、ブラウザのツールバーに新しいアイコンが追加されます。
2. ウェブページを開いた状態でこのアイコンをクリックすると、ポップアップが表示され、ページのアウトラインが表示されます。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](./LICENSE)ファイルを参照してください。
