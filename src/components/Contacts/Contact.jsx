import styleContact from './Contact.module.scss'
import visitIcon from './../../images/visitIcon.png'
import { useSelector } from 'react-redux'

const Contact = () => {

    let contact = useSelector(state => state.appReducer.contact)

    return(
        <div className={styleContact.contact}>
            <div className={styleContact.contact_title}>
                {contact.title}
            </div>
            <div className={styleContact.contact_subtitle}>
                {contact.subtitle}
            </div>
            <a href='https://senchurov.kondrat@gmail.com'><div className={styleContact.contact__mail}>
                <div className={styleContact.contact_mail_text}>{contact.link}</div>
                <div><img className={styleContact.contact_mail_img} src={visitIcon} /></div>
            </div></a>
            <div className={styleContact.contact__line}></div>
        </div>  
    )
}

export default Contact