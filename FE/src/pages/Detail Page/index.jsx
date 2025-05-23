import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { RequestContext } from "../../context/RequestProvider";

function DetailPage() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { url } = useContext(RequestContext);

  async function getElementById(url, id) {
    try {
      const res = await fetch(url + id);
      const data = await res.json();
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
   getElementById(url,id)
  }, [])
  
  return (
    <>
      <title>Detail Page</title>
      <div className="card" key={detail._id}>
            <div className="card_image">
              <img src={detail.image} alt="chair" />
            </div>
            <div className="card_title">
              <div className="card_name">{detail.name}</div>
              <div className="card_name">{detail.price}</div>
            </div>
          </div>
    </>
  );
}

export default DetailPage;
