import '../styles/SocialMedia.css';
import Icon from '@mui/material/Icon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function SocialMedia({data}){

    const {linked_in, instagram} = data;

    
    return(
        <div className='social-media-bar'>
            <a href={linked_in}><LinkedInIcon className='linked-in'/></a>
            <a href={instagram}><InstagramIcon className='instagram'/></a>
        </div>
    )
};

export default SocialMedia;