import S from "./livros_doados.module.scss";
import book1 from "../../assets/img/book_harry_potter.png";

export default function livros_doados() {
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
            </section>
        </main>
    );
};