import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faEnvelope,
    faMobile,
    faMapMarkedAlt,
    faLock,
    faMusic
    
    
    
} from "@fortawesome/free-solid-svg-icons";


import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons'



const Icons = () => {

    return library.add(
        faTrash,
        faSignOutAlt,
        faEdit,
        faSpinner,
        faPlusCircle,
        faEnvelope,
        faMobile,
        faMapMarkedAlt,
        faLock,
        faFacebook,
        faTwitter,
        faYoutube,
        faInstagram,
        faTwitch,
        faMusic

        
        
        
        
    );
};    

export default Icons;
