# React の初期設定用リポジトリ

## 説明

構成は現状最適と思われるファイル構造・設定で作成。<br>
基本的にはこのリポジトリを用いて React の開発を行う。<br>
popularがatmic design仕様、appが初期状態。popularを使う場合、適宜書き換える。<br>
パッケージは popular/Makefile に追記してインストールを行う。

なお、抜けや追加があればこのリポジトリの修正を行う。

## 初期設定

## 開発環境
docker version 20.10.6が必要。なければ下記URLからダウンロード。<br />
https://hub.docker.com/

localhostで起動・dockerコンテナ内確認
1. gitリポジトリをクローンする
```
git clone https://github.com/keigooba/popular_SPA.git
```
2. dockerをビルド
```
docker-compose build
```
3. なぜかreact-scriptsが動かないので、コンテナを起動してインストール
```
docker-compose run --rm node sh -c "cd app(popular) && npm i react-scripts"
```
新規作成の場合は下記で作成
```
docker-compose run --rm node sh -c 'npx create-react-app app --template typescript'
```
新規作成でなぜかtypescriptが動かないので、commandのコメントアウト後、4.5にて下記実行後、再起動
```
cd app && yarn add typescript && npm i react-scripts
// web-vitalsも入れろと怒られるので、web-vitalsの記述は削除する。tsconfigはpopularのをコピー&ペースト。
```

4. docker起動(port:3000が必要)
```
docker-compose up -d
```
5. dockerコンテナに入る
```
docker-compose exec node sh
```

## 機能

## 技術
