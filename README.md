<div align="center">
  <h1>react-scalable</h1>
</div>

<!-- travis https://travis-ci.org/ -->
<!-- appveyor https://ci.appveyor.com -->
<!-- codecov https://codecov.io/gh -->
<!-- npm version badge: https://badge.fury.io/ -->

Respect [Scalable](https://github.com/ScriptArtist/Scalable).

![](./images/readme.gif)

## Install
```sh
$ npm i --save react-scalable
```

## Usage
```javascript
import React from 'react';
import Scalable from 'react-scalable';

const Component = () => (
  <Scalable>
    <h1>Hello!</h1>
  </Scalable>
);
```

## Props
| Name | Default | Type | Description |
| ------------- | ------------- |
| align | center | center &#124; left &#124; right | An element's horizontal alignment |
| verticalAlign | center | center &#124; top &#124; bottom | An element's vertical alignment  |
|containerHeight|fixed| fixed &#124; auto| whether the element is fitted within content |
|minScale| N/A | number | an element's minimum scale |
|maxScale| N/A | number | an element's maximum scale |

## Development
```sh
$ npm i
$ npm start # start storybook
$ open http://localhost:8080
```
