import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'
import { put } from '@vercel/blob'
import { Buffer } from 'node:buffer'

dotenv.config()

const handleUpload = async (req) => {
  const url = new URL(req.url, 'http://localhost')
  const pathname = url.searchParams.get('pathname')
  if (!pathname) throw new Error('Missing pathname query param')

  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const buffer = Buffer.concat(chunks)

  const blob = await put(pathname, buffer, {
    access: 'public',
    addRandomSuffix: true,
    contentType: req.headers['content-type'] || 'application/octet-stream',
  })

  return { url: blob.url, pathname: blob.pathname }
}

const devUploadApi = () => ({
  name: 'dev-upload-api',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (!req.url || !req.url.startsWith('/api/upload')) return next()
      if (req.method !== 'POST') {
        res.statusCode = 405
        res.end('Method not allowed')
        return
      }
      try {
        const result = await handleUpload(req)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(result))
      } catch (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: error.message }))
      }
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), devUploadApi()],
})