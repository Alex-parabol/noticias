import React from 'react'

export default function Noticias({noticia}) {
    //extraemos datos
    console.log(noticia)
    const {urlToImage, url, title, description, source } = noticia;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <img src={urlToImage} />
                <div className="card-content">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    )
}
