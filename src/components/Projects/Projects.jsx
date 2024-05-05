import styleProjects from './Projects.module.scss'
import snImg from './../../images/social-network.png'
import githubIcon from './../../images/github-icon.png'
import visitIcon from './../../images/visitIcon.png'
import { useSelector } from 'react-redux'

const Projects = (props) => {

    let projects = useSelector(state => state.appReducer.projects)

    return(
        <div className={styleProjects.projects}>
            <div className={styleProjects.projects__pretitle}>{projects.pretitle}</div>
            <div className={styleProjects.projects__title}>
                {projects.title}
            </div>
            <div className={styleProjects.projects__card}>
                <div><img className={styleProjects.projects__card_img} src={snImg} /></div>
                <div className={styleProjects.projects__card_text}>
                    <div className={styleProjects.projects__text_title}>
                        <div className={styleProjects.projects__title_text}>{projects.projects[0].title}</div>
                        <div className={styleProjects.projects__title_img}></div>
                    </div>
                    <div className={styleProjects.projects__text_description}>
                        {projects.projects[0].description}
                    </div>
                    <div className={styleProjects.projects__text_stack}>
                        <span className={styleProjects.projects__stack_item}>{projects.projects[0].stack.UI}</span>
                        <span className={styleProjects.projects__stack_item}>{projects.projects[0].stack.style}</span>
                    </div>
                    <div className={styleProjects.projects__text_links}>
                        <a href='https://github.com/Keglya00/social-network'><span className={styleProjects.projects__link_item}>
                            <span className={styleProjects.projects__link_itemText}>{projects.projects[0].buttons.code}</span>
                            <img className={styleProjects.projects__link_itemImg} src={githubIcon} />
                        </span></a>
                        <a href=' https://keglya00.github.io/social-network/'><span className={styleProjects.projects__link_item}>
                            <span className={styleProjects.projects__link_itemText}>{projects.projects[0].buttons.visit}</span>
                            <img className={styleProjects.projects__link_itemImg} src={visitIcon} />
                        </span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects