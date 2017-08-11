import React, { Component } from 'react';

import "../styles/imageBlock.scss";


class ImageBlock extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.renderSubtext = this.renderSubtext.bind(this);
  }

  renderSubtext(text, i) {
    let value;

    const boldCondition1 = this.props.photoBlock.boldedFirst && (i%2 === 0);
    const boldCondition2 = !this.props.photoBlock.boldedFirst && (i%2 === 1);

    if (boldCondition1 || boldCondition2) {
      value = <b key={i}>{text}</b>
    } else {
      value = <span key={i}>{text}</span>;
    }
    return  value;
  }

  openModal(id) {
    this.props.openModal(this.props.photoBlock);
  }

  render() {
    const { photoBlock } = this.props;
    var image = require(`images/${photoBlock.backgroundImage}`);
    // const aaa = require(photoBlock.backgroundImage);
  	const style = {
  		backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) ), url('${image}')`
  	}
    return (
      <a onClick={this.openModal}>
        <div
        className={`imageBlock ${photoBlock.className} ${photoBlock.exceptionClassName}`}
        style={style}>
        	<div className="border">
        		<h3>
          		{this.props.photoBlock.heading.map(this.renderSubtext.bind(this))}
          	</h3>
          	<p>
          		{photoBlock.subtext}
          	</p>
          </div>
        </div>
      </a>
    );
  }
}

export default ImageBlock;
