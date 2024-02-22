import { FaFacebookF, FaInstagram, FaYoutube, FaX } from "react-icons/fa6";

interface MItems {
    id: number,
    path: string,
    icon: React.ReactElement<React.JSXElementConstructor<any>>,
    className: string,
}

export const mediaItems:MItems[] = [
    {
        id: 1,
        path: "#",
        icon: <FaFacebookF className="icon"/>,
        className: "media-link",
    },
    {
        id: 2,
        path: "#",
        icon: <FaInstagram className="icon"/>,
        className: "media-link",
    },
    {
        id: 3,
        path: "#",
        icon: <FaYoutube className="icon"/>,
        className: "media-link",
    },
    {
        id: 4,
        path: "#",
        icon: <FaX className="icon"/>,
        className: "media-link",
    },
    
];