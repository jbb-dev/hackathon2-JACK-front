import React, {useState, useEffect} from 'react';
import generatePDF from './generatePDF.js'
import Axios from 'axios';



const CreatePDF = (props) => {

    const [dataProfile, setDataProfile] = useState({})
    const [dataForm, setDataForm] = useState([])

    const [userData, setUserData] = useState({
        identite : 
        {
          nom_victime : 'Durand',
          prenom_victime : 'Paul',
          num_immat : {
            sex : '1',
            birth_year : '84',
            birth_month : '07',
            birth_department : '13',
            code_commune : '999',
            birth_num_order : '001',
            control_key : '66'
            },
          birthday_date : '12/07/1984',
          adresse : '2 lotissement de la Galinette, chemin du Puy, 13760 Saint-Cannat'
        },
        identite_assure :
        {
            nom_assure : 'Dupont',
            prenom_assure : 'Eric',
            num_immat : {
              sex : '2',
              birth_year : '57',
              birth_month : '10',
              birth_department : '04',
              code_commune : '728',
              birth_num_order : '008',
              control_key : '12'
            },
            nationalite : {
              fr : 'X',
              ressortissant : 'X',
              autre : 'X',
              autre_precision : 'American'
            },
            adresse : {
              rue : '3 rue du colonel Moutarde',
              code_postal : '13001',
              commune : 'Marseille',
              email : 'eric.dupont@test.fr'
            }
        },
        situation : {
            salarie : 'X',
            retraite : 'X',
            etudiant : 'X',
            chaumeur : 'X',
            autre : 'X',
            precision : "je n'ai aucune situation décrite"
        },
        caracteristique_sejour : {
            adresse : '3 rue de la wild code school',
            localite : 'hotel de Marseille',
            pays : 'Mexique',
            dates : {
              du : '01/02/2020',
              au : '10/02/2020'
              },
            motif : {
              conges_payes : 'X',
              tourisme : 'X',
              detachement : 'X',
              etudes : 'X'
            }
        },
        motif_soins : "je me suis fait mal aux pieds en tombant de l'avion, les pompiers m'ont transportés aux urgences puis m'ont soignés",
        nature_soins : {
          rapport : {
            maladie : 'X',
            affection_longue_duree : 'X',
            maternite : 'X',
            accident_travail : 'X',
            date : '02/02/2020',
            accident_tiers : 'X',
            date_accident_tiers : '04/02/2020',
            soin_deja_prevu_oui : 'X',
            soin_deja_prevu_non : 'X'
            },
          detail_soins : {
            soin_ambulatoire : {
              consultation_cabinet : 'X',
              deplacement_medecin : 'X',
              medecin_generaliste : 'X',
              medecin_specialiste : 'X',
              tarif_medecin : '49 €',
              soin_dentaire : 'X',
              soin_dentaire_precision : "on m'a arraché une dent",
              soin_dentaire_tarif : '280 €',
              protese_dentaire : 'X',
              protese_dentaire_precision : "une belle dent en or",
              protese_dentaire_tarif : '570 €',
              chirurgie_ambulatoire : 'X',
              chirurgie_ambulatoire_precision : "suppresion du pied au scalpel",
              chirurgie_ambulatoire_tarif : '2500 €',
              pharmacie : 'X',
              pharmacie_tarif : '70 €',
              examen_labo : 'X',
              examen_labo_tarif : '50 €',
              radiologie : 'X',
              radiologie_precision : 'fissure au niveau du pied gauche',
              radiologie_tarif : '200 €',
              kine : 'X',
              kine_tarif : '40 €',
              infirmier : 'X',
              infirmier_tarif : '90 €',
              autres_soins : 'X',
              autres_soins_precision : " j'en ai profité pour me faire lifter le visage",
              autres_soins_tarif : '3500 €',
              hospitalisation : 'X',
              hospitalisation_date_du : '02/02/2020',
              hospitalisation_date_au : '04/02/2020',
              hospitalisation_precision : "soins chrirurgicaux",
              hospitalisation_tarif : '830 €',
              frais_transport : 'X',
              frais_transport_precision : 'helicoptere et taxi',
              frais_transport_tarif: '600 €'
            },
            soins_recus_ue : {
              remboursement_pays_sejour : 'X',
              remboursement_pays_france :'X',
              remboursement_partiel_oui : 'X',
              remboursement_partiel_non : 'X'
          }
        },
        attestation_honneur : {
          montant_total : '7490 €',
          fait_a : 'Aix en Provence',
          date : '20/06/2020',
          signature : 'JBB',
          impossibilite_signature : 'X'
        }
      
        }
      })


    const getDataFromProfile = () => {
        Axios
            .get(`http://localhost:3001/users`)
            .then (res => setDataProfile(res))
            .catch(err => console.error(err))
            .finally(console.log(dataProfile))
            }


    useEffect(()=> {
        getDataFromProfile()
    },[])


    return(
        <>
        <h1>Test</h1>
        <button onClick={() => generatePDF(userData)}>clic</button>
        </>
    )
}

export default CreatePDF;
