import 'dotenv/config'
import express from 'express'

const app = express()

try {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`))
} catch (e) {
  console.log(e)
}
