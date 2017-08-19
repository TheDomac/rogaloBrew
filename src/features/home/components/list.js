import React, { Component } from 'react';
import ImageBlock from "features/common/components/imageBlock";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router";

class List extends Component {
  constructor() {
    super();

    this.renderPhotoBlock = this.renderPhotoBlock.bind(this);
  }

  renderPhotoBlock(photoBlock) {
    return (
      <ImageBlock
        photoBlock={photoBlock}
        key={photoBlock.id}
        openModal={this.openModal}
      />
    );
  }

  render() {
    return (      
      <div>
        <div className="container">
          <div className="row aboutText">
            <div className="col-xs-12">
              <p>
                {this.props.message}
                {this.props.showMore ?
                  <Link to={this.props.showMore} className="showMore">
                    <FormattedMessage id="show_more" />
                  </Link>
                  : null
                }
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.props.sources.map(this.renderPhotoBlock)}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
