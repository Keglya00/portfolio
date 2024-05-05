import { useDispatch } from 'react-redux'
import { languageGhanged } from '../../redux/appReducer'
import styleHeader from './Header.module.scss'
import ScrollInto from 'react-scroll-into-view'

const Header = () => {

    let dispatch = useDispatch()

    let onLanguageChanged = (len) => {
        dispatch(languageGhanged(len))
    }

    return(
        <header className={styleHeader.header}>
            <div className={styleHeader.header__language}>
                <span onClick={() => onLanguageChanged('ru')} className={styleHeader.header__language_item} >ru</span>
                <span className={styleHeader.header__language_slash} >|</span>
                <span onClick={() => onLanguageChanged('en')} className={styleHeader.header__language_item} >en</span>
            </div>
            <div className={styleHeader.header__refs}>
                <span className={styleHeader.header__refs_item}><ScrollInto selector='#home'>Home</ScrollInto></span>
                <span className={styleHeader.header__refs_item}><ScrollInto selector='#about'>About</ScrollInto></span>
                <span className={styleHeader.header__refs_item}><ScrollInto selector='#projects'>Projects</ScrollInto></span>
                <span className={styleHeader.header__refs_item}><ScrollInto selector='#contacts'>Contacts</ScrollInto></span>
            </div>
        </header>
    )
}

export default Header