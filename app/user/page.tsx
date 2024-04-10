import axios from "axios";

async function fetchData() {
    const response = await axios.get("http://localhost:3000/api/user")
    
    await new Promise(r=>setTimeout(r,3000))
    console.log("Response is " + JSON.stringify(response.data))
    return response.data;
}

//imp to note that loading makes sense only when await async is used for fetching
export default async function Home() {
    const userData = await fetchData();

    return (
        <div >
            <div>
                Name: {userData?.name}
            </div>
            {userData?.email}
        </div>
    );
}
