import crown from 'assets/img/crown.png'
import StarWin from 'components/MovieStars/StarWin';
import noWay from '../../assets/img/noWayHome.jpg'

import './styles.css';
export default function WinCard(){
    return(
        <div className='cardwinCrown'>
            <div className='Crown'>
                <img src={noWay} alt="no away" className='principalImage'/>
                <img src={crown} alt="crown" />
                <StarWin/>
            </div>
        </div>
    );
}