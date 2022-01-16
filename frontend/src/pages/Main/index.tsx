
import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from 'utils/requests'
import { Movie, MoviePage } from 'types/movie'
import MainListCards from 'components/MainListCards'
import BackGroundMovie from 'components/BackGroundMovie/backGroundMovie'





export default function Main() {


    


    const radom = (max: number, min:number) => { 
        let valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }

    let indexMovie = radom(0,12);

    

   

    return (
        <>
            <main>
                <section className='contentMovie'>
                    <div className='containerMovie'>
                        <BackGroundMovie movieId={String(indexMovie)} /> 
                        
                    </div>
                </section>

                <section className='contectMoviesVote'>
                    <h2>Vote no seu filme favorito</h2>
                    <MainListCards />
                </section>
            </main>
        </>
    );
}