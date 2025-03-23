import styles from './card.module.css';
//import PropTypes from 'prop-types';

const Card = (props) => {

    const {img,name} = props;

    return (
        <div className={styles.card}>
                    <div className={styles.img_section} >
                        <img src={img} alt={name} className={styles.img} />
                        <div className={styles.active_section}>
                            <div className={styles.like}>
                                <svg width="28" height="25" viewBox="0 0 28 25" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.02999 10.1293C0.26607 17.6221 14.3516 23 14.3516 23C14.3516 23 27.69 17.4085 26.972 10.1293C26.5538 5.88912 25.2917 1.47455 21.3629 1.04409C18.0377 0.679758 14.3516 6.34379 14.3516 6.34379C14.3516 6.34379 10.1642 0.434707 6.63908 1.04409C2.73977 1.71815 1.46212 5.89074 1.02999 10.1293Z" stroke-width="2"/>
                                </svg>
                            </div>
                            <div className={styles.delete}>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.09675 3H22.903" stroke-width="2" stroke-linecap="round"/>
                                    <line x1="10.8193" y1="1" x2="13.1805" y2="1" stroke-width="2" stroke-linecap="round"/>
                                    <line x1="10" y1="13" x2="14" y2="13" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M6.54859 23.0001C-0.182129 23.1376 1.09703 8.00006 1.09703 8.00006H22.9033C22.9033 8.00006 24.1806 23.2007 17.4517 23.0001C13.8614 22.893 10.5722 22.9179 6.54859 23.0001Z" stroke-width="2"/>
                                    <path d="M17.4132 8C18.0331 11.1013 18.3429 12.8296 17.4132 15.5C16.4835 18.1704 17.4132 22.0625 17.4132 23" stroke-width="2"/>
                                    <path d="M6.5868 8C5.96688 11.1013 5.65711 12.8296 6.5868 15.5C7.51649 18.1704 6.5868 22.0625 6.5868 23" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h3 className={styles.info}>{name}</h3>
                </div>
    )
};

//Card.propTypes = {
//    img: PropTypes.string,
//    name: PropTypes.string,
//};

export default Card;