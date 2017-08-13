/* eslint-disable max-len */
/* eslint-disable flowtype/require-parameter-type */

import React from 'react';
import { ResizableBox } from 'react-resizable';
import Scalable from '../src';

import '../node_modules/react-resizable/css/styles.css';

class Sample extends React.Component {
  constructor(props) {
    super();

    this.state = {
      width : props.width || 200,
      height: props.height || 200
    };
  }

  onResize = (event, { size }) => {
    this.setState({
      width : size.width,
      height: size.height
    });
    window.dispatchEvent(new Event('resize'));
  }

  render() {
    const {
      align,
      minScale,
      maxScale,
      verticalAlign,
      containerHeight
    } = this.props;

    const {
      width,
      height
    } = this.state;

    return (
      <Scalable
        align={align}
        minScale={minScale}
        maxScale={maxScale}
        verticalAlign={verticalAlign}
        containerHeight={containerHeight}
        style={{
          border: '1px solid blue',
          height,
          width
        }}
      >
        <div
          style={{
            width     : 800,
            height    : 480,
            fontSize  : 40,
            background: '#f5f5f5'
          }}
        >
          <h3>People 🤓</h3>
          <p>😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕</p>
        </div>
        <ResizableBox
          width={width}
          height={height}
          onResize={this.onResize}
        />
      </Scalable>
    );
  }
}

export default Sample;
