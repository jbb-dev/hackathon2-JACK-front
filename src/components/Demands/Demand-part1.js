import React, { useState } from "react";
import "./demand.css";
import Header from "../Header";
import Footer from "../Footer";

const DemandPart1 = () => {
  // const [profile, setProfile] = useState({
  //   nom: "nom de famille",
  //   prenom: "prénom",
  //   naissance: "24/08/1987",
  //   mail: "adresse email",
  //   password: "123456",
  //   rue: "XX rue du poulet frit",
  //   postal: "56000",
  //   ville: "Vannes",
  //   nation: "Française",
  //   secu: "1870894078191",
  //   cpam: "mail de contact CPAM",
  //   mutuelle: "mail de contact mutuelle",
  // });
  const [file, setFile] = useState("");
  const [situation, setSituation] = useState("");
  const [motif, setMotif] = useState("");
  const [adress, setAdress] = useState("");
  const [locality, setLocality] = useState("");
  const [country, setCountry] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <>
      <Header arrow="true" title="Créer une demande" pathName="/home" />
      <div className="demand1_page">
        <div className="demand1_file">
          <input
            type="text"
            name="File"
            placeholder="Nom du dossier"
            onChange={(event) => setFile(event.target.value)}
          />
        </div>
        <div>
          <h4>Profil utilisé:</h4>
          <select class="form-control">
            <option valeur="p1">Profil 1</option>
            <option valeur="p2">Profil 2</option>
            <option valeur="p3">Profil 3</option>
          </select>
          <hr />
          <h4>Situation administrative:</h4>
          <div className="demand2_list">
            <input
              type="radio"
              name="demo1"
              class="demand2"
              value="option1"
              id="demo1-a"
              onClick={() => setSituation("salarie")}
            />
            <label for="demo1-a">Activité salariée</label>
            <input
              type="radio"
              name="demo1"
              class="demand2"
              value="option2"
              id="demo1-b"
              onClick={() => setSituation("retraite")}
            />
            <label for="demo1-b">Pensionné / Retraité</label>
            <input
              type="radio"
              name="demo1"
              class="demand2"
              value="option3"
              id="demo1-c"
              onClick={() => setSituation("etudiant")}
            />
            <label for="demo1-c">Etudiant</label>
            <input
              type="radio"
              name="demo1"
              class="demand2"
              value="option4"
              id="demo1-d"
              onClick={() => setSituation("chaumeur")}
            />
            <label for="demo1-d">Indemnisé Pôle Emploi</label>
            <input
              type="radio"
              name="demo1"
              class="demand2"
              value="option5"
              id="demo1-e"
              onClick={() => setSituation("autre")}
            />
            <label for="demo1-e">Autre</label>
          </div>
          <hr />
          <h4>Motif du séjour:</h4>
          <div className="demand1_list">
            <input
              type="radio"
              name="demo1"
              class="demand1"
              id="demand1-a"
              onClick={() => setMotif("conges_payes")}
            />
            <label for="demand1-a">Congés payés dans le pays d'origine</label>
            <input
              type="radio"
              name="demo1"
              class="demand1"
              id="demand1-b"
              onClick={() => setMotif("tourisme")}
            />
            <label for="demand1-b">Tourisme</label>
            <input
              type="radio"
              name="demo1"
              class="demand1"
              id="demand1-c"
              onClick={() => setMotif("detachement")}
            />
            <label for="demand1-c">Détachement professionnel</label>
            <input
              type="radio"
              name="demo1"
              class="demand1"
              id="demand1-d"
              onClick={() => setMotif("etudes")}
            />
            <label for="demand1-d">Etudes / stage</label>
          </div>
          <hr />
          <h4>Adresse du sejour:</h4>
          <label className="demand1_adress">
            <input
              type="text"
              name="adress"
              placeholder="Adresse"
              onChange={(event) => setAdress(event.target.value)}
            />
          </label>
          <h4>Localité:</h4>
          <label className="demand1_adress">
            <input
              type="text"
              name="locality"
              placeholder="Localité"
              onChange={(event) => setLocality(event.target.value)}
            />
          </label>
          <h4>Pays:</h4>
          <label className="demand1_adress">
            <input
              type="text"
              name="country"
              placeholder="Pays"
              onChange={(event) => setCountry(event.target.value)}
            />
          </label>
          <hr />
          <form>
            <div className="demand1_trip">
              <label for="demand1_trip">Dates du séjour:</label>
              <input
                type="date"
                id="demand1_start"
                name="trip-start"
                onChange={(event) => setStart(event.target.value)}
              />
              <input
                type="date"
                id="demand1_end"
                name="trip-end"
                onChange={(event) => setEnd(event.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer stepText="Etape 1/3" path="/DemandStep2" />
    </>
  );
};
export default DemandPart1;
