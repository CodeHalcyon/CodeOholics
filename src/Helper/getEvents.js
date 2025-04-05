import supabase from "../config/supabaseConfig";

const getEvents = async () => {
    const { data, error } = await supabase
        .from("events")
        .select("*")
        .order('date', { ascending: false });
    
    if (error) console.log(error);
    else console.log(data);
    
    return data;
}

export default getEvents;