import { PDFDocument, StandardFonts } from 'pdf-lib'
import download from 'downloadjs'
import cerfa_page1 from '../cerfa_page1.pdf'
import pdfUpload from './pdfUpload'


async function generatePdf (profile) {

  // Fetch Cerfa
  const existingPdfBytes = await fetch(cerfa_page1).then((res) => res.arrayBuffer())

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes, { ignoreEncryption: true })

  // Only select the first page of the Cerfa
  const page1 = pdfDoc.getPages()[0]

  // Embed the Helvetica font
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const drawText = (text, x, y, size = 11) => {
    page1.drawText(text, { x, y, size, font })
  }

  // Draw on the first page :

  // Draw PERSONNE AYANT RECU LES SOINTS ET ASSUREE

    //Personne ayant reçu les soins
  drawText(profile.identite.nom_victime + ' ' + profile.identite.prenom_victime, 110, 719, 8)
  drawText(profile.identite.num_immat.sex, 146, 699, 8)
  drawText(profile.identite.num_immat.birth_year[0], 160, 699, 8)
  drawText(profile.identite.num_immat.birth_year[1], 173, 699, 8)
  drawText(profile.identite.num_immat.birth_month[0], 186, 699, 8)
  drawText(profile.identite.num_immat.birth_month[1], 199, 699, 8)
  drawText(profile.identite.num_immat.birth_department[0], 212, 699, 8)
  drawText(profile.identite.num_immat.birth_department[1], 225, 699, 8)
  drawText(profile.identite.num_immat.code_commune[0], 238, 699, 8)
  drawText(profile.identite.num_immat.code_commune[1], 251, 699, 8)
  drawText(profile.identite.num_immat.code_commune[2], 264, 699, 8)
  drawText(profile.identite.num_immat.birth_num_order[0], 277, 699, 8)
  drawText(profile.identite.num_immat.birth_num_order[1], 290, 699, 8)
  drawText(profile.identite.num_immat.birth_num_order[2], 303, 699, 8)
  drawText(profile.identite.num_immat.control_key[0], 323, 699, 8)
  drawText(profile.identite.num_immat.control_key[1], 336, 699, 8)
  drawText(profile.identite.birthday_date[0], 445, 699, 8)
  drawText(profile.identite.birthday_date[1], 457, 699, 8)
  drawText(profile.identite.birthday_date[3], 469, 699, 8)
  drawText(profile.identite.birthday_date[4], 482, 699, 8)
  drawText(profile.identite.birthday_date[6], 495, 699, 8)
  drawText(profile.identite.birthday_date[7], 508, 699, 8)
  drawText(profile.identite.birthday_date[8], 521, 699, 8)
  drawText(profile.identite.birthday_date[9], 534, 699, 8)
  drawText(profile.identite.adresse, 220, 685, 8)


  //Personne assurée
  drawText(profile.identite_assure.nom_assure + ' ' + profile.identite_assure.prenom_assure, 110, 663, 8)
  drawText(profile.identite_assure.num_immat.sex, 146, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_year[0], 159, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_year[1], 172, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_month[0], 185, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_month[1], 198, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_department[0], 211, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_department[1], 224, 643, 8)
  drawText(profile.identite_assure.num_immat.code_commune[0], 237, 643, 8)
  drawText(profile.identite_assure.num_immat.code_commune[1], 250, 643, 8)
  drawText(profile.identite_assure.num_immat.code_commune[2], 263, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_num_order[0], 276, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_num_order[1], 289, 643, 8)
  drawText(profile.identite_assure.num_immat.birth_num_order[2], 302, 643, 8)
  drawText(profile.identite_assure.num_immat.control_key[0], 322, 643, 8)
  drawText(profile.identite_assure.num_immat.control_key[1], 335, 643, 8)

  //Nationalité et adresse habituelle de l'assuré(e)

  drawText(profile.identite_assure.nationalite.fr[0], 141, 616, 8)
  drawText(profile.identite_assure.nationalite.ressortissant[0], 287, 616, 8)
  drawText(profile.identite_assure.nationalite.autre[0], 357, 616, 8)
  drawText(profile.identite_assure.nationalite.autre_precision, 405, 616, 8)
  drawText(profile.identite_assure.adresse.rue, 112, 602, 8)
  drawText(profile.identite_assure.adresse.code_postal[0], 106, 588, 8)
  drawText(profile.identite_assure.adresse.code_postal[1], 119, 588, 8)
  drawText(profile.identite_assure.adresse.code_postal[2], 132, 588, 8)
  drawText(profile.identite_assure.adresse.code_postal[3], 145, 588, 8)
  drawText(profile.identite_assure.adresse.code_postal[4], 158, 588, 8)
  drawText(profile.identite_assure.adresse.commune, 210, 588, 8)
  drawText(profile.identite_assure.adresse.email, 420, 588, 8)


  //Situation administrative de l'assuré(e)

  drawText(profile.situation.salarie, 185, 562, 8)
  drawText(profile.situation.retraite, 356, 562, 8)
  drawText(profile.situation.etudiant, 482, 562, 8)
  drawText(profile.situation.chaumeur, 235, 549, 8)
  drawText(profile.situation.autre, 356, 549, 8)
  drawText(profile.situation.precision, 405, 549, 8)

  //Caractèristiques du séjour à l'étranger 
  drawText(profile.caracteristique_sejour.adresse, 185, 523, 8)
  drawText(profile.caracteristique_sejour.localite, 90, 509, 8)
  drawText(profile.caracteristique_sejour.pays, 405, 509, 8)
  drawText(profile.caracteristique_sejour.dates.du[0], 135, 496, 8)
  drawText(profile.caracteristique_sejour.dates.du[1], 148, 496, 8)
  drawText(profile.caracteristique_sejour.dates.du[3], 161, 496, 8)
  drawText(profile.caracteristique_sejour.dates.du[4], 174, 496, 8)
  drawText(profile.caracteristique_sejour.dates.du[6], 187, 496, 8)
  drawText(profile.caracteristique_sejour.dates.du[7], 200, 496, 8)
  drawText(profile.caracteristique_sejour.dates.du[8], 213, 496, 8)
  drawText(profile.caracteristique_sejour.dates.du[9], 226, 496, 8)
  drawText(profile.caracteristique_sejour.dates.au[0], 275, 496, 8)
  drawText(profile.caracteristique_sejour.dates.au[1], 288, 496, 8)
  drawText(profile.caracteristique_sejour.dates.au[3], 301, 496, 8)
  drawText(profile.caracteristique_sejour.dates.au[4], 314, 496, 8)
  drawText(profile.caracteristique_sejour.dates.au[6], 327, 496, 8)
  drawText(profile.caracteristique_sejour.dates.au[7], 340, 496, 8)
  drawText(profile.caracteristique_sejour.dates.au[8], 353, 496, 8)
  drawText(profile.caracteristique_sejour.dates.au[9], 366, 496, 8)
  drawText(profile.caracteristique_sejour.motif.conges_payes, 235, 482, 8)
  drawText(profile.caracteristique_sejour.motif.tourisme, 301, 482, 8)
  drawText(profile.caracteristique_sejour.motif.detachement, 428, 482, 8)
  drawText(profile.caracteristique_sejour.motif.etudes, 530, 482, 8)

  //Motif de recours aux soins 
  drawText(profile.motif_soins, 70, 455, 8)

  //Nature des soins et montant des dépenses
    // Soin reçus en rapport avec :
  drawText(profile.nature_soins.rapport.maladie, 93, 412, 8)
  drawText(profile.nature_soins.rapport.affection_longue_duree, 193, 412, 8)
  drawText(profile.nature_soins.rapport.maternite, 246, 412, 8)
  drawText(profile.nature_soins.rapport.accident_travail, 411, 412, 8)
  drawText(profile.nature_soins.rapport.date[0], 441, 412, 8)
  drawText(profile.nature_soins.rapport.date[1], 454, 412, 8)
  drawText(profile.nature_soins.rapport.date[3], 467, 412, 8)
  drawText(profile.nature_soins.rapport.date[4], 480, 412, 8)
  drawText(profile.nature_soins.rapport.date[6], 493, 412, 8)
  drawText(profile.nature_soins.rapport.date[7], 506, 412, 8)
  drawText(profile.nature_soins.rapport.date[8], 519, 412, 8)
  drawText(profile.nature_soins.rapport.date[9], 532, 412, 8)
  drawText(profile.nature_soins.rapport.accident_tiers, 160, 396, 8)
  drawText(profile.nature_soins.rapport.date_accident_tiers[0], 196, 397, 8)
  drawText(profile.nature_soins.rapport.date_accident_tiers[1], 209, 397, 8)
  drawText(profile.nature_soins.rapport.date_accident_tiers[3], 222, 397, 8)
  drawText(profile.nature_soins.rapport.date_accident_tiers[4], 235, 397, 8)
  drawText(profile.nature_soins.rapport.date_accident_tiers[6], 248, 397, 8)
  drawText(profile.nature_soins.rapport.date_accident_tiers[7], 261, 397, 8)
  drawText(profile.nature_soins.rapport.date_accident_tiers[8], 274, 397, 8)
  drawText(profile.nature_soins.rapport.date_accident_tiers[9], 287, 397, 8)
  drawText(profile.nature_soins.rapport.soin_deja_prevu_oui, 473, 397, 8)
  drawText(profile.nature_soins.rapport.soin_deja_prevu_non, 522, 397, 8)

      // Détail des soins :

        // Soins ambulatoires
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.consultation_cabinet, 167, 353, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.deplacement_medecin, 142, 342, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.medecin_generaliste, 290, 348, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.medecin_specialiste, 360, 348, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.tarif_medecin, 500, 348, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.soin_dentaire, 167, 328, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.soin_dentaire_precision, 270, 327, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.soin_dentaire_tarif, 500, 327, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.protese_dentaire, 142, 315, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.protese_dentaire_tarif, 500, 315, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.chirurgie_ambulatoire, 167, 304, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.chirurgie_ambulatoire_precision, 270, 304, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.chirurgie_ambulatoire_tarif, 500, 304, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.pharmacie, 142, 292, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.pharmacie_tarif, 500, 292, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.examen_labo, 167, 280, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.examen_labo_tarif, 500, 280, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.radiologie, 142, 268, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.radiologie_precision, 280, 268, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.radiologie_tarif, 500, 268, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.kine, 167, 257, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.kine_tarif, 500, 257, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.infirmier, 142, 246, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.infirmier_tarif, 500, 246, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.autres_soins, 167, 234, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.autres_soins_precision, 270, 234, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.autres_soins_tarif, 500, 234, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation, 142, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_du[0], 177, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_du[1], 190, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_du[3], 203, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_du[4], 216, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_du[6], 229, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_du[7], 242, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_du[8], 255, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_du[9], 268, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_au[0], 316, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_au[1], 329, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_au[3], 342, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_au[4], 355, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_au[6], 368, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_au[7], 381, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_au[8], 394, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_date_au[9], 407, 219, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_precision, 250, 207, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.hospitalisation_tarif, 500, 207, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.frais_transport, 142, 194, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.frais_transport_precision, 260, 194, 8)
  drawText(profile.nature_soins.detail_soins.soin_ambulatoire.frais_transport_tarif, 500, 194, 8)


  //Soins reçus dans l'UE
  drawText(profile.nature_soins.detail_soins.soins_recus_ue.remboursement_pays_sejour, 128, 160, 8)
  drawText(profile.nature_soins.detail_soins.soins_recus_ue.remboursement_pays_france, 211, 160, 8)
  drawText(profile.nature_soins.detail_soins.soins_recus_ue.remboursement_partiel_oui, 317, 145, 8)
  drawText(profile.nature_soins.detail_soins.soins_recus_ue.remboursement_partiel_non, 363, 145, 8)


  //Attestation sur l'honneur
  drawText(profile.nature_soins.attestation_honneur.montant_total, 268, 110, 8)
  drawText(profile.nature_soins.attestation_honneur.fait_a, 77, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.date[0], 164, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.date[1], 177, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.date[3], 190, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.date[4], 203, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.date[6], 216, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.date[7], 229, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.date[8], 242, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.date[9], 255, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.signature, 390, 89, 8)
  drawText(profile.nature_soins.attestation_honneur.impossibilite_signature, 529, 89, 8)


  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save()


  //Save PDF document in cloud"
  pdfUpload(pdfBytes)




  // Trigger the browser to download the PDF document
  download(pdfBytes, "cerfa_auto_filled.pdf", "application/pdf");
//   return new Blob([pdfBytes], { type: 'application/pdf' })

}


  export default generatePdf;