import Axios from 'axios'

import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../index.css"
import useForm from './useForm'
import validation from './validation'

import moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import Header from "../../services/commun/Header.js"
import Menu from "../../services/commun/Droite.js"
const Acc = (props) => {
    
    const { handleChange, handleSubmit, values, errors } = useForm(
        validation
    );

    const SubmitFunc3 = () => {
        var cbn = '1'
        const srvc = 'Mr'
        Axios.post('http://localhost:3006/cbn', {
            cbn: cbn,     
            numero: numDoss,
            srv: srvc
        })
    }
    const SubmitFunc1 = () => {
        var envo = true
        Axios.post('http://localhost:3006/send')
        Axios.post('http://localhost:3006/marche', {
        lmdt: limiteDate,
        desic: values.decis,
        tr: values.dateTr,
        date1: values.dateCreate,
        date2: debutDate2,
        type: values.type,
        objet: values.objet,
        frnssr: values.fournisseur,
        respo: values.respo,
        num: values.num,
        desc:values.desc,
        nm: numDoss,
        env: envo
       // })/*.then((respone) => {
       // console.log('infos envoyees')
        })
    }
    const SubmitFunc2 = () => {
        setP(true)
        var envo = false
        Axios.post('http://localhost:3006/marche', {
            lmdt: limiteDate,
            desic: values.decis,
            tr: values.dateTr,
            date1: values.dateCreate,
            date2: debutDate2,
            type: values.type,
            objet: values.objet,
            frnssr: values.fournisseur,
            respo: values.respo,
            num: values.num,
            desc:values.desc,
            nm: numDoss,
            env: envo
       // })/*.then((respone) => {
       // console.log('infos envoyees')
        })
    }


    var all = props.match.params.id;
    var numDoss = Math.floor(all / 10)
    var disable = true
    if (all % 10 == 1){
        disable = false
    }
    // var service = obj.service;

    
    var date = new Date()
    // var debutDate = date.getFullYear()+'-'
    // if (date.getMonth()<10){
    //     debutDate += '0'+date.getMonth()+'-'
    // }
    // else {
    //     debutDate += date.getMonth()+'-'+date.getDate();
    // }
    // if (date.getDate() < 10){
    //     debutDate += '0'+date.getDate()
    // }
    // else{
    //     debutDate += date.getDate();
    // }
    //
    var date3 = new Date()

    var debutDate2 = date3.getFullYear()+'-'
    if (date3.getMonth()<10){
        debutDate2 += '0'+date3.getMonth()+'-'
    }
    else {
        debutDate2 += date3.getMonth()+'-'+date3.getDate();
    }
    if (date3.getDate() < 10){
        debutDate2 += '0'+date3.getDate()
    }
    else{
        debutDate2 += date3.getDate();
    }
    //
    var date2 = new Date(date.getTime() +((30 + values.duree1)*24*60*60*1000))
    var limiteDate = date2.getFullYear()+'-'
    if (date2.getMonth()<10){
        limiteDate += '0'+date2.getMonth()+'-'
    }
    else {
        limiteDate += date2.getMonth()+'-';
    }
    if (date2.getDate() < 10){
        limiteDate += '0'+date2.getDate()
    }
    else{
        limiteDate += date2.getDate();
    }
    var current = new Date()
    var idDate = 'avance'
    if (current.getTime() > date2.getTime()){
        idDate = 'retard'
    }
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
                setNum(jsonRes.infor.comptableDoss)
                
            }
        })
    })
  const serviceinfo = "./"+userInfo.service;
  const [el, setEl] = useState(1)
  function next(){
    if (el == 3){
        setEl(1)
    }
    else{
        setEl(el +1)
    }
}
function prev(){
    if (el == 1){
        setEl(3)
    }
    else{
        setEl(el -1)
    }
}
const [p,setP] = useState(false)
var date = (new Date().getFullYear()).toString().substring(2,5)
    return (
        
        <form onSubmit={handleSubmit} className="acc-container" noValidate>
            <Header userInfo={userInfo} serviceinfo={serviceinfo} num={num}/>
            <div className="mid">
                <Menu serviceinfo={serviceinfo}/>
                <div className="form-container">
                    <div className="top-form">
                        <h1>Service marché dossier n°{date + '/' + numDoss}</h1>
                        <div className="btns">
                            <div className="btn">
                                <button className="btn-arreter" > <Link to="../marche" className="lien" onClick={SubmitFunc3}>Arreter</Link> </button>
                            </div>
                            <div className="btn">
                            <button className="btn-send" type="submit" onClick={SubmitFunc1}>
                                 <Link to='../marche'>Envoyer</Link>
                            </button>
                            </div>
                            <div className="btn">
                                <button className="btn-sauv" onClick={SubmitFunc2}>✓ Sauvegarder </button>
                            </div>
                        </div>
                    </div>
                    {p && <div className="text-sauv">
                        <span>Les données ont bien été sauvegarder</span>
                    </div>}
                    <div className="marche-form form">
                        { el == 1 && <div className="form">
                        <div className="cont">
                            <div className="text">
                                <label>Type de préstation</label>
                                <span>
                                    Le type de la préstation du marché
                                </span>
                            </div>
                            <div className=" content"> 
                                <select name="type" name="type" defaultValue={''} value={values.type} onChange={handleChange} disabled={disable}>
                                    <option value='' disabled className="none">Selecter le type de préstation *</option> 
                                    <option value="marche1"> Marché </option>
                                    <option value="marche2"> Consultation </option>
                                    <option value="marche3"> Gré a Gré </option>
                                </select>
                                {errors.type && <p className="err-txt">{errors.type}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Responsable</label>
                                <span>
                                    Le responsable doit etre unique
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                        disabled={disable}
                                        type="text" 
                                        name="respo"
                                        value={values.respo}
                                        onChange={handleChange}
                                        placeholder="Responsable du dossier *" 
                                        className="respo" 
                                        autocomplete="off" required/>
                                {errors.respo && <p className="err-txt">{errors.respo}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                            <label>Objet</label> 
                            <span>
                                L'objet doit decrire l'objet a acheter
                            </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text"
                                    disabled={disable} 
                                    name="objet"
                                    value={values.objet}
                                    onChange={handleChange}
                                    placeholder="Objet *" 
                                    className="objet" 
                                    autocomplete="off" required/>
                                {errors.objet && <p className="err-txt">{errors.objet}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date de lancement</label> 
                                <span>
                                    La date de lancement est quand le dossier a ete crée
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.dateCreate} 
                                    name="dateCreate"
                                    className="date"/>
                            </div>
                        </div>
                        </div>}
                        { el == 2 && <div className="form">
                        <div className="cont">
                            <div className="text">
                                <label>Date d'ouverture</label> 
                                <span>
                                    C'est la date d'ouverture dans ce service
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={debutDate2} 
                                    name="debutDate2"
                                    className="date"/>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Fournisseur</label> 
                                <span>
                                    Le fournisseur doit etre unique
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text" 
                                    name="fournisseur"
                                    disabled={disable}
                                    value={values.fournisseur}
                                    onChange={handleChange}
                                    placeholder="Fournisseur *" 
                                    className="fournisseur" 
                                    autocomplete="off" required/>
                                {errors.fournisseur && <p className="err-txt">{errors.fournisseur}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date de transmission</label> 
                                <span>
                                    C'est la date de transmission pour le prochain service
                                    elle est automatique
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="date" 
                                    name="dateTr"
                                    disabled={disable}
                                    value={values.dateTr}
                                    onChange={handleChange} 
                                    className="objet" 
                                    autocomplete="off" required/>
                                {errors.dateTr && <p className="err-txt">{errors.dateTr}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Décision</label> 
                                <span>
                                    La décision est inchangeable
                                </span>
                            </div>
                            <div className=" content"> 
                                <select name="decis" defaultValue={''} value={values.decis} onChange={handleChange} disabled={disable}>
                                    <option value='' disabled className="none">Choisissez la décision *</option> 
                                    <option value="dec1"> Accepté </option>
                                    <option value="dec2"> Refusé </option>
                                </select>
                                {errors.decis && <p className="err-txt">{errors.decis}</p>}
                            </div>
                        </div>
                        </div>}
                        { el == 3 && <div className="form">
                        <div className="cont">
                            <div className="text">
                                <label>Numéro de convention</label>
                                <span>
                                    Le numéro de la convention a suivre
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text" 
                                    name="num"
                                    disabled={disable}
                                    value={values.num}
                                    onChange={handleChange}
                                    placeholder="Numéro de convention *" 
                                    className="num" 
                                    autocomplete="off" required/>
                                {errors.num && <p className="err-txt">{errors.num}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date limite</label>
                                <span>
                                    C'est la date limite du dossier la durée est imposé par l'administrateur
                                </span>
                            </div>
                            <div className=" content" > 
                                <input 
                                    id={idDate}
                                    type= "date"
                                    disabled={disable}
                                    value={limiteDate} 
                                    name="date2"
                                    className="date"/>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Description</label>
                                <span>
                                    Une remarque a ajouter ou autre
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text"
                                    name="desc"
                                    disabled={disable}
                                    value={values.desc}
                                    onChange={handleChange} 
                                    placeholder="Observation" 
                                    className="desc"
                                    autoComplete="off"/>
                            </div>
                        </div>
                        </div>}
                        
                        <div className="navigate">
                            <span onClick={prev} class="previous round">&#8249;</span>
                            <h4 className="page-txt">
                                page {el}/3
                            </h4>
                            <span onClick={next} class="next round">&#8250;</span>
                        </div>
                        {/* <div className="cont file-container">
                            <div className="content">
                                <input 
                                    type="file"
                                    name="file"
                                    id="file"
                                    value={values.file}
                                    onChange={handleChange} 
                                    placeholder="" 
                                    className="file" autocomplete="off"/>
                                <label className="icn-cont" for="file">
                                    Telecharger vos fichiers
                                    <FontAwesomeIcon icon={faFileDownload} className="icn" />
                                </label>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
            
            
        </form>
    )
}

export default Acc
