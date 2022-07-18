import React,{useState,useEffect} from 'react';
import ViewUsers from '../../view/Admin/ViewUsers';
import { axiosPrivate } from '../../Api/AxiosConfig';

const ViewAgenciesController=()=>{

        const [details,setDetails]=useState([]);
        const fetchDetails = async() => {

        const {data} = await axiosPrivate.get("/agencies");
        console.log("TMS Agency: ",data);
        setDetails(data);

      };

    useEffect(() => {
    fetchDetails()
    }, []);

    console.log(details);
    return(
        <div>
            <ViewUsers detail={details}/>
        </div>
    )

}


export default ViewAgenciesController;