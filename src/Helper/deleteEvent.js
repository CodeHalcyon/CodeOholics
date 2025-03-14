import supabase from "../config/supabaseConfig";

const deleteEvent = async (id) => {
  try {
    const { data, error } = await supabase.from("events").delete().eq("id", id);

    if (error) {
      console.error("Error deleting event:", error.message);
      return null;
    }

    console.log("Event deleted:", data);
    return data; // Return deleted data (optional)
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};

export default deleteEvent;
