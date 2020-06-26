import React, {useState, useEffect} from "react";
import "./demand.css";
import Header from "./Header"
import { Link } from "react-router-dom";
import Coverflow from 'react-coverflow';
import dossier from "../assets/images/dossier.png"
import { StyleRoot } from 'radium'
import pdf from '../assets/images/pdflogo.png'
import {Progress} from 'reactstrap'

const Demands = () => {

    const fn =  () => {
        /* do you want */  
    }
    
    const [document, setdocument] = useState([
       { type: "Feuilles de soins",
        url: "",
        date: "24/06/2020",
        },
        { type: "Facture",
        url: "",
        date: "24/06/2020",
        },
        { type: "Cerfa",
        url: "",
        date: "24/06/2020",
        }
    ]
      )

      useEffect(() => { });

  return (
      
      <div className="main-head">
            <Header arrow='true' title="Mes demandes" />
            <div className="demand_page">
                <StyleRoot>
                    <Coverflow
                    width={320}
                    height={190}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={true}
                    displayQuantityOfSide
                >
                    
                    <img src={dossier} alt='Dossier USA 20/06/2020'/>
                    <img src={dossier} alt='Dossier Japon 24/07/2019' data-action=""/>
                    <img src={dossier} alt='Dossier Angleterre 28/08/2016' data-action=""/>
                    
                    </Coverflow>
                    <p className="status">Dossier terminé à :</p>
                    <Progress value={50}>50%</Progress>
                    
                </StyleRoot>
                
            <div className="demands">
                {document.map(doc => 
                    <div>
                        <img id="doc" src={pdf} alt='pdf'/>
                        <p className="docPara">{doc.type}</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    
  );
};

export default Demands;
