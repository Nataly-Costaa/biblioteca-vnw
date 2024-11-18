import S from "./inicio.module.scss";

export default function inicio() {
    return (
        <main id={S.pageInicio}>
            <article>
                <div id={S.boxText1}>
                    <p id={S.text1}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
                </div>
            </article>

            <section>
                <h2>Por que devo doar?</h2>
            </section>
        </main>
    );
};
