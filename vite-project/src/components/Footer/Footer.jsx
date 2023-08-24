
import './Footer.scss'
import CartWidget from '../CartWidget/CartWidget'
export const Footer = () => {

    return (
        <footer className="footer bg-blue-400">
            <div className="footer__container">
                <h1 className="footer__logo">"Todos cantan, todos se abrazan, todos corren, todos lloramos. La selección ganó la final y puso otra vez al fútbol argentino como el mejor del mundo. Un día del que no nos olvidaremos por el resto de nuestras vidas".
    Copyright © 2022. Asociación del Fútbol Argentino. Todos los derechos reservados a Alejandro Timpano.</h1>
                <CartWidget />
            </div>
        </footer>
    )
}