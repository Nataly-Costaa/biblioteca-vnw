import S from "./inicio.module.scss";
import community from "../../assets/img/community.png";
import reading from "../../assets/img/reading.png";
import transform from "../../assets/img/transform.png";
import balance from "../../assets/img/balance.png";

export default function inicio() {
    return (
        <main id={S.pageInicio}>
            <article id={S.banner}>
                <div id={S.boxText1}>
                    <p id={S.text1}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
                </div>
            </article>

            <section id={S.container1}>
                <div id={S.text2}>
                    <h2>Por que devo doar?</h2>
                </div>

                <div id={S.boxCards}>
                    <article className={S.cards}>
                        <img src={community} alt="Logo do card sibolizando uma comunidade" />

                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>

                    <article className={S.cards}>
                        <img src={reading} alt="Logo do card sibolizando leitura" />

                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>

                    <article className={S.cards}>
                        <img src={transform} alt="Logo do card sibolizando transformação" />

                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>

                    <article className={S.cards}>
                        <img src={balance} alt="Logo do card sibolizando uma balança" />

                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </div>
            </section>
        </main>
    );
};
