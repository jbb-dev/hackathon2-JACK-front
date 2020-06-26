import React, { useState } from "react";
import "./demand.css";
import Header from "../Header";
import Footer from "../Footer";
import Uploads from "../Upload";

const DemandPart2 = () => {
  const [motifSoins, setMotifSoins] = useState("");
  const [natureSoins, setNatureSoin] = useState("");
  const [dateAccident, setdateAccident] = useState("");
  const [detailSoins, setDetailSoins] = useState("");
  const [typeDocument, setTypeDocument] = useState("");
  const [montant, setMontant] = useState("");
  const [devise, setDevise] = useState("");
  const [urlDocument, setUrlDocument] = useState("");

  const newDocument = () => {
    setDetailSoins("");
    setTypeDocument("");
    setMontant("");
    setDevise("");
    setUrlDocument("");
  };
  return (
    <>
      <Header arrow="true" title="Créer une demande" pathName="/DemandStep1" />
      <div className="demand2_page">
        <div>
          <h4>Motif de recours aux soins:</h4>
          <form className="demand2_message">
            <label>
              <textarea
                className="demand2_input"
                type="text"
                placeholder="Indiquez le motif"
                onChange={(event) => setMotifSoins(event.target.value)}
                autoFocus
              />
            </label>
          </form>
          <hr />
          <h4>Nature des soins:</h4>
          <div>
            <div className="demand2_list">
              <input
                type="radio"
                name="demo1"
                class="demand2"
                id="demo1-a"
                onClick={() => setNatureSoin("maladie")}
              />
              <label for="demo1-a">Maladie</label>
              <input
                type="radio"
                name="demo1"
                class="demand2"
                id="demo1-b"
                onClick={() => setNatureSoin("affection_longue_duree")}
              />
              <label for="demo1-b">Affection longue durée</label>
              <input
                type="radio"
                name="demo1"
                class="demand2"
                id="demo1-c"
                onClick={() => setNatureSoin("maternite")}
              />
              <label for="demo1-c">Maternité</label>
              <input
                type="radio"
                name="demo1"
                class="demand2"
                id="demo1-d"
                onClick={() => setNatureSoin("accident_travail")}
              />
              <label for="demo1-d">Accident du travail</label>
              <input
                type="radio"
                name="demo1"
                class="demand2"
                id="demo1-e"
                onClick={() => setNatureSoin("accident_tiers :")}
              />
              <label for="demo1-e">Accident causé par un tiers</label>
            </div>
            <form>
              <div className="demand2_incident">
                <label for="demand2_incident">Date de l'accident:</label>
                <input
                  type="date"
                  id="demand2_incident"
                  name="incident"
                  onChange={(event) => setdateAccident(event.target.value)}
                />
              </div>
            </form>
            <hr />
            <h4>Détails des soins:</h4>
            <select
              class="form-control"
              onChange={(event) => setDetailSoins(event.target.value)}
            >
              <option valeur="soin_dentaire">Soins dentaires</option>
              <option valeur="soin_dentaire">Prothèse dentaire</option>
              <option valeur="chirurgie_ambulatoire">
                Chirurgie ambulatoire
              </option>
              <option valeur="pharmacie">Pharmacie</option>
              <option valeur="examen_labo">Examen de laboratoire</option>
              <option valeur="radiologie">Radiologie</option>
              <option valeur="kine">Actes de kinésithérapie</option>
              <option valeur="infirmier">Actes infirmiers</option>
              <option valeur="other">Autre</option>
            </select>
            <hr />
            <h4>Type de document:</h4>
            <select
              className="form-control"
              onChange={(event) => setTypeDocument(event.target.value)}
            >
              <option valeur="or">Ordonnance</option>
              <option valeur="fs">Feuille de soin</option>
              <option valeur="fa">Facture</option>
            </select>
            <hr />
            <h4>Montant des frais:</h4>
            <label className="demand2_price ">
              <input
                type="number"
                name="price"
                placeholder="Montant"
                onChange={(event) => setMontant(event.target.value)}
                value={montant}
              />
              <input
                type="text"
                name="devise"
                placeholder="Devise"
                onChange={(event) => setDevise(event.target.value)}
                value={devise}
              />
            </label>
            <Uploads setUrlDocument={setUrlDocument} />
          </div>
          <div>
            <button className="upload_button" onClick={() => newDocument()}>
              Valider le document
            </button>
          </div>
        </div>
        <Footer stepText="Etape 2/3" path="/DemandStep3" />
      </div>
    </>
  );
};
export default DemandPart2;
