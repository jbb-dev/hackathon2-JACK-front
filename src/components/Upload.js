import React, { useState } from "react";
import "./Upload.css";

function Uploads() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Hackaton");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbmdqdua8/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  };
  return (
    <div className="upload_page">
      <h1>Téléchargez le document correspondant:</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Chargement...</h3>
      ) : (
        <img src={image} alt={""} style={{ width: "200px" }} />
      )}
      <div>
        <button className="upload_button">Valider le document</button>
      </div>
    </div>
  );
}

export default Uploads;
