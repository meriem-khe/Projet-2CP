import React from 'react'
import "./Style_sheet.css"
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
const DossierCom = ({ numDoss, done, role }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    var path = "/commande-form/" + numDoss
    if (role == 'modifier'){
        path += 1 
    }
    else{
        path += 0
    }
    const curentdate = new Date().toLocaleDateString();

    function recuper(){
        Axios.post('http://localhost:3006/recup' ,{
            numero: numDoss,
        })
    }
    var date = (new Date().getFullYear()).toString().substring(2,5)
    return (
        <div className="marche-dossier">
            <span className="num-dossier date-dossier">
                <Link to={path} onClick={recuper}>Dossier n°{date+'/'+numDoss} </Link>
            </span>

            <span className="date-dossier">
                <div className="progress">
                    <div className="progress-done " style={style}>
                        {done}%
			    </div>
                </div>
            </span>
            <span className="date-dossier ">
                <a href={path} onClick={recuper}> <FontAwesomeIcon icon={faPen} className="icon" /></a>
            </span>
        </div>
    )
}

export default DossierCom
