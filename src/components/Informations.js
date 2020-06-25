import React from "react";
import "./informations.css";
import { Link } from "react-router-dom";
import Header from "./Header";

const Informations = () => {
  return (
    <>
      <Header title="Informations" />
      <div className="informations_page">
        <div>
          Et prima post Osdroenam quam, ut dictum est, ab hac descriptione
          discrevimus, Commagena, nunc Euphratensis, clementer adsurgit,
          Hierapoli, vetere Nino et Samosata civitatibus amplis inlustris.
          Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non
          probes eius, a quo dissentias. quid enim me prohiberet Epicureum esse,
          si probarem, quae ille diceret? cum praesertim illa perdiscere ludus
          esset. Quam ob rem dissentientium inter se reprehensiones non sunt
          vituperandae, maledicta, contumeliae, tum iracundiae, contentiones
          concertationesque in disputando pertinaces indignae philosophia mihi
          videri solent. Ciliciam vero, quae Cydno amni exultat, Tarsus
          nobilitat, urbs perspicabilis hanc condidisse Perseus memoratur, Iovis
          filius et Danaes, vel certe ex Aethiopia profectus Sandan quidam
          nomine vir opulentus et nobilis et Anazarbus auctoris vocabulum
          referens, et Mopsuestia vatis illius domicilium Mopsi, quem a
          conmilitio Argonautarum cum aureo vellere direpto redirent, errore
          abstractum delatumque ad Africae litus mors repentina consumpsit, et
          ex eo cespite punico tecti manes eius heroici dolorum varietati
          medentur plerumque sospitales.
        </div>
        <Link to="/register">
          <button type="button" className="pass-button">
            Passer
          </button>
        </Link>
      </div>
    </>
  );
};
export default Informations;
