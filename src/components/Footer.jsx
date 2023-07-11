import kasaWithe from '../assets/logo/LOGO-b&w.png'
import '../styles/footer.css' 

const Footer = () => {
    return (
        <footer className='footer-block'>
            <img src={kasaWithe} className='footer__logo'/>
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer