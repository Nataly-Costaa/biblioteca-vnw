import S from "./quero_doar.module.scss"
import bookOpen from "../../assets/img/Frame.png";

import { useState } from "react";
import axios from "axios";

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [autor, setAutor] = useState("");
    const [imagem_url, setImagem] = useState("");

    const enviarDados = async () => {
        const urlApi = "https://api-livros-vnw-75sm.onrender.com/doar";

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar);

        alert("Livro Enviado!");

        setTitulo("");
        setCategoria("");
        setAutor("");
        setImagem("");
    }

   

    const capturaTitulo = (e) => {
        setTitulo(e.target.value);
        console.log(e.target.value);
    };
    const capturaCategoria = (e) => {
        setCategoria(e.target.value);
    };
    const capturaAutor = (e) => {
        setAutor(e.target.value);
    };
    const capturaImagem = (e) => {
        setImagem(e.target.value);
    };

    return (
        <main>
            <section id={S.container2}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

                <div id={S.infoBook}>
                    <div id={S.titleForm}>
                        <img src={bookOpen} alt="Logo com o formato de um livro aberto" />
                        <p>Informações do Livro</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" name="title" placeholder="Titulo" onChange={capturaTitulo} value={titulo}/>
                        <input type="text" name="category" placeholder="Categoria" onChange={capturaCategoria} value={categoria}/>
                        <input type="text" name="author" placeholder="Autor" onChange={capturaAutor} value={autor}/>
                        <input type="text" name="linkImg" placeholder="Link da imagem" onChange={capturaImagem} value={imagem_url}/>

                        <button onClick={enviarDados}>Doar</button>
                    </form>
                </div>
            </section>
        </main>
    );
};
