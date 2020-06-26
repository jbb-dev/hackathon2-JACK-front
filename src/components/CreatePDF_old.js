import React, {useState, useEffect} from 'react';
import generatePDF, {profile} from './generatePDF.js';
import Axios from 'axios';
import test from './test'


const GeneratePDF_old = (props) => {

    const [dataProfile, setDataProfile] = useState({})
    const [dataForm, setDataForm] = useState(props.formData)


    useEffect(()=> {
        const getDataFromProfile = () => {
            Axios
                .get(`http://localhost:3001/users`)
                .then (res => setDataProfile(res))
                .catch(err => console.error(err))
                .finally(console.log(profile))
                }
    },[])

    return(
        <>
        <h1>Test</h1>
        <button onClick={() => generatePDF()}>clic</button>
        </>
    )
}

export default GeneratePDF_old;