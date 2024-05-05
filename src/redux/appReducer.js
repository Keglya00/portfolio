

const LANGUAGE_CHANGED = 'LANGUAGE_CHANGED'

let initialState = {
    lang: 'en',
    home:{
        title: 'Front-End React Developer',
        subtitle: "Hi, I'm Kondrat. An enthusiastic beginner React Front-End Developer👋"
    },
    about:{
        pretitle: 'ABOUT ME',
        title: ' A dedicated React Front-End developer, who can make you a perfect website',
        description: 'As a front-end developer, I specialize on making large and small web applications and sites using React, Redux and Typescript. I try to make smooth and beautiful user interfaces using technologies such as scss and bootstrap. I also have knowledge of php to host sites on WordPress, create and modify themes and plugins.'
    },
    projects: {
        pretitle: 'PROJECTS',
        title: 'Each project is a unique piece of development',
        projects: [
            {title: 'Social Network', description: 'Social network is an app that allows users and organizations to connect, communicate, share information and form relationships', stack: {UI: 'React', style: 'SCSS'}, buttons: {code: 'code', visit:'visit'}},
        ]
    },
    contact: {
        title: 'CONTACTS',
        subtitle: 'If you want to contact me, just leave your message there👇​',
        link: '@gmail'
    }
}

const appReducer = (state = initialState, action) => {
    switch(action.type){
        case LANGUAGE_CHANGED: {
            if(action.len === 'ru'){
                return {
                    ...state,
                    lang: 'ru',
                    home: {
                        title: 'Front-End React разработчик',
                        subtitle: "Привет, я Кондрат. Увлеченный начинающий Front-End React разработчик👋"   
                    },
                    about:{
                        ...state.about,
                        title: 'Front-End разработчик, который может создать идеальный веб-сайт.',
                        description: 'Как фронтенд-разработчик, я специализируюсь на создании веб-приложений и сайтов с использованием React, Redux и Typescript. Я создаю плавные и красивые пользовательские интерфейсы с использованием scss и bootstrap. Также имеется знание PHP для размещения сайтов на WordPress, создания и изменения тем и плагинов.'
                    },
                    projects:{
                        ...state.projects,
                        title: 'Каждый проект – это уникальная часть разработки',
                        projects: [
                            {title: 'Социальная сеть', description: 'Социальная сеть — это приложение, позволяющее пользователям обмениваться информацией и формировать взаимоотношения.', stack: {UI: 'React', style: 'SCSS'}, buttons: {code: 'code', visit:'visit'}}
                        ]
                    },
                    contact: {
                        ...state.contact,
                        subtitle: 'Если вы хотите связаться со мной, просто оставьте свое сообщение здесь👇​'
                    }
                }
            } else {
                return {
                    ...state,
                    home:{
                        title: 'Front-End React Developer',
                        subtitle: "Hi, I'm Kondrat. An enthusiastic beginner React Front-End Developer👋"
                    },
                    about:{
                        pretitle: 'ABOUT ME',
                        title: ' A dedicated React Front-End developer, who can make you a perfect website',
                        description: 'As a front-end developer, I specialize on making large and small web applications and sites using React, Redux and Typescript. I try to make smooth and beautiful user interfaces using technologies such as scss and bootstrap. I also have knowledge of php to host sites on WordPress, create and modify themes and plugins.'
                    },
                    projects: {
                        pretitle: 'PROJECTS',
                        title: 'Each project is a unique piece of development',
                        projects: [
                            {title: 'Social Network', description: 'Social network is an app that allows users and organizations to connect, communicate, share information and form relationships', stack: {UI: 'React', style: 'SCSS'}, buttons: {code: 'code', visit:'visit'}},
                        ]
                    },
                    contact: {
                        title: 'CONTACTS',
                        subtitle: 'If you want to contact me, just leave your message there👇​',
                        link: '@gmail'
                    }
                }
            }
        }
        default: {
            return state
        }
    }
}

export const languageGhanged = (len) => {return{type: LANGUAGE_CHANGED, len}} 

export default appReducer