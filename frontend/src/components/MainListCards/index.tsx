import axios from "axios";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
import './styles.css';
export default function MainListCards(){
    
    const [pageNumber, setPageNumber] = useState(0);

    let valueMovie = 0;

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 4,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(resp => {
                const data = resp.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber])


    
    
    return(
        <div className="container">
        <div className="row">
            {page.content.map(movie => {
                valueMovie += 1;
                if (valueMovie <= 4) {
                    return (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3 cardhover">
                            <MovieCard movie={movie} />
                        </div>
                    )
                }

            })}
        </div>
        
        <div className='fullList'>
            <Link to={`/Listing`}>
                <div className="btn btn-primary dsmovie-btn">Lista completa</div>
            </Link>
        </div>
    </div>
    );

}