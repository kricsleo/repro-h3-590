export default defineEventHandler(async (event) => {
  return `
  <form method="POST" action="/api/uploadFile" enctype="multipart/form-data">
  <input type="file" name="file" />
  <button> upload </button>
  </form>
  `
})