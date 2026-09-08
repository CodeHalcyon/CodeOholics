import supabase from "../config/supabaseConfig";

const getOpportunities = async () => {
  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .order("order", { ascending: true });

  if (error) {
    console.error("Failed to fetch opportunities:", error.message);
    return [];
  }
  return (data || []).map((o) => ({
    id: o.id,
    title: o.title,
    description: o.description || "",
    date: o.date || "",
    location: o.location || "",
    applyLink: o.apply_link,
    status: o.is_open,
  }));
};

export default getOpportunities;