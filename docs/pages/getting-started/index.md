---
title: Getting started
description: Getting started with unl-map-js.
contentType: example
language:
  - JavaScript
navOrder: 1
layout: page # use the layout page
prependJs:
  - "import Quickstart from '../../components/quickstart';"
  - "import Example from '../../components/example';"
  - "import SimpleMapHtml from '../example/simple-map.html';"
  - "import Copyable from '../../components/copyable';"
  - "import urls from '../../components/urls';"
hideFeedback: true # hide feedback from page
products:
  - UNL Map JS
---

## Quickstart

{{
    <Example
        frontMatter={{
          title: 'MapLibre GL JS map',
          description: ''
        }}
location={this.props.location}
html={SimpleMapHtml}
displaySnippet={false}
height={300}
hideWarning={true}
/>
}}

{{
<Quickstart />
}}

## Typescript

Typescript definition files are included as part of this package.

<br />
<br />
<br />
