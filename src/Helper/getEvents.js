import supabase from "../config/supabaseConfig";
const getEvents = async () => {
    const {data,error} = await supabase.from("events").select("*")
    if(error) console.log(error);
    else console.log(data);
    return data
}
export default getEvents