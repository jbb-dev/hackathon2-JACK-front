import React from "react";
import "./demand.css";
import Header from "../Header";
import Footer from "../Footer";

const DemandPart1 = () => {
  return (
    <>
      <Header title="Créer une demande" />
      <div className="demand1_page">
        <div className="demand1_file">
          <input type="text" name="File" placeholder="Nom du dossier" />
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
            <input type="radio" name="demo1" class="demand2" id="demo1-a" />
            <label for="demo1-a">Activité salariée</label>
            <input type="radio" name="demo1" class="demand2" id="demo1-b" />
            <label for="demo1-b">Pensionné / Retraité</label>
            <input type="radio" name="demo1" class="demand2" id="demo1-c" />
            <label for="demo1-c">Etudiant</label>
            <input type="radio" name="demo1" class="demand2" id="demo1-d" />
            <label for="demo1-d">Indemnisé Pôle Emploi</label>
            <input type="radio" name="demo1" class="demand2" id="demo1-e" />
            <label for="demo1-e">Autre</label>
          </div>
          <hr />
          <h4>Motif du séjour:</h4>
          <div className="demand1_list">
            <input type="radio" name="demo1" class="demand1" id="demand1-a" />
            <label for="demand1-a">Congés payés dans le pays d'origine</label>
            <input type="radio" name="demo1" class="demand1" id="demand1-b" />
            <label for="demand1-b">Tourisme</label>
            <input type="radio" name="demo1" class="demand1" id="demand1-c" />
            <label for="demand1-c">Détachement professionnel</label>
            <input type="radio" name="demo1" class="demand1" id="demand1-d" />
            <label for="demand1-d">Etudes / stage</label>
          </div>
          <hr />
          <h4>Adresse du sejour:</h4>
          <label className="demand1_adress">
            <input type="text" name="adress" placeholder="Adresse" />
          </label>
          <h4>Localité:</h4>
          <label className="demand1_adress">
            <input type="text" name="locality" placeholder="Localité" />
          </label>
          <h4>Pays:</h4>
          <label className="demand1_adress">
            <input type="text" name="country" placeholder="Pays" />
          </label>
          <hr />
          <form>
            <div className="demand1_trip">
              <label for="demand1_trip">Dates du séjour:</label>
              <input type="date" id="demand1_start" name="trip-start" />
              <input type="date" id="demand1_end" name="trip-end" />
            </div>
          </form>
        </div>
      </div>
      <Footer stepText="Etape 1/3" path="/DemandStep2" />
    </>
  );
};
export default DemandPart1;
