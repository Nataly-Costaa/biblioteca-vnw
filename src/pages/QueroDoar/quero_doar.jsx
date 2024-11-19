import S from "./quero_doar.module.scss"
import bookOpen from "../../assets/img/Frame.png";

export default function livros_doados() {
    return (
        <main>
            <section id={S.container2}>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

                <div id={S.infoBook}>
                    <div id={S.titleForm}>
                        <img src={bookOpen} alt="Logo com o formato de um livro aberto" />
                        <p>Informações do Livro</p>
                    </div>

                    <form>
                        <input type="text" name="title" placeholder="Titulo" />
                        <input type="text" name="category" placeholder="Categoria" />
                        <input type="text" name="author" placeholder="Autor" />
                        <input type="text" name="linkImg" placeholder="Link da imagem" />

                        <button>Doar</button>
                    </form>
                </div>
            </section>
        </main>
    );
};
