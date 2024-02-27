import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import "./Prepare.css"
import imgurl from "../assets/images/prepare.jpg"

const Prepare = () => {

    const listitems = [
        {
            id: 1,
            title: "行李",
            list:[
                {content:"護照"},
                {content:"衣物"},
                {content:"現金"},
                {content:"SUICA/ICOCA卡"},
                {content:"相機"},
                {content:"高達"},
            ]
        },
        {
            id: 2,
            title: "HK EXPRESS 手機應用程式",
            list:[
                {content:"出發前/回港前48小時至起飛前75分鐘於網上預辦登機手續"},
                {content:"手機應用程式點選「網上辦理登機」"},
                {content:"輸入訂單編號（PNR）和預訂人的姓氏"},
                {content:"SUICA/ICOCA卡"},
                {content:"在辦理登機手續之旅客姓名旁邊的方框內打勾，同時點選表示您接受我們的條款及細則。然後，按「下一步」完成手續"},
                {content:"在網上成功辦理登機手續後，您可以列印出您的登機證以便登機。"},
            ]
        },
        {
            id: 3,
            title: "Visit Japan Web",
            list:[
                {content:"出發前6小時在Visit Japan Web申請賬號"},
                {content:"填寫個人資料"},
                {content:"確認是否持有日本護照及日本再入國許可簽證（如工作簽證、學生簽證等）"},
                {content:"如希望使用「免稅QR碼」點選「是」，並按指示拍攝護照上臉部照片的頁面"},
                {content:"按指示填寫姓名、出生日期、國籍、性別及護照號碼。"},
                {content:"按「下一步」，確認資料無誤再按「登錄」，完成填寫「本人資料」部分。"},
                {content:"點選「新增登錄」以新增行程"},
                {content:"填寫旅行名稱（非必填項目，如不填寫，系統會自動默認為抵達日期）、抵達日期及航班資料。"},
                {content:"填寫抵達日本後的居住地點（酒店地址）及電話號碼，完成後按「確認輸入內容」。"},
                {content:"確認資料無誤，按「登錄預定」完成新增行程"},
                {content:"點選「返回入境、回國手續」，姓名及出生日期會按照「登錄使用者」自動完成輸入，填寫居住地即可。"},
                {content:"填寫入境目的、抵達航班編號、停留日數、住宿地點及聯絡資料等。"},
                {content:"填寫入境「提問事項」。"},
                {content:"確認輸入內容後按「登錄」。"},
                {content:"點選「返回入境、回國手續」，按「攜帶品、後送物品申報」，填寫海關申報表格。"},
                {content:"填寫職業、抵達日本日期及出發地點等。"},
                {content:"輸入同行家人數目。"},
                {content:"填寫日本住宿或酒店地址詳情。"},
                {content:"回答「申報資訊」。如符合點選「是」，不符合點選「否」。"},
                {content:"完成登錄資料後，返回主頁點選「外國人入境紀錄」及「海關申報準備」下的「顯示QR碼」，拉至最底再點選「顯示QR碼」，就會見到海關申報所需的QR碼。"},
            ]
        },
    ];
    const [expanded, setExpanded] = React.useState(false);
    const clickHandler = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="prepare-contanier">
            <img src={imgurl} alt="Travel Items" className="cover-img" />
            <section className="page-content-container">
                <h2 className="page-title">事前準備</h2>
                <div className="main-menu">
                    <button onClick={clickHandler} className="list-btn">{expanded ? <FaChevronUp/> : <FaChevronDown/>} 行李</button>
                </div>
                <ol className={`sub-menu ${expanded ? 'expanded' : 'collapsed'}`}>
                    <li>護照</li>
                    <li>衣物</li>
                    <li>現金</li>
                    <li>SUICA/ICOCA卡</li>
                    <li>相機</li>
                    <li>高達</li>
                </ol>
                <div className="main-menu">
                    <button onClick={clickHandler} className="list-btn">{expanded ? <FaChevronUp/> : <FaChevronDown/>} HK EXPRESS 手機應用程式</button>
                </div>
                <ol className={`sub-menu ${expanded ? 'expanded' : 'collapsed'}`}>
                    <li>出發前/回港前48小時至起飛前75分鐘於網上預辦登機手續</li>
                    <li>手機應用程式點選「網上辦理登機」</li>
                    <li>輸入訂單編號（PNR）和預訂人的姓氏</li>
                    <li>在辦理登機手續之旅客姓名旁邊的方框內打勾，同時點選表示您接受我們的條款及細則。然後，按「下一步」完成手續</li>
                    <li>在網上成功辦理登機手續後，您可以列印出您的登機證以便登機。</li>
                </ol>
                <div className="main-menu">
                    <button onClick={clickHandler} className="list-btn">{expanded ? <FaChevronUp/> : <FaChevronDown/>} Visit Japan Web</button>
                </div>
                <ol className={`sub-menu ${expanded ? 'expanded' : 'collapsed'}`}>
                    <li>出發前6小時在Visit Japan Web申請賬號</li>
                    <li>填寫個人資料</li>
                    <li>確認是否持有日本護照及日本再入國許可簽證（如工作簽證、學生簽證等）</li>
                    <li>如希望使用「免稅QR碼」點選「是」，並按指示拍攝護照上臉部照片的頁面</li>
                    <li>按指示填寫姓名、出生日期、國籍、性別及護照號碼。</li>
                    <li>按「下一步」，確認資料無誤再按「登錄」，完成填寫「本人資料」部分。</li>
                    <li>點選「新增登錄」以新增行程</li>
                    <li>填寫旅行名稱（非必填項目，如不填寫，系統會自動默認為抵達日期）、抵達日期及航班資料。</li>
                    <li>填寫抵達日本後的居住地點（酒店地址）及電話號碼，完成後按「確認輸入內容」。</li>
                    <li>確認資料無誤，按「登錄預定」完成新增行程</li>
                    <li>點選「返回入境、回國手續」，姓名及出生日期會按照「登錄使用者」自動完成輸入，填寫居住地即可。</li>
                    <li>填寫入境目的、抵達航班編號、停留日數、住宿地點及聯絡資料等。</li>
                    <li>填寫入境「提問事項」。</li>
                    <li>確認輸入內容後按「登錄」。</li>
                    <li>點選「返回入境、回國手續」，按「攜帶品、後送物品申報」，填寫海關申報表格。</li>
                    <li>填寫職業、抵達日本日期及出發地點等。</li>
                    <li>輸入同行家人數目。</li>
                    <li>填寫日本住宿或酒店地址詳情。</li>
                    <li>回答「申報資訊」。如符合點選「是」，不符合點選「否」。</li>
                    <li>完成登錄資料後，返回主頁點選「外國人入境紀錄」及「海關申報準備」下的「顯示QR碼」，拉至最底再點選「顯示QR碼」，就會見到海關申報所需的QR碼。</li>
                </ol>
            </section >
        </div>
    );
}

export default Prepare;