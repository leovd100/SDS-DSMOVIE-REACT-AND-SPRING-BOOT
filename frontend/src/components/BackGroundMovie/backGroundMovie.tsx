import axios from "axios";
import WinCard from "components/WinCard/winCard";
import { useEffect, useState } from "react";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/requests";
import "./styles.css"

type Props = {
    movieId: string;
}

export default function BackGroundMovie({ movieId }: Props) {


    const [movie, setMovie] = useState<Movie>();
    
    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(resp => {
            setMovie(resp.data)
        })
    }, [movieId])
    


    return (
        <>
            <div className='backGround-wrap'>
                <img src={movie?.image} alt={movie?.title} className='backGround' />
            </div>
            <div className='win'>
                <WinCard score={Number(movie?.score)}/>
            </div>
        </>
    );
}