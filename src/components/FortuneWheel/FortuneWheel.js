import {useState, useEffect} from 'react';
import styles from "./FortuneWheel.module.scss"
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const FortuneWheel = ({rightRound, rightGift, giftsList, ...props}) => {
    //TODO remove bootstrap (use vanilla css with normolize css instead), use lodash helper functions, optimaze code)
    const [wheel, setWheel] = useState({
        round: 0,
        gift: 0,
    });
   const [runFortuneWheel, setRunFortuneWheel] = useState(false);
   const [fortuneWheelFinished, setFortuneWheelFinished] = useState(false);

   const calcWheelSpeed = () => {
       const totalScore = (rightRound * giftsList.length) + rightGift;
       const currentScore = (wheel.round * giftsList.length) + wheel.gift;
       // console.log(`Total score: ${totalScore}. Current score: ${currentScore}. Result score: ${(currentScore / totalScore) * 100}`);
       return (currentScore / totalScore) * 100;
   };

    const startFortuneWheel = () => {
        setWheel({
            round: 0,
            gift: 0,
        });
        setRunFortuneWheel(true);
    };

    useEffect(() => {
        let interval = null;
        let timer = 800;
        const wheelProgress = calcWheelSpeed();

        if(wheelProgress <= 25) {
            timer = 300;
        } else if (wheelProgress <= 50) {
            timer = 150;
        } else if (wheelProgress <= 75) {
            timer = 100;
        } else if (wheelProgress <= 95) {
            timer = 200;
        }

        console.log("Progress", wheelProgress, "Speed", timer);
        if (runFortuneWheel) {
            interval = setInterval(() => {
                // Stop wheel
                if(wheel.gift === rightGift && wheel.round === rightRound) {
                    setRunFortuneWheel(false);
                    setFortuneWheelFinished(true);
                    clearInterval(interval);
                }
                else if (wheel.gift === giftsList.length) {
                    setWheel({...wheel, round: wheel.round + 1, gift: 1});
                }
                else {
                    setWheel({...wheel, gift: wheel.gift + 1});
                }
                calcWheelSpeed();
            }, timer);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [wheel, runFortuneWheel]);

    useEffect(() => {
        if(fortuneWheelFinished) {
            alert(`Fortune wheel was finished with selected gift: ${wheel.gift}`)
        }
    }, [fortuneWheelFinished]);

   return (
       <div className="container py-3">
          <div className={styles.giftsContainer}>
             {giftsList.map(gift => (
                 <div key={gift.id}
                      className={`${styles.giftItem} ${wheel.gift === gift.id ? styles.activeGiftItem : ""}`}>
                    <img src={gift.image} alt={gift.title} className={styles.image} />
                 </div>
             ))}
          </div>
          <Button
              className="mt-5"
              variant="primary"
              onClick={startFortuneWheel}
          >
            Get a gift
          </Button>
       </div>

   )
};

FortuneWheel.propTypes  = {
    rightGift: PropTypes.number.isRequired,
    rightRound: PropTypes.number.isRequired,
    giftsList: PropTypes.array.isRequired,
};

export default FortuneWheel;