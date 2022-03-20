import Header from "../commun/Header.js"
import Droite from "../commun/Droite.js"
import Milieub from "./Milieub"
import Footer from "../commun/Footer.js"
import { useState, useEffect } from 'react'
const Comptabilite = () => {
    const [userInfo, setUserInfo] = useState({ id: '', nom: '', prenom: '', email: '', psswrd: '', service: '', role: '', CT: '' })
    useEffect(() => {
        fetch("/users/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setUserInfo({
                    ...userInfo,
                    id: jsonRes.information.id,
                    nom: jsonRes.information.nom,
                    prenom: jsonRes.information.prenom,
                    email: jsonRes.information.email,
                    psswrd: jsonRes.information.psswrd,
                    service: jsonRes.information.service,
                    role: jsonRes.information.role,
                    CT: jsonRes.information.CT
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
                setNum(jsonRes.infor.comptableDoss)
            }
        })
    })
    const serviceinfo = './' + userInfo.service;
    return (
        <div className="marche" >
            <Header userInfo={userInfo} serviceinfo={serviceinfo} num={num} />
            <div className="noyeau-marche">
                <Droite serviceinfo={serviceinfo} userInfo={userInfo} />
                <Milieub userInfo={userInfo} />
            </div>
            <Footer />
        </div>
    )
}
export default Comptabilite;