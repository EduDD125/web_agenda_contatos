import Agenda from "../components/agenda";
import Footer from "../components/footer";
import Header from "../components/header";

export default function UserArea() {
    return (
        <div>
            <Header text={"Área do Usuário"}/>
            <Agenda />
            <Footer text={"Agenda Virtual"} />
        </div>
    );
}