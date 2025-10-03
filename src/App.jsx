
import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: null
  })

  function handleFormData(e){
    console.log(formData)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form action="">
        <input type="text"
          name='author'
          value={formData.author}
          onChange={handleFormData}
          placeholder="inserisci il nome dell'autore"
        />
        <input type="text"
          name='title'
          value={formData.title}
          onChange={handleFormData}
          placeholder='Inserisci il titolo del post'
        />
        <input type="text"
          name='body'
          value={formData.body}
          onChange={handleFormData}
          placeholder='Inserisci il contenuto del post'
        />

        <select name="public" id="public" onChange={handleFormData}>
          <option value="true">Pubblico</option>
          <option value="false">Bozza</option>
        </select>
      </form>
    </>
  )
}

export default App
