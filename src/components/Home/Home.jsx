import styleHome from './Home.module.scss'
import githubIcon from './../../images/github-icon.png'
import htmlIcon from './../../images/html.png'
import cssIcon from './../../images/css.png'
import jsIcon from './../../images/js.png'
import tsIcon from './../../images/ts.png'
import reactIcon from './../../images/react.png'
import sassIcon from './../../images/sass.png'
import wordpressIcon from './../../images/wordpress.png'
import { useSelector } from 'react-redux'

const Home = () => {

    let home = useSelector(state => state.appReducer.home)

    return(
        <div className={styleHome.home}>
            <div className={styleHome.home__main}>
                <div className={styleHome.home__main_title}>
                    {home.title}
                </div>
                <div className={styleHome.home__main_subtitle}>
                    {home.subtitle}
                </div>
                <div className={styleHome.home__main_links}>
                    <a href='https://github.com/Keglya00'><img className={styleHome.home__links_img} src={githubIcon} /></a>
                </div>
                <div className={styleHome.home__main_stack}>
                    <span className={styleHome.home__stack_title}> Tech Stack</span>
                    <span className={styleHome.home__stack_slash}> |</span>
                    <span><img  className={styleHome.home__stack_item} src={htmlIcon} /></span>
                    <span><img className={styleHome.home__stack_item} src={cssIcon} /></span>
                    <span><img className={styleHome.home__stack_item} src={jsIcon} /></span>
                    <span><img className={styleHome.home__stack_item} src={reactIcon} /></span>
                    <span><img className={styleHome.home__stack_item} src={wordpressIcon} /></span>
                </div>
            </div>
        </div>
    )
}

export default Home