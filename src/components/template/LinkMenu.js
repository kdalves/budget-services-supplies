import React, { Component } from 'react';
import { Link } from '@material-ui/core';

class LinkMenu extends Component {
  render() {
    const {text, href} = this.props;
    return (
      <div>
          <Link class="link-menu" href={href}>{text}</Link>
      </div>
    );
  }
}

export default LinkMenu;
