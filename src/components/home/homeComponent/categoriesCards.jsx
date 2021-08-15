import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CategoriesCards extends React.Component {
    render () {
        return (
            <Link to={this.props.link}>
                <div className='CardsCategorise'>
                    <div className='ImgCategories'><img src={this.props.img}/></div>
                    <p>{this.props.name}</p>
                </div>
            </Link>
        )
    }
    
}
CategoriesCards.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
  };
export default CategoriesCards