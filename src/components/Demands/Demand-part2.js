import React from "react";
import "./demand.css";
import Header from "../Header";
import Footer from "../Footer";
import Uploads from "../Upload";


const DemandPart2 = () => {
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
                autoFocus
              />
            </label>
          </form>
          <hr />
          <h4>Nature des soins:</h4>
          <div>
            <div className="demand2_list">
              <input type="radio" name="demo1" class="demand2" id="demo1-a" />
              <label for="demo1-a">Maladie</label>
              <input type="radio" name="demo1" class="demand2" id="demo1-b" />
              <label for="demo1-b">Affection longue durée</label>
              <input type="radio" name="demo1" class="demand2" id="demo1-c" />
              <label for="demo1-c">Maternité</label>
              <input type="radio" name="demo1" class="demand2" id="demo1-d" />
              <label for="demo1-d">Accident du travail</label>
              <input type="radio" name="demo1" class="demand2" id="demo1-e" />
              <label for="demo1-e">Accident causé par un tiers</label>
            </div>
            <form>
              <div className="demand2_incident">
                <label for="demand2_incident">Date de l'accident:</label>
                <input type="date" id="demand2_incident" name="incident" />
              </div>
            </form>
            <hr />
            <h4>Détails des soins:</h4>
            <select class="form-control">
              <option valeur="sd">Soins dentaires</option>
              <option valeur="pd">Prothèse dentaire</option>
              <option valeur="ca">Chirurgie ambulatoire</option>
              <option valeur="ph">Pharmacie</option>
              <option valeur="el">Examen de laboratoire</option>
              <option valeur="ra">Radiologie</option>
              <option valeur="ak">Actes de kinésithérapie</option>
              <option valeur="ai">Actes infirmiers</option>
              <option valeur="other">Autre</option>
            </select>
            <hr />
            <h4>Type de document:</h4>
            <select className="form-control">
              <option valeur="or">Ordonnance</option>
              <option valeur="fs">Feuille de soin</option>
              <option valeur="fa">Facture</option>
            </select>
            <hr />
            <h4>Montant des frais:</h4>
            <label className="demand2_price ">
              <input type="number" name="price" placeholder="Montant" />
              <input type="text" name="devise" placeholder="Devise" />
            </label>
            <Uploads />
          </div>
        </div>
        <Footer stepText="Etape 2/3" path="/DemandStep3" />
      </div>
    </>
  );
};
export default DemandPart2;
