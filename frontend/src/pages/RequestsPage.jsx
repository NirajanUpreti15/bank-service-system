import { useEffect, useState } from "react";
import api from "../services/api";


function RequestsPage() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {

        api.get("/requests/")
            .then((response) => {
                setRequests(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);


    return (
        <div>

            <h1>Service Requests</h1>

            {requests.map((request) => (

                <div key={request.id}>

                    <h3>{request.title}</h3>

                    <p>
                        {request.description}
                    </p>

                    <p>
                        Status: {request.status}
                    </p>

                    <p>
                        Priority: {request.priority}
                    </p>

                </div>

            ))}

        </div>
    );
}


export default RequestsPage;