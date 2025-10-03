import { useState } from 'react'


export default function NewArticleForm() {
    const Endpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: null
    })

    function handleFormData(e) {
        console.log(formData)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(Endpoint, formData)
            .then(res => console.log("dati inviati", res.data))
            .catch(error => console.log(error))
    }

    return(
        <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
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
          <button type="submit">Invia Form</button>
        </form>
      </div>
    )

}