import React from "react";
import "./demand.css";
import Header from "../Header";
import { Link } from "react-router-dom";


const DemandPart3 = () => {
  return (
    <>
      <Header title="Créer une demande" />
      <div className="demand3_page">
        <div>
          <h4>Revue du document:</h4>
          <a
            href="https://imgv2-2-f.scribdassets.com/img/document/378428713/original/4970fbf366/1587541079?v=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="pdf-preview"
              src="https://imgv2-2-f.scribdassets.com/img/document/378428713/original/4970fbf366/1587541079?v=1"
              alt="pdf-preview"
            />
          </a>
          <hr />
          <h4>Liste des documents</h4>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Factures
              <span class="badge badge-primary badge-pill">5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Ordonnances
              <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Feuilles de soin
              <span class="badge badge-primary badge-pill">1</span>
            </li>
          </ul>
        </div>
        <div className="footer">
          <Link to="/home">
            <button type="button" className="send-button">
              Envoyer la demande
            </button>
          </Link>
          <div className="step">Etape 3/3</div>
        </div>
      </div>
    </>
  );
};
export default DemandPart3;
