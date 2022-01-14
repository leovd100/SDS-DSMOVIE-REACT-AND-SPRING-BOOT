
import ha from 'assets/img/spidermhandsinhand.png'
import bg from '../../assets/img/backgroundTst.jpg'
import dr from 'assets/img/drOctopus.png'
import doende from 'assets/img/doende.png'


import './styles.css'
import WinCard from 'components/WinCard/winCard'
import MovieCard from 'components/MovieCard'
import { Link } from 'react-router-dom'
export default function Main() {
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
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard />
                            </div>
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