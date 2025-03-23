//import styles from './cardList.module.css'
import Card from "../Card/Card";
import array from "../Arr/Arr";

const CardList = () => {

    let newArr = array.map((el, index) => {

    return (
        <Card 
        img = {el.img}
        name = {el.name}
        index = {index}
        key = {index}
        />
    )
    });
    
    return <>{newArr}</>
};

export default CardList;