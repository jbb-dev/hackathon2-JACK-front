import React from "react";
import "./demand.css";
import Header from "../Header";
import Footer from "../Footer";
import Uploads from "../Upload";


const DemandPart2 = () => {
  return (
    <>
      <Header title="Créer une demande" />
      <div className="demand2_page">
        <div>
          <h4>Motif de recours aux soins:</h4>
          <form className="demand2_message">
            <label>
              <textarea
                className="demand2_input"
                type="text"
                placeholder="Indiquez le motif"
              />
            </label>
          </form>
          <hr />
          <h4>Nature des soins:</h4>
          <div>
            <div className="demand2_list">
              <input type="checkbox" class="demand2" id="demand2_1" />
              <label for="demand2_1">Maladie</label>
              <input type="checkbox" class="demand2" id="demand2_2" />
              <label for="demand2_2">Affection longue durée</label>
              <input type="checkbox" class="demand2" id="demand2_3" />
              <label for="demand2_3">Maternité</label>
              <input type="checkbox" class="demand2" id="demand2_4" />
              <label for="demand2_4">Accident du travail</label>
              <input type="checkbox" class="demand2" id="demand2_5" />
              <label for="demand2_5">Accident causé par un tiers</label>
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
        <Footer stepText="Etape 2/3"/>
      </div>
    </>
  );
};
export default DemandPart2;
