import S from "./footer.module.scss";
import facebook from "../../assets/img/facebook-app-round-white-icon.png";
import twitter from "../../assets/img/Twitter_Logo_WhiteOnImage.png";
import youtube from "../../assets/img/youtube-app-white-icon.png";
import linkedin from "../../assets/img/linkedin-icon.png";
import instagram from "../../assets/img/instagram-white-icon.png";

export default function footer() {
    return (
        <footer>
            <section id={S.contacts}>
                <p id={S.number}>4002-8922</p>

                <nav id={S.networks}>
                    <img src={facebook} alt="Logo facebook" />
                    <img src={twitter} alt="Logo twitter" />
                    <img src={youtube} alt="Logo youtube" />
                    <img src={linkedin} alt="Logo linkedin" />
                    <img src={instagram} alt="Logo instagram" />
                </nav>
            </section>

            <section id={S.text3}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    );
};
