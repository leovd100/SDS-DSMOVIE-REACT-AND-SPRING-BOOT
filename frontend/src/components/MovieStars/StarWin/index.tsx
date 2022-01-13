import {ReactComponent as StarFull} from 'assets/img/start-full.svg';
import {ReactComponent as StarHalf} from 'assets/img/start-half.svg';
import {ReactComponent as StarEmpty} from 'assets/img/start-empty.svg';
import './styles.css'


export default function StarWin(){
    return (
        <div className="star-wins-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}