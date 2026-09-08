import supabase from "../config/supabaseConfig";

const getCoreTeam = async () => {
  const { data, error } = await supabase
    .from("core_team")
    .select("*")
    .order("order", { ascending: true });

  if (error) {
    console.error("Failed to fetch core team:", error.message);
    return [];
  }
  return data || [];
};

export default getCoreTeam;