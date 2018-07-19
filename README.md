# Gulp Template Lite

## 概要

- Gulpの最低限の機能のみのテンプレートデータ

### 初期実行

```
npm install
```

### ファイル監視の実行 & サーバー起動

```
# ディレクトリを監視(watch)
gulp

ディレクトリ監視に初期実行時はルートのindex.htmlが表示されます
```

### リリースファイル作成

```
gulp dist
```

## ファイル構成

### HTML

assets

```javascript
templates/
  _partiales/... //出力されません
  html/xxx.ejs
```

dist後

```javascript
html/xxx.html
```


### CSS

assets

```javascript
style/
  _partial/... // 出力されません
  common/css/common.styl
  css/xxx.styl
```

dist後

```javascript
common/css/common.css
css/xxx.css
```

### JS

assets

```javascript
js/
  common/js/_common/ // common.jsにコンパイルされます
    xxx1.js
    xxx2.js
  js/xxx.js
```

dist後

```javascript
common/js/common.js
js/xxx.js
```

### その他

assets

```javascript
copy/ // 画像やフォント等、そのまま出力したいものはcopy配下に入れます
  common/images/xxx.png
  images/xxx.png
  data/xxx.json
```

dist後

```javascript
common/images/xxx.png
images/xxx.png
data/xxx.json
```

## Versions

- node 4.5.0
- npm 5.0.4

## 使用ツール

- [Stylus](https://learnboost.github.io/stylus/)
- [EJS](http://www.embeddedjs.com/)