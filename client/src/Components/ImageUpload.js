
import React , { useState, useEffect} from "react";
import axios from "axios";

function ImageUpload(props) {

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    // const [data, setData] = useState();
    const [data, setData] = useState({class:"", confidence: ""});
    const [image, setImage] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [isData, setIsData] = useState(false);
    

    const sendFile = async () => {
      
      setIsData(false);

      if (image) {
        let formData = new FormData();
        formData.append("file", selectedFile);
        // console.log(data)
        const port = "8000";
        const urlhost = `http://localhost:${port}/api`;

        setIsloading(true);
        let res = await axios({
          method: "post",
          url: `${urlhost}/${props.title}`,
          data: formData,
        });

        if (res.status === 200) {
          const confidence = (parseFloat(res.data.confidence) * 100).toFixed(3);
          setData({class: res.data.class, confidence: confidence});
          setIsData(true);

          // console.log(data);
        }
        setIsloading(false);

      }
    }
  
    const clearData = () => {
      setData({class:"", confidence: ""});
      setImage(false);
      setSelectedFile(null);
      setPreview(null);
      setIsData(false);
    };  

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        // console.log({preview})
        setData({class:"", confidence: ""});
        setImage(true);
    }

  return (
    <div className="container my-4">
      <div className="card" style = {{height : 20 + 'rem', width : 20 + 'rem', margin: "auto"}}>
        <img src= {(selectedFile) ? preview : "../leaf.png"} className="card-img-top" alt="Failed to load " style = {{height : 20 + 'rem', width : 20 + 'rem'}}/>
        
      </div>
      <hr />
      <div className="mb-3 container my-2">
        
        <input className="form-control" type="file" id="formFile" onChange={onSelectFile} />
      </div>
      <div className="container text-center" >
        <button className="btn btn-outline-success btn-lg mx-3" disabled= {!selectedFile} onClick={sendFile} >PREDICT</button>
        <button className="btn btn-outline-danger btn-lg mx-3" onClick={clearData} >CLEAR</button>
      </div>
      <div className={`container text-center my-4 ${(isLoading)? "" : "d-none"}`}>
      <div className="spinner-border text-success" role="status">        
      </div>
      <h5 className="text-center text-success">Examining...</h5>
      </div>
      <div className={`container text-center my-3 ${(isData)? "" : "d-none"}`} style={{ backgroundColor: "whitesmoke" }} >
        <h2>{data.class}</h2>
        <h2>CONFIDENCE : {data.confidence}</h2>
      </div>

    </div>
  );
}

export default ImageUpload;
