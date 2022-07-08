export default function Paginator({paginateInfo}) {

    //Agarro la pagina actual y la ultima
    const currentPage = paginateInfo.currentPage
    const lastPage = paginateInfo.lastPage
    //Defino cuantas paginas quiero a los costados de la pagina actual en el iterador tipo con 5 sería:
    //(2, 3, 4, 5, 6) 7 (8, 9, 10, 11, 12) >>
    //Deberia ser un número mayor, está puesto en 4 para mostrar como funciona.
    const pagesOnSides = 4 

    const pageNumbers = []

    //Itero desde el número de la pag actual - las pags "adyacentes" y las meto a un array. 
    //Si esta cuenta me da menor que 0 arranco desde 1.
    //Si es mayor al número de páginas a los costados me detengo.
    for(let i = currentPage - pagesOnSides; i <= currentPage + pagesOnSides; i++){
        if(i <= 0) i = 1
        else if(i > lastPage) break
        pageNumbers.push(i)
    }

    console.log(pageNumbers)

    return (
        <div>
            
            {//Si no puedo ver la pag 1 en el iterador, creo un atajo
                currentPage > pagesOnSides+1 && <a href='/page/1'>{'<<'}</a>
            }

            {
                pageNumbers.map(n => {
                    if(n !== currentPage)
                    return(
                        <div className="pageButtonContainer"><a href={`/page/${n}`}>{n}</a></div>
                    )
                    else{
                        return(
                            <div className="pageButtonOffContainer"><span>{n}</span></div>
                        )
                    }
                })
            }

            {//Si no puedo ver la ultima pag en el iterador, creo un atajo.
                currentPage < lastPage-pagesOnSides && <a href={'/page/' + lastPage}>{'>>'}</a>
            }

        </div>
    );
  }