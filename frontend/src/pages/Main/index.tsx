
import ha from 'assets/img/spidermhandsinhand.png'
import bg from '../../assets/img/backgroundTst.jpg'
import dr from 'assets/img/drOctopus.png'
import doende from 'assets/img/doende.png'


import './styles.css'
import WinCard from 'components/WinCard/winCard'
import MovieCard from 'components/MovieCard'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { MoviePage } from 'types/movie'
export default function Main() {

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





    return (
        <>
            <main>
                <section className='contentMovie'>
                    <div className='containerMovie'>
                        <img src={bg} alt="" className='backGround' />
                        <div className='blackBg'>
                            <WinCard />
                        </div>
                        <div className='containerImagens'>
                            <div className='containerImagemHeroi'>
                                <img src={ha} alt="Logo" className='homemAranha' />
                                <img src={dr} alt="dr" className='drOctopus' />
                                <img src={doende} alt="doende" className='doende' />
                            </div>
                        </div>

                    </div>
                </section>
                <section className='contectMoviesVote'>
                    <h2>Vote no seu filme favorito</h2>
                    <div className="container">
                        <div className="row">
                            {page.content.map(movie => 
                            (
                                <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                    
                                    <MovieCard movie={movie} />
                                </div>)
                                
                            )}
                        </div>
                        <div className='fullList'>
                            <Link to={`/Listing`}>
                                <div className="btn btn-primary dsmovie-btn">Lista completa</div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}