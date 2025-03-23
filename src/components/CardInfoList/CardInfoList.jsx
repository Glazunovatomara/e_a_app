import CardInfo from "../CardInfo/CardInfo";
import array from "../Arr/Arr";

const CardInfoList = () => {

    let newArr = array.map((el,index) => {

        return (
            <CardInfo
                img = {el.img}
                name = {el.name}
                info = {el.info}
                index = {index}
                key = {index}
            />
        )
    })

    return <>{newArr}</>
}

export default CardInfoList;