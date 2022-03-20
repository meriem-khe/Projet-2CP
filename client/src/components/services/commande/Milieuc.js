import '../commun/Style_sheet.css'
import React, { useState, useEffect, useRef } from "react";
import Dossier from "../commun/DossierCom.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
let useClickOutside = (handler1) => {
    let menutri = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!menutri.current.contains(event.target)) {
                handler1();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return menutri;
}
const Milieuc = ({ userInfo }) => {
    var debutDate
    const [x, setx] = useState(false);
    const [Num, setNum] = useState([])
    function addChild() {
        Axios.post('http://localhost:3006/nouvcmnd', {})
        var showdate = new Date();
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNumDoss(jsonRes.infor.numDoss)
                setNum(jsonRes.infor.marcheDoss)

            }
        })

    }


    const [numDoss, setNumDoss] = useState(0)
    useEffect(() => {
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNumDoss(jsonRes.infor.numDoss)
                setNum(jsonRes.infor.commandeDoss)
                if (Num !== []) {
                    setx(true)
                }
            }
        })
    })
    const [trier, settrier] = useState(false);
   /*****tri*/
     function triertab() {
        settrier(!trier);
     
    }

    /*************** */
    let menutri = useClickOutside(() => {
        settrier(false);
    }
    )
    return (
        <div className="partie-milieu">

            <h3> Bienvenue dans votre espace de travail dans le service commande!</h3>
            <p>Ajoutez des nouveaux dossiers et commencez à travailler en remplissant les formulaires.</p>
            <div className="content-marche">
                <div className="btn-contain">
                    <div className="nouveau">
                        <button className="new" onClick={addChild}>
                            <p>Nouveau +</p>
                        </button>
                    </div>
                </div>

                <div className="titre-nouveau">
                    <p className="titresec">Vos dossiers en cours:</p>
                    <div className="tri">
                        <p>Trier</p>
                        <span className="icon" onClick={() => settrier(trier => !trier)}>
                            <FontAwesomeIcon icon={faCaretDown} className="icon" />
                        </span>
                    </div>
                </div>
                <div ref={menutri}>
                    {trier && (<div className="tri-menu">
                        <ul className="list-tri">
                            
                            <li className="item-tri" onClick={() => triertab()}>
                                par Numéro de dossier
                            </li>
                        </ul>
                    </div>)}
                </div>
                <div className="titles">
                    <p>Numéro de dossier</p>

                    <p>Avancement</p>
                    <p className="final">Formulaire</p>
                </div>

                {
                    Num.map((n) => {
                        return <Dossier numDoss={n} done="25"  service={userInfo.service} role={userInfo.role} />
                    })
                }
                {!x && (<div>
                    <h5>vous n'avez aucun dossier en cours</h5>
                </div>)}

            </div>


        </div>
    );

};
export default Milieuc;
/** <div className="searchbar">
                        <form class="example" >
                            <input type="text" placeholder="   Rechercher.." name="search2" />
                            <button type="submit" className="button"><FontAwesomeIcon icon={faSearch} className="icon" /></button>
                        </form>
                    </div> */