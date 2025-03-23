import styles from './cardInfo.module.css'

const CardInfo = (props) => {

    const {img,name,info} = props
    return(
        <div className={styles.info}>
        <div className={styles.info_block}>
            <img src={img} alt={name} className={styles.img}/>
            <div className={styles.info_section}>
                <h3 className={styles.title}>{name}</h3>
                <p className={styles.text}>{info}</p>
            </div></div>
            <button className={styles.btn}>return</button>
        </div>
    )
}

export default CardInfo;