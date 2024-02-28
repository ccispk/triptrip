import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import "./Information.css";
import imgurl from "../assets/images/information.jpg";

const Information = () => {
    interface LItems {
        id: number,
        title: string,
        list: object
    };

    const listitems: LItems[] = [
        {
            id: 1,
            title: "機票",
            list: [
                {
                    subtitle:"5 Mar 2024 航班 UO 870",
                    sublist: [
                        {subcontent:"10:50 HKG 香港國際機場 客運大樓 1"},
                        {subcontent:"15:55 NRT 成田國際機場 客運大樓 2"},
                    ]
                },
                {
                    subtitle:"10 Mar 2024 航班 UO 849",
                    sublist: [
                        {subcontent:"15:35 NRT 成田國際機場 客運大樓 2"},
                        {subcontent:"20:00 HKG 香港國際機場 客運大樓 1"},
                    ]
                },
            ]
        }
    ];

    const [expanded, setExpanded] = React.useState(false);
    const clickHandler = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="information-container">
            <img src={imgurl} alt="Travel Items" className="cover-img" />
            <section className="page-content-container">
                <h2 className="page-title">實用資訊</h2>
                <h2>information</h2>
                <div className="main-menu">
                    <button onClick={clickHandler} className="list-btn">{expanded ? <FaChevronUp /> : <FaChevronDown />} 機票</button>
                </div>
                <ol className={`sub-menu ${expanded ? 'expanded' : 'collapsed'}`}>
                    <li>5 Mar 2024 航班 UO 870</li>
                    <ul>
                        <li>10:50 HKG 香港國際機場 客運大樓 1</li>
                        <li>15:55 NRT 成田國際機場 客運大樓 2</li>
                    </ul>
                    <li>10 Mar 2024 航班 UO 849</li>
                    <ul>
                        <li>15:35 NRT 成田國際機場 客運大樓 2</li>
                        <li>20:00 HKG 香港國際機場 客運大樓 1</li>
                    </ul>
                </ol>
                <ol className={`sub-menu ${expanded ? 'expanded' : 'collapsed'}`}>
                    <li>5 Mar 2024 航班 UO 870</li>
                    <ul>
                        <li>10:50 HKG 香港國際機場 客運大樓 1</li>
                        <li>15:55 NRT 成田國際機場 客運大樓 2</li>
                    </ul>
                    <li>10 Mar 2024 航班 UO 849</li>
                    <ul>
                        <li>15:35 NRT 成田國際機場 客運大樓 2</li>
                        <li>20:00 HKG 香港國際機場 客運大樓 1</li>
                    </ul>
                </ol>
            </section>
        </div>
    );
}

export default Information;