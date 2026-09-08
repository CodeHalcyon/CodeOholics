import { put } from "@vercel/blob";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const pathname = req.query.pathname;
  if (!pathname) {
    return res.status(400).json({ error: "Missing pathname query param" });
  }

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const buffer = Buffer.concat(chunks);

    const blob = await put(pathname, buffer, {
      access: "public",
      addRandomSuffix: true,
      contentType: req.headers["content-type"] || "application/octet-stream",
    });

    return res.status(200).json({ url: blob.url, pathname: blob.pathname });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}