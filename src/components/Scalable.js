// @flow

/* eslint-disable no-unused-vars */

import React from 'react';

type Props = {
  align: 'left' | 'center' | 'right';
  verticalAlign: 'top' | 'center' | 'bottom';
  containerHeight: 'fixed' | 'auto';
  minScale: number;
  maxScale: number;
  style?: Object;
  children?: React.Element<*>;
};

type DefaultProps = {
  align: 'center';
  verticalAlign: 'center';
  containerHeight: 'fixed';
};

const id = 'react-scalable-main';

const defaultStyle = {
  container: {
    position: 'relative'
  },
  main: {
    position : 'absolute',
    transform: ''
  }
};

class Scalable extends React.Component<DefaultProps, Props, void> {
  main: HTMLElement | null;
  container: HTMLElement;

  update = () => {
    if (this.main === null) return;

    const style = this.main.style;

    const {
      align,
      minScale,
      maxScale,
      verticalAlign,
      containerHeight
    } = this.props;

    style.position = defaultStyle.main.position;
    style.transform = defaultStyle.main.transform;

    switch (align) {
      case 'left':
        style.left = '0';
        break;
      case 'right':
        style.right = '0';
        break;
      case 'center':
      default:
        style.left = '50%';
        style.transform += 'translateX(-50%) ';
        break;
    }

    switch (verticalAlign) {
      case 'top':
        style.top = '0';
        break;
      case 'bottom':
        style.bottom = '0';
        break;
      case 'center':
      default:
        style.top = '50%';
        style.transform += 'translateY(-50%) ';
        break;
    }

    this.main.style.transformOrigin = `${align} ${verticalAlign}`;

    const clientWidth  = this.container.clientWidth;
    const clientHeight = this.container.clientHeight;
    const scrollWidth  = this.main.clientWidth;
    const scrollHeight = this.main.clientHeight;

    let scale = clientWidth / scrollWidth;

    if (containerHeight === 'fixed' && clientHeight < scrollHeight * scale)
      scale = clientHeight / scrollHeight;

    if (minScale) scale = Math.max(scale, minScale);
    if (maxScale) scale = Math.min(scale, maxScale);

    this.main.style.transform += `scale(${scale}, ${scale})`;
  }

  static defaultProps = {
    align          : 'center',
    verticalAlign  : 'center',
    containerHeight: 'fixed'
  };

  componentDidMount() {
    this.main = document.querySelector(`#${id}`);

    window.addEventListener('resize', this.update, false);

    this.update();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update);
  }

  render() {
    const {
      align,
      style,
      maxScale,
      minScale,
      children,
      verticalAlign,
      containerHeight,
      ...rest
    } = this.props;

    return (
      <div
        ref={(container) => this.container = container}
        style={{ ...defaultStyle.container, ...style }}
        {...rest}
      >
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              id // fix
            });
          })
        }
      </div>
    );
  }
}

export default Scalable;
