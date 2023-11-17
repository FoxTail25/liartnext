import n from '../styles/components/news.module.scss'

export default function NewsRecord({header, content}) {
    return (
        <div className={n.wrapper}>
            <h3>{header}</h3>
            <p>{content}</p>
        </div>
    )    
}