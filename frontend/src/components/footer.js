export default function Footer({text}) {

    const footerStyle = {
        backgroundColor: "#282c34",
        color: 'white',
        textAlign: 'center',
        padding: '1em 0',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%'
    }

    return(
        <>
            <footer style={footerStyle}>
                <p>&copy; {new Date().getFullYear()} {text}, Todos os direitos reservados</p>
            </footer>
        </>
    );
};