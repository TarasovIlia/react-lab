import React from 'react';
import '../style/footerStyle.css';
function Footer () {
    return (
        <footer className="footerWrapper">
            <ui>
                <li><a href="https://www.ea.com/"><img className='GameIcon' src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Electronic-Arts-Logo.svg" alt="ElecrtonicArts"/></a></li>
                <li><a href="https://www.ubisoft.com/ru-ru/"><img className='GameIcon' src="https://upload.wikimedia.org/wikipedia/commons/7/78/Ubisoft_logo.svg" alt="Ubisoft" /></a></li>
                <li><a href="https://www.rockstargames.com/"><img className='GameIcon' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Rockstar_Games_Logo.svg" alt="RockStar" /></a></li>
                <li><a href="https://www.valvesoftware.com/en/"><img className='GameIcon' src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Valve_logo.svg" alt="Valve" /></a></li>
                <li><a href="https://www.blizzard.com/en-us/"><img className='GameIcon' src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Blizzard_Entertainment_Logo.svg" alt="Blizzard" /></a></li>
                <li><a href="https://www.nintendo.ru/"><img className='GameIcon' src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg" alt="Nintendo" /></a></li>
            </ui>
        </footer>
    )
}
export default Footer