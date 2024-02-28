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
                    subtitle: "5 Mar 2024 航班 UO 870",
                    sublist: [
                        { subcontent: "出發：10:50 HKG 香港國際機場 客運大樓 1" },
                        { subcontent: "到達：15:55 NRT 成田國際機場 客運大樓 2" },
                    ]
                },
                {
                    subtitle: "10 Mar 2024 航班 UO 849",
                    sublist: [
                        { subcontent: "出發：15:35 NRT 成田國際機場 客運大樓 2" },
                        { subcontent: "到達：20:00 HKG 香港國際機場 客運大樓 1" },
                    ]
                },
            ]
        },
        {
            id: 2,
            title: "酒店",
            list: [
                {
                    subtitle: "池袋站百夫長酒店 (Centurion Hotel Ikebukuro Station)",
                    sublist: [
                        {subcontent: "聯絡電話：+81369126031"},
                        {subcontent: "地址：1-8-9 Higashi Ikebukuro, Toshima-ku, 池袋, 東京, 日本, 1700013"},
                        {subcontent: "前往方法： 出了JR池袋站東口之後，往左手邊方向走約4-6分鐘"},
                        {subcontent: "入住日期： 2024年3月5日(星期二)15:00"},
                        {subcontent: "退房日期： 2024年3月10日(星期日)11:00"},
                        {subcontent: "客房： 11平方米/118平方呎 | 禁煙房 | 1張碌架床及1張單人床"}
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "預約",
            list: [
                {
                    subtitle: "SHIBUYA SKY",
                    sublist: [
                        {subcontent: "地址：〒150-0002 東京都渋谷区渋谷２丁目２４−１２"},
                        {subcontent: "前往方法： 從JR中央剪票口或JR南剪票口處,嚮東口方嚮行進"},
                        {subcontent: "入場時間： 2024年3月7日(星期四)14:40-15:00"},
                        {subcontent: "最後離場時間： 22:30"},
                    ]
                }
            ]
        },

    ];

    return (
        <div className="information-container">
            <img src={imgurl} alt="Travel Items" className="cover-img" />
            <section className="page-content-container">
                <h2 className="page-title">實用資訊</h2>
                {listitems.map((item, index) => {
                    return <ListItem key={index} title={item.title} list={item.list} />
                })}
            </section>
        </div>
    );
}

const ListItem = ({ title, list }) => {
    const [expanded, setExpanded] = React.useState(false);
    const clickHandler = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <div className="main-menu">
                <button onClick={clickHandler} className="list-btn">{expanded ? <FaChevronUp /> : <FaChevronDown />} {title}</button>
            </div>
            <ol className={`sub-menu ${expanded ? 'expanded' : 'collapsed'}`}>
                {list.map((item, index) => {
                    return (
                        <>
                            <li key={index}>{item.subtitle}</li>
                            <ul>
                                <Subb key={index} sublist={item.sublist} />
                            </ul>
                        </>
                    );
                })}
            </ol>
        </>
    );
}

const Subb = ({ sublist }) => {
    return (
        <>
            {sublist.map((item) => {
                return <li>{item.subcontent}</li>;
            })}
        </>
    )
}

export default Information;