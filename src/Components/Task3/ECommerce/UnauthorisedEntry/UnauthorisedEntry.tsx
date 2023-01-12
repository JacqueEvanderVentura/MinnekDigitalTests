import { useNavigate } from 'react-router-dom';
import Countdown from '../../../Countdown/Countdown';

const UnauthorisedEntry = () => {
	const navigate = useNavigate()
	function handleAfterCountdown(){
		        return navigate("/task3", { replace: true });

	} 
	return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://www.pngmart.com/files/7/Unauthorized-Sign-PNG-Picture.png"
        alt="Unauthorized access"
        className="w-6/12"
      />
			<Countdown initialValue={5} afterZeroDoThis={handleAfterCountdown} />
    </div>
  );
}

export default UnauthorisedEntry