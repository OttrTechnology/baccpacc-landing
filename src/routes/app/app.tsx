import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isIOS, isAndroid } from 'react-device-detect';

const MobileApp = () => {

    const navigate = useNavigate();

    useEffect(() => {
          if (isIOS) {
            window.location.href = 'https://apps.apple.com/np/app/baccpacc/id6448676201';
          } else if (isAndroid) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.ottr.baccpacc&hl=en&gl=US';
          } else {
          navigate("/");
        }

      }, []);

      return "";

}

export default MobileApp;