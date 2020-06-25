import React, { useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import { Container } from 'reactstrap'

const Profile = (props) => {
  const [modif, setModif] = useState(false)
  const [profile, setProfile] = useState({
    nom: 'nom de famille',
    prenom: 'prénom',
    naissance: '24/08/1987',
    mail: 'adresse email',
    password: '123456',
    rue: 'XX rue du poulet frit',
    postal: '56000',
    ville: 'Vannes',
    nation: 'Française',
    secu: '1870894078191',
    cpam: 'mail de contact CPAM',
    mutuelle: 'mail de contact mutuelle'
  })
  const [modifiedProfile, setModifiedProfile] = useState({
    mail: profile.mail,
    password: profile.password,
    rue: profile.rue,
    postal: profile.postal,
    ville: profile.ville,
    cpam: profile.cpam,
    mutuelle: profile.mutuelle
  })
  const [typedPW, setTypedPW] = useState('')
  const [validPW, setValidPW] = useState()
  const changePW = (e) => { return (
    e.target.value !== '' && typedPW !== '' && e.target.value === typedPW ? 
    setValidPW(true) & setModifiedProfile({...modifiedProfile, password: e.target.value})
     : setValidPW(false)
  )}
  const modifprof = () => {
    setModif(!modif)
  }
  const validprof = () => {
    setProfile({ ...profile, 
      mail: modifiedProfile.mail, 
      password: modifiedProfile.password, 
      rue: modifiedProfile.rue, 
      postal: modifiedProfile.postal, 
      ville: modifiedProfile.ville, 
      cpam: modifiedProfile.cpam, 
      mutuelle: modifiedProfile.mutuelle})
    setModif(!modif)
  }
  return (
    <Container >
      <Header arrow='true' title="Profil" />
      <div className="profile_page">
        <table>
          <tr className="entete">Nom </tr>
          <tr className="valeur">{profile.nom}</tr>
          <tr className="entete">Prénom </tr>
          <tr className="valeur">{profile.prenom}</tr>
          <tr className="entete">Date de naissance </tr>
          <tr className="valeur">{profile.naissance}</tr>
          <tr className="entete">Adresse Mail </tr>
          <tr className="valeur">{modif ? <input type='text' value={modifiedProfile.mail} onChange={(e) => setModifiedProfile({ ...modifiedProfile, mail: e.target.value })} /> : profile.mail}</tr>
          {modif ? <><tr className="entete">Nouveau mot de passe </tr>
          <tr className="valeur"><input type='password' className={validPW? 'valid' : 'invalid'} value={typedPW} onChange={(e)=> setTypedPW( e.target.value)}/></tr>
          <tr className="entete">Valider mot de passe </tr>
          <tr><input type='password' className={validPW ? 'valid' : 'invalid'} onChange={(e) => changePW(e) } /></tr> </> : ''}
          <tr className="entete">Adresse postale </tr>
          <tr className="valeur">{modif ? <input type='text' value={modifiedProfile.rue} onChange={(e) => setModifiedProfile({...modifiedProfile, rue: e.target.value})} /> : profile.rue}</tr>
          <tr className="valeur">{modif ? <input type='text' value={modifiedProfile.postal} onChange={(e) => setModifiedProfile({ ...modifiedProfile, postal: e.target.value })} /> : profile.postal}</tr>
          <tr className="valeur">{modif ? <input type='text' value={modifiedProfile.ville} onChange={(e) => setModifiedProfile({ ...modifiedProfile, ville: e.target.value })} /> : profile.ville}</tr>
          <tr className="entete">Nationalité </tr>
          <tr className="valeur">{profile.nation}</tr>
          <tr className="entete">N° de sécurité sociale </tr>
          <tr className="valeur">{profile.secu}</tr>
          <tr className="entete">Contact CPAM </tr>
          <tr className="valeur">{modif ? <input type='text' value={modifiedProfile.cpam} onChange={(e) => setModifiedProfile({ ...modifiedProfile, cpam: e.target.value })} /> : profile.cpam}</tr>
          <tr className="entete">Contact Mutuelle </tr>
          <tr className="valeur">{modif ? <input type='text' value={modifiedProfile.mutuelle} onChange={(e) => setModifiedProfile({ ...modifiedProfile, mutuelle: e.target.value })} /> : profile.mutuelle}</tr>
        </table>
        {modif ? <button className="modif_button" onClick={(e) => validprof(e)}>Valider mon profil</button> : <button className="modif_button" onClick={(e) => modifprof(e)}>Modifier mon profil</button>}
      </div>
    </Container>
  );
};
export default Profile;
