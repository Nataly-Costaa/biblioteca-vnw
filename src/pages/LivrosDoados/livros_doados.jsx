import S from "./livros_doados.module.scss";
import book1 from "../../assets/img/book_harry_potter.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function LivrosDoados() {

    const [livros, setLivros] = useState([]);

    const getLivros = async () => {
        const response = await axios.get("https://api-livros-vnw-75sm.onrender.com/livros");
        setLivros(response.data);
    }

    useEffect(() => {
        getLivros()
    },[]);

    return (
        <main id={S.pageLivrosDoados}>
            <h2>Livros doados</h2>

            <section id={S.container3}>
                <div className={S.cardBooks}>
                    <img src={book1} alt="Livro do Harry Potter" />

                    <div id={S.bookInfo}>
                        <p id={S.nameBook}>Harry Potter e a Pedra Filosofal</p>
                        <p>J.K. Rowling</p>
                        <p>Fantasia</p>
                    </div>
                </div>

                {livros.map((livro, index) => (
                    <div key={index} className={S.cardBooks}>
                        <img src={livro.imagem_url} alt={livro.titulo} />
                        <div id={S.bookInfo}>
                            <p id={S.nameBook}>{livro.titulo}</p>
                            <p>{livro.autor}</p>
                            <p>{livro.categoria}</p>
                        </div>
                    </div>
                ))}

            </section>
        </main>
    );
};