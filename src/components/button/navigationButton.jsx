import React,  { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import NavigationData from '../data/navigationData';

const ButtonStyleActive = "solid 5px blueviolet";
const StyleForBtn =  { borderBottom : ButtonStyleActive }

function NavigaionButton(props) {
        let host = window.location.pathname;
        host = host.split("/")[1]

        let [linkClassName, setTopPosition] = useState('-200px')
        return (
            <div>
                <Link to={props.data.href}>
                    <button onMouseLeave={() => setTopPosition(linkClassName = '-200px')} 
                        onMouseEnter={() => setTopPosition(linkClassName = '70px')} 
                        style={host === props.data.title ? StyleForBtn : null}
                        className="link-btn">
                        <p>{props.data.title}</p>
                    </button>
                    <div onMouseLeave={() => setTopPosition(linkClassName = '-200px')} 
                        onMouseEnter={() => setTopPosition(linkClassName = '70px')}
                        style={{
                        backgroundColor : props.data.link && "rgb(34, 34, 34)", 
                        top : linkClassName,
                        }} 
                        className='link'>
                        <Link to='PC'><p style={{ color : host === props.data.link ? 'blueviolet' : null}}>{props.data.link}</p></Link>
                        <Link to='Playstation5'><p style={{ color : host === props.data.link2 ? 'blueviolet' : null}}>{props.data.link2}</p></Link>
                        <Link to='XboxOne'><p style={{ color : host === props.data.link3 ? 'blueviolet' : null}}>{props.data.link3}</p></Link>
                    </div>
                </Link>
                
            </div>
        )
}
NavigaionButton.propTypes = {
    data : PropTypes.any,
    title : PropTypes.any,
    href : PropTypes.any,
    categories : PropTypes.any,
    link : PropTypes.any,
    name : PropTypes.any,
    link2 : PropTypes.any,
    link3 : PropTypes.any,
  };
export default NavigaionButton