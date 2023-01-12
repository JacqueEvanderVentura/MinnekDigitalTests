import { useEffect, useState } from "react";

interface PropsCountdown {
  initialValue: number;
  afterZeroDoThis?: Function;
  message?: string;
}

const Countdown = ({
  initialValue,
  afterZeroDoThis = () => history.back(),
}: PropsCountdown) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    counter < 1
      ? afterZeroDoThis()
      : setTimeout(() => {
          setCounter((prevState: number) => prevState - 1);
        }, 1000);
  }, [counter]);

  return (
    <div className="text-xl font-bold">
      This page will take you back to a safe area in {counter} seconds
    </div>
  );
};

export default Countdown;
