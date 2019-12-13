<a href="https://gatsby-remark-sticky-table.netlify.com/" target="_blank">
<img src="https://gatsby-remark-sticky-table.netlify.com/images/remark-sticky-table.gif" alt="gatsby-remark-sticky-table gif image" />
</a>

# gatsby-remark-sticky-table

gatsby-remark-sticky-table is a plugin that creates sticky header tables from markdown.

By taking advantage of the remark Abstract Syntax Tree (AST) this plugin grabs all references to the HTML `<th>` element and applies an inline css style to make it `position: sticky`

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
      height: 250,
      backgroundColor: "#ffffff",
    },
  },
]
```

## ✨ Styling

This plugin ships with a minimal update to styles that are applied inline but these are purely to position the `<th>` which creates the sticky header. The more visual styles are up to you.

You might not need many styles but you will no doubt at least need a `height` on `remark-sticky-table` and a `background-color` on `remark-sticky-table-th`

A quick way to achieve this is to use the plugin options but probably a better way will be to add this and other styles using your css method of choice.

For convenience each element has been given a `class` name these are:

| Element | class name                    | description                                            |
| ------- | ----------------------------- | ------------------------------------------------------ |
| div     | `remark-sticky-table`         | The outer div that wraps everything and has a `height` |
| div     | `remark-sticky-table-wrapper` | An inner div with `overflow: auto`                     |
| table   | `remark-sticky-table-table`   | un-styled HTML `<table>`                               |
| thead   | `remark-sticky-table-thead`   | un-styled HTML `<thead>`                               |
| tr      | `remark-sticky-table-tr`      | un-styled HTML `<tr>`                                  |
| th      | `remark-sticky-table-th`      | HTML `<th>` with **`position: sticky` inline style**   |
| tbody   | `remark-sticky-table-tbody`   | un-styled HTML `<tbody>`                               |
| td      | `remark-sticky-table-td`      | un-styled HTML `<td>`                                  |

## 💅 Css

Here's some `css` to get you started

```css
.remark-sticky-table {
  border-radius: 2px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
  height: 350px;
  margin: 48px 0px;
}

.remark-sticky-table-table {
  border-collapse: collapse;
  box-sizing: border-box;
  width: 100%;
}

.remark-sticky-table-th {
  background-color: #f7f7f7;

  font-weight: 600;
  text-align: left;
}

.remark-sticky-table-tbody:nth-child(odd) {
  background-color: #fafafa;
}

.remark-sticky-table-th,
.remark-sticky-table-td {
  padding: 16px;
}
```

## 📝 Markdown

And that's it 💥 Just use markdown as you normally would to create tables and let `gatsby-remark-sticky-table` do the rest.

```
| Head one | Head two | Head three |
| -------- | ---------| ---------- |
| cell one | cell two | cell three |
```
