import styleAbout from './About.module.scss'
import webdevPhoto from './../../images/webdev.jpg'
import { useSelector } from 'react-redux'

const About = () => {

    let about = useSelector(state => state.appReducer.about)

    return(
        <div className={styleAbout.about}>
            <div>
                <img className={styleAbout.about__photo} src={webdevPhoto} />
            </div>
            <div className={styleAbout.about__text}>
                <div className={styleAbout.about__text_pretitle}>
                    {about.pretitle}
                </div>
                <div className={styleAbout.about__text_title}>
                    {about.title}
                </div>
                <div className={styleAbout.about__text_description}>                    
                    {about.description}
                </div>
            </div>
        </div>
    )
}

export default About