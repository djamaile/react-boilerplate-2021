import { useQuery, UseQueryResult } from "react-query";
import request from "../api/request"; 

const getData = async () => {
    const { data } = await request("GET", "/data", {});
    return data;
}

export default function useData<Type>(): UseQueryResult<Type, Type>{
    return useQuery("data", getData);
}