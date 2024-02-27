import "./Information.css"
import imgurl from "../assets/images/information.jpg"

const Information = () => {
    interface LItems {
        id: number,
        title: string,
        list: object
    };

    const listitems:LItems[] = [
        {
            id: 1,
            title: "機票",
            list:[
                {content:""},
            ]
        }
    ]

    return (
        <div className="information-container">
            <img src={imgurl} alt="Travel Items" className="cover-img" />
            <section className="page-content-container">
                <h2 className="page-title">實用資訊</h2>
                <h2>information</h2>
            </section>
        </div>
    );
}

export default Information;