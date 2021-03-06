import React from 'react';
import CardMusica from '../components/CardMusica';
import NavBar from '../components/NavBar';

function MinhasMusicas() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="filter">
                    <button className="btn-green right">Adicionar</button>
                </div>
            </div>
            <div className="container">
                <div className="music-boxes">

                    <CardMusica
                        nome="Assalto ao Trap"
                        genero="Trap"
                        ano="2020"
                    />

                    <CardMusica
                        nome="Hatsune Miku"
                        genero="J-pop"
                        ano="2010"
                    />

                    <CardMusica
                        nome="Na sua estante"
                        genero="Rock"
                        ano="2000"
                    />

                    <CardMusica
                        nome="Melhor eu ir"
                        genero="Pagode"
                        ano="2015"
                    />


                </div>

            </div>

        </>
    )
}

export default MinhasMusicas;