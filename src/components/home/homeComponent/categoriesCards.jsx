import React from 'react';
import PropTypes from 'prop-types';

class CategoriesCards extends React.Component {
    render () {
        return (
            <div className='CardsCategorise'>
                <div className='ImgCategories'><img src={this.props.img}/></div>
                <p>{this.props.name}</p>
            </div>
        )
    }
    
}
CategoriesCards.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string
  };
export default CategoriesCards