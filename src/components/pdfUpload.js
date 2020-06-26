const PdfUpload = async (docPDF) => {

      const files = docPDF;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "Hackaton");

      const res = await fetch(
          "https://api.cloudinary.com/v1_1/dbmdqdua8/image/upload",
          {
            method: "POST",
            body: data,
          }
        )
      const file = await res.json()

      console.log(file)

      return(file.secure_url)

}


export default PdfUpload
