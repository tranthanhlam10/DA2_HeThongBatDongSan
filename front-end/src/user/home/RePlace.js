import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './RePlace.css'
export default function RePlace() {
    const HCMImages = [
        "https://images.hcmcpv.org.vn/res/news/2021/01/03-01-2021-thanh-pho-ho-chi-minh-duy-tri-tang-truong-kinh-te-va-on-dinh-xa-hoi-9BE00C91.jpg",
        "https://static.muanhanh.com/images/2019/08/22/d24b6345f0d1a5fea0de8a37628cca35.png",
        "https://cdnmedia.baotintuc.vn/Upload/c2tvplmdloSDblsn03qN2Q/files/2020/11/04/thanh-pho-thu-duc-tp-ho-chi-minh-41120.jpg",
    ]
    const DaLatImages = [
        "https://disantrangan.vn/wp-content/uploads/2021/02/du-lich-da-lat-19-700x450.jpg",
        "http://divui.com/blog/wp-content/uploads/2018/03/du-lich-da-lat-cuoi-tuan-cover.jpg",
        "https://agotourist.com/wp-content/uploads/2018/08/Ho-Xuan-Huong-dia-diem-da-lat-ve-dem.jpg",
    ]
    const DongNaiImages = [
        "https://trandinhhieu.com/wp-content/uploads/2020/09/thanh-pho-bien-hoa-dong-nai.jpg",
        "https://nhaphodongnai.com/wp-content/uploads/2020/06/dia-danh-noi-tieng-tinh-dong-nai-1.jpg",
        "https://monannhalam.store/wp-content/uploads/2021/08/cau6.jpg",
    ]
    const DaNangImages = [
        "https://storage.googleapis.com/blogvxr-uploads/2018/05/dulichdanang.jpeg",
        "https://danangfantasticity.com/wp-content/uploads/2015/10/bien-danang.jpg",
        "https://img.nhandan.com.vn/Files/Images/2020/11/29/caurong-1606587575413.jpg",
    ]
    const HaNoiImages = [
        "https://haiquanonline.com.vn/stores/news_dataimages/anhntp/072020/23/17/in_article/4219_12-_hn_st.jpg?rt=20200724092032",
        "https://media.baodansinh.vn/baodansinh/Images/2019/01/03/hoacu/48369524_496131550794760_5281915862536683520_n.jpg",
        "https://bigvn.blog/dp/wp-content/uploads/2018/07/ha-noi-co-bao-nhieu-quan8-1.jpg",
    ]
    const [currentImage, setCurrentImage] = useState(0)


    useEffect(() => {
        let intervalID = setInterval(
            () => changBackgroundImage(), 5000);
        return () => { clearInterval(intervalID); }
    }, [currentImage])

    const changBackgroundImage = () => {
        const noOfImages = HCMImages.length;
        let newCurrentImage = 0;
        if (currentImage !== noOfImages - 1) {
            newCurrentImage = currentImage + 1;
        }
        setCurrentImage(newCurrentImage);
    }
    return (
        <div className="re-place-container">
            <div className="re-place-title">
                <p>Bất động sản theo địa điểm</p>
            </div>
            <div className="re-place-big re-place-float">
                <Link to="/searchinglist">
                    <img className="re-place-img" src={HCMImages[currentImage]} />
                    <div className="re-place-big-title">
                        <span>TP. Hồ Chí Minh</span>
                        <span className="re-place-title-num">35359 tin đăng</span>
                    </div>
                </Link>
            </div>
            <ul className="re-place-small-container">
                <li className=" re-place-small re-place-float re-place-mb">
                    <Link to="/searchinglist">
                        <img className="re-place-img" src={DongNaiImages[currentImage]} />
                        <div className="re-place-small-title">
                            <span>Đồng Nai</span>
                            <span className="re-place-small-title-num">2000 tin đăng</span>
                        </div>
                    </Link>
                </li>
                <li className="re-place-small re-place-float re-place-mb">
                    <Link to="/searchinglist">
                        <img className="re-place-img" src={DaLatImages[currentImage]} />
                        <div className="re-place-small-title">
                            <span>Đà Lạt</span>
                            <span className="re-place-small-title-num">1000 tin đăng</span>
                        </div>
                    </Link>
                </li>
                <li className="re-place-small re-place-float">
                    <Link to="/searchinglist">
                        <img className="re-place-img" src={DaNangImages[currentImage]} />
                        <div className="re-place-small-title">
                            <span>Đà Nẵng</span>
                            <span className="re-place-small-title-num">1520 tin đăng</span>
                        </div>
                    </Link>
                </li>
                <li className="re-place-small re-place-float">
                    <Link to="/searchinglist">
                        <img className="re-place-img" src={HaNoiImages[currentImage]} />
                        <div className="re-place-small-title">
                            <span>Hà Nội</span>
                            <span className="re-place-small-title-num">2500 tin đăng</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
