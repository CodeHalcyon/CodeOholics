const slugify = (str) =>
  String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60) || "image";

export const eventImageFolder = (title, date) => {
  const year = date ? new Date(date).getFullYear() : new Date().getFullYear();
  return `events/${year}/${slugify(title)}`;
};

export const teamImageFolder = (year) =>
  `core_team/${year || new Date().getFullYear()}`;

const uploadToBlob = async (file, folder) => {
  const ext = (file.name.split(".").pop() || "bin").toLowerCase();
  const pathname = `${folder}/${Date.now().toString(36)}.${ext}`;

  const res = await fetch(`/api/upload?pathname=${encodeURIComponent(pathname)}`, {
    method: "POST",
    headers: { "Content-Type": file.type || "application/octet-stream" },
    body: file,
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json?.error || "Upload failed");
  return json.url;
};

export default uploadToBlob;