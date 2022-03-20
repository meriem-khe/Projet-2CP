import Axios from 'axios'

import React from 'react'
import "../services/commun/Style_sheet.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen} from '@fortawesome/free-solid-svg-icons'
const Dossier = ({ numDoss, done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    var path = "../archive-form/"+ numDoss
    const curentdate = new Date().toLocaleDateString();

    const SubmitFunc0 = () => {
        Axios.post('http://localhost:3006/archv', {   
            nume: numDoss,
        })
    }
    var date = (new Date().getFullYear()).toString().substring(2,5)
    return (
        <div className="marche-dossier">
            <span className="num-dossier date-dossier">
                <Link to={path}>Dossier n°{date+'/'+numDoss} </Link>
            </span>
            <span className="date-dossier form">
                <a href={path} onClick={SubmitFunc0}> <FontAwesomeIcon icon={faFolderOpen} className="icon" /></a>
            </span>
        </div>
    )
}

export default Dossier