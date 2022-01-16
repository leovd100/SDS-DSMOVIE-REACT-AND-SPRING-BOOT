import crown from 'assets/img/crown.png'
import StarWin from 'components/MovieStars/StarWin';


import './styles.css';


type Props = {
    score: number;
}


export default function WinCard({score} : Props){
    return(
        <div className='cardwinCrown'>
            <div className='Crown'>
                <img src={crown} alt="crown" />
                <StarWin score={score}/>
            </div>
        </div>
    );
}