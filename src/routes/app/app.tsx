import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MobileApp = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
    
        if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1) {
          // Redirect iOS devices to one URL
          window.location.href = 'https://apps.apple.com/np/app/baccpacc/id6448676201';
        } else if (userAgent.indexOf('android') !== -1) {
          // Redirect Android devices to another URL
          window.location.href = 'https://play.google.com/store/apps/details?id=com.ottr.baccpacc&hl=en&gl=US';
        } else {
            navigate("/");
        }
      }, []);

      return "";

}

export default MobileApp;