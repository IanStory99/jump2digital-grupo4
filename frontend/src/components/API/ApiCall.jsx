import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/todos";

const ReqStatus = {
  INITIAL: "INITIAL",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  LOADING: "LOADING",
};

export default function ApiCall() {
  const [data, setData] = useState();
  const [reqStatus, setReqStatus] = useState(ReqStatus.LOADING);

  useEffect(() => {
    setReqStatus(ReqStatus.LOADING);
    fetch(url)
      .then((response) => response.json())
      .then((elem) => {
        setData(elem.slice(0, 50)); //PRIMEROS 50 OBJETOS
        setReqStatus(ReqStatus.SUCCESS);
      })
      .catch((e) => {
        console.log(e);
        setReqStatus(ReqStatus.FAILURE);
      });
  }, []);

  console.log("DATA", data);
  console.log("REQ", reqStatus);

  return (
    <div>
      {reqStatus === ReqStatus.LOADING ? (
        <p>LOADING...</p>
      ) : (
        data.map((data) => (
          <div key={data.id}>
            <ul>
              <li>userId: {data.userId}</li>
              <li>id: {data.id}</li>
              <li>title: {data.title}</li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
