import styles from './form.module.css';

const Form = () => {
    return (
        <form action="" className={styles.form}>
            <input type="text" placeholder='Название'/>
            <textarea name="" id="" placeholder='Описание' rows='5'></textarea>
            <input type="number" name="" id="" placeholder='Колличество серий' min='1' className={styles.series}/>
            <input type="file" name="" id="" className={styles.file} accept='.png, .jpeg, .jpg, .webp'/>
            <button>submit</button>
            <button>return</button>
        </form>
    )
}

export default Form;