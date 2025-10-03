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

    return (
        <div className="form-container">
            <form action="" onSubmit={handleSubmit}>
                <label className="form-section-title">Inserisci il nome dell'autore</label>
                <textarea  className='small-form-field-box' 
                    name='author'
                    value={formData.author}
                    onChange={handleFormData}
                />
                <label className="form-section-title">Inserisci il titolo del post</label>
                <textarea  className='medium-form-field-box' 
                    name='title'
                    value={formData.title}
                    onChange={handleFormData}
                />
                <label className="form-section-title">Inserisci il contenuto del post</label>
                <textarea  className='big-form-field-box' 
                    name='body'
                    value={formData.body}
                    onChange={handleFormData}
                />
                <h2 className='form-section-title'>Pubblico o Bozza</h2>
                <select className='select-input-box' name="public" id="public" onChange={handleFormData}>
                    <option value="true">Pubblico</option>
                    <option value="false">Bozza</option>
                </select>
                <button className='btn' type="submit">Inserisci</button>
            </form>
        </div>
    )

}