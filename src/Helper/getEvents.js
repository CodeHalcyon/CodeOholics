import supabase from "../config/supabaseConfig";

const getEvents = async () => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: false, nullsFirst: true });

  if (error) {
    console.error("Failed to fetch events:", error.message);
    return [];
  }
  return data || [];
};

export default getEvents;