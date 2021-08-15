import {useState} from 'react';
import FortuneWheel from "../FortuneWheel/FortuneWheel";
import gift from "../../assets/images/gift.svg";

const Home = () => {
    const [giftsList, setGiftsList] = useState([
        {
            id: 1,
            title: "Gift 1",
            image: gift,
        },
        {
            id: 2,
            title: "Gift 2",
            image: gift,
        },
        {
            id: 3,
            title: "Gift 3",
            image: gift,
        },
        {
            id: 4,
            title: "Gift 1",
            image: gift,
        },
        {
            id: 5,
            title: "Gift 2",
            image: gift,
        },
        {
            id: 6,
            title: "Gift 3",
            image: gift,
        },
        {
            id: 7,
            title: "Gift 1",
            image: gift,
        },
        {
            id: 8,
            title: "Gift 2",
            image: gift,
        },
        {
            id: 9,
            title: "Gift 3",
            image: gift,
        },
        {
            id: 10,
            title: "Gift 1",
            image: gift,
        },
        {
            id: 11,
            title: "Gift 2",
            image: gift,
        },
        {
            id: 12,
            title: "Gift 3",
            image: gift,
        }
    ]);

    return (
        <FortuneWheel
            rightGift={1}
            rightRound={2}
            giftsList={giftsList}
        />
    );
}

export default Home;