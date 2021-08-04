import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const ButtonStyleActive = "solid 5px blueviolet"
const StyleForBtn =  { borderBottom : ButtonStyleActive } 


// TODO: link categories
class NavigaionButton extends React.Component {
    render() {
        let host = window.location.pathname;
        host = host.split("/")[1]
        return (
            <div>
                <Link to={this.props.href}>
                    <button style={ host === this.props.title ? StyleForBtn : null } className="link-btn">
                        <p>{this.props.title}</p>
                    </button>
                </Link>
                <div className='categories-link'> 
                    <p>{this.props.link}</p>
                </div>
            </div>
        )
    }
}
NavigaionButton.propTypes = {
    title: PropTypes.any,
    href: PropTypes.any,
    link: PropTypes.any,
  };
export default NavigaionButton