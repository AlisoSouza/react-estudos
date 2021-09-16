import React, {useState} from 'react'
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({title, items}) {
    const [scrollX, setScrollX] = useState(0);
    const handleLeft = () => {
        let xValue = scrollX + Math.round(window.innerWidth/2);
        if(xValue>0){
            xValue = 0
        }
        setScrollX(xValue)
    }
    const handleRight = () => {
        let xValue = scrollX - Math.round(window.innerWidth/2);
        let listWidth = items.results.length * 150;
        if((window.innerWidth - listWidth)> xValue){
            xValue = window.innerWidth - listWidth - 60 //- padding 
        } 
        setScrollX(xValue)
    }
    return (
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeft}>
                <NavigateBeforeIcon style={{fontSize:50}}></NavigateBeforeIcon>
            </div>
            <div className="movieRow--right" onClick={handleRight}>
                <NavigateNextIcon style={{fontSize:50}}></NavigateNextIcon>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow
