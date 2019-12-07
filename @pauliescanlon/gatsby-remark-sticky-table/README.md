# gatsby-remark-sticky-table

...is a plugin that creates sticky header tables from markdown.

By taking advantage of the remark Abstract Syntax Tree (AST) this plugin grabs all references to the HTML `<table>` element and replaces it with a set of HTML `<div>` elements to provide more css control for better mobile first experiences.

**Motivation**
Tables are tricky, they don't really work on mobile devices and more often than not they don't look great. This plugin aims to replace the default `<table>` and its accompanying HTML elements with a set of HTML `<div>` elements that can be more easily controlled using modern day css techniques.

## 👁️ Preview

- [Live Demo](https://gatsby-remark-sticky-table.netlify.com/)

## 🚀 Getting started

### Install

```
npm install @pauliescanlon/gatsby-remark-sticky-table
```

### Setup

Add `gatsby-transformer-remark` to your `gatsby-config.js` then add `@pauliescanlon/gatsby-remark-sticky-table` as a plugin of that 😅

```js
module.exports = {
  ...
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`@pauliescanlon/gatsby-remark-sticky-table`],
      },
    },
  ],
}
```

### Options

| Option          | Type   | Reqiured | Default | Description                                   |
| --------------- | ------ | -------- | ------- | --------------------------------------------- |
| height          | number | no       | 250     | height of containing div                      |
| backgroundColor | string | no       | null    | background color of remark-sticky-table-thead |

```js
...
plugins: [
  {
    resolve: `@pauliescanlon/gatsby-remark-sticky-table`,
    options: {
      height: 200,
      backgroundColor: "#ffffff",
    },
  },
]
```

## ✨ Styling

This plugin ships with a minimal set of styles that are applied inline but these are purely to position the divs and create the sticky header. The more visual styles are up to you.

You might not need many styles but you will no doubt at least need a `background-color` on `remark-sticky-table-thead` as without this you won't really get the full effect of a sticky table header.

A quick way to achive this is to use the `backgroundColor` option but probably a better way will be to add this and other styles using your css method of choice.

For convenience each element has been given a `class` name these are:

| Element | class name                    | description                                          |
| ------- | ----------------------------- | ---------------------------------------------------- |
| div     | `remark-sticky-table`         | The outer div that wraps everything and has a height |
| div     | `remark-sticky-table-wrapper` | An inner div with `overflow: auto`                   |
| div     | `remark-sticky-table-table`   | A div that replaces `<table>`                        |
| div     | `remark-sticky-table-tr`      | A div that replaces `<tr>`                           |
| div     | `remark-sticky-table-thead`   | A div that repalces `<thead>`                        |
| div     | `remark-sticky-table-tbody`   | A div that replaces `<tbody>`                        |

## 💅 Css

Here's some `css` to get you started

```css
.remark-sticky-table {
  border: 1px solid #dedede;
}

.remark-sticky-table-tr:nth-child(odd) {
  background-color: #f3f3f3;
}

.remark-sticky-table-thead:not(:last-child),
.remark-sticky-table-tbody:not(:last-child) {
  border-right: 1px solid #dedede;
}

.remark-sticky-table-thead {
  border-bottom: 1px solid #dedede;
  background-color: #ffffff;
}

.remark-sticky-table-thead,
.remark-sticky-table-tbody {
  padding: 8px 16px;
}
```

## 📝 Markdown

And that's it 💥 Just use markdown as you normally would to create tables and let `gatsby-remark-sticky-table` do the rest.

```
| Head one | Head two | Head three |
| -------- | ---------| ---------- |
| cell one | cell two | cell three |
```
