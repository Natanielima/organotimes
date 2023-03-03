import './Rodape.css'
import{FaGithub} from 'react-icons/fa'
import{FaLinkedin} from 'react-icons/fa'
import{FaInstagram} from 'react-icons/fa'
import{FaPinterest} from 'react-icons/fa'
import{FaTiktok} from 'react-icons/fa'
const Rodape = ()=>{

    return(
        <div className='rodape'>
            <div className='redesSociais'>
            <a href="https://github.com/Natanielima" target="_blank"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/cicero-nataniel-lima-de-pinho-1711361b8/" target="_blank"><FaLinkedin/></a>
            <a href="https://www.instagram.com/nataniellima/" target="_blank"><FaInstagram/></a>
            <a href="https://br.pinterest.com/cicero_12_/" target="_blank"><FaPinterest/></a>
            <a href="https://www.tiktok.com/@nataniellimaa" class="icones" target="_blank"><FaTiktok/></a>
            </div>
            <h1> © Nataniel Lima © 2023</h1>
        </div>
        
    )

}

export default Rodape