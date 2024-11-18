import S from "./header.module.scss"
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";

export default function header() {
    return (
        <header>
            <div id={S.logo}>
                <Link to="/" id={S.boxLogo}>
                    <img src={logo} alt="Logo livro aberto" />
                    <h1 className={S.titulo}>Livros Vai na Web </h1>
                </Link>
            </div>

            <nav id={S.navigation}>
                <ul>
                    <li><Link to="/" className={S.links}>Início</Link></li>
                    <li><Link to="/livrosDoados" className={S.links}>Livros Doados</Link></li>
                    <li><Link to="/queroDoar" className={S.links}>Quero Doar</Link></li>
                </ul>
            </nav>

            <section className={S.searchContainer}>
                <div id={S.box}>
                    <input type="text" id={S.searchInput} placeholder="O que você procura?"/>
                
                    <button id={S.searchButton}>
                        <img src={search} alt="Lupa de pesquisa" />
                    </button>
                </div>
            </section>
        </header>
    );
};
