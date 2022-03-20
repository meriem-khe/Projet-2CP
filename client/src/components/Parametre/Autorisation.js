import Header from "../services/commun/Header"
import Footer from "../services/commun/Footer"
import { useState, useEffect } from 'react'
import Accautorisation from "./Accautorisation"
const Autorisation = () => {
    const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
    useEffect(() => {
        fetch("/users/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined){
                setUserInfo({...userInfo,
                    id: jsonRes.information.id,
                    nom : jsonRes.information.nom,
                    prenom : jsonRes.information.prenom,
                    email : jsonRes.information.email,
                    psswrd : jsonRes.information.psswrd,
                    service : jsonRes.information.service,
                    role : jsonRes.information.role,
                    CT : jsonRes.information.CT
                }) 
            }
            
        })
        
        
    })
    return (
        <div className="marche" >
            <Header userInfo={userInfo} serviceinfo="#" />
            <div className="noyeau-marche">
                <Accautorisation serviceinfo={userInfo.service} />
            </div>
            <Footer />
        </div>
    )
}
export default Autorisation;