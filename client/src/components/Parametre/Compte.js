import Header from "../services/commun/Header"
import Footer from "../services/commun/Footer"
import { useState, useEffect } from 'react'
import AccCompte from "./Acccompte"
const Compte = () => {
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
    const [num, setNum] = useState([])
    useEffect(() => {
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                if (userInfo.service === "marche"){
                    setNum(jsonRes.infor.marcheDoss)
                }
                if (userInfo.service === "commande"){
                    setNum(jsonRes.infor.commandeDoss)
                }
                if (userInfo.service === "budget"){
                    setNum(jsonRes.infor.budgetDoss)
                }
                if (userInfo.service === "comptable"){
                    setNum(jsonRes.infor.comptableDoss)
                }
            }
        })
    })
    return (
        <div className="marche" >
            <Header userInfo={userInfo} serviceinfo={userInfo.service} num={num} />
            <div className="noyeau-marche">
                <AccCompte serviceinfo={userInfo.service} />
            </div>
            <Footer />
        </div>
    )
}
export default Compte;