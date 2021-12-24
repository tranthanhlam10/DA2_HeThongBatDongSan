import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import './SearchingList.css'
import SearchBar from '../../common/SearchBar/SearchBar'
import Card from './Card'
import SortedBy from './SortedBy'
import FilterBlock from './FilterBlock'
import HotLocation from './HotLocation'
import NewProject from './NewProject'

const filterList = [
    {
        filterTitle: 'TÌM THEO KHOẢNG GIÁ',
        filterItems: [
            {
                displayName: 'Dưới 1 triệu',
                link: '',
            },
            {
                displayName: '1 -> 3 triệu',
                link: '',
            },
            {
                displayName: '3 -> 5 triệu',
                link: '',
            },
            {
                displayName: '5 -> 10 triệu',
                link: '',
            },
            {
                displayName: '10 -> 40 triệu',
                link: '',
            },
            {
                displayName: '40 -> 70 triệu',
                link: '',
            },
            {
                displayName: '70 -> 100 triệu',
                link: '',
            },
            {
                displayName: 'Trên 100 triệu',
                link: '',
            },
        ]
    },
    {
        filterTitle: 'TÌM THEO KHOẢNG DIỆN TÍCH',
        filterItems: [
            {
                displayName: 'Dưới 30 triệu',
                link: '',
            },
            {
                displayName: '30 -> 50 triệu',
                link: '',
            },
            {
                displayName: '50 -> 80 triệu',
                link: '',
            },
            {
                displayName: '80 -> 100 triệu',
                link: '',
            },
            {
                displayName: '100 -> 150 triệu',
                link: '',
            },
            {
                displayName: '150 -> 300 triệu',
                link: '',
            },
            {
                displayName: '300 -> 500 triệu',
                link: '',
            },
            {
                displayName: 'Trên 500 triệu',
                link: '',
            },
        ]
    }
]
const cardList = [
    {
        image: 'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2020/03/21/a6_1584776036.jpg',
        name: 'Cho thuê phòng trọ đường Liên Phường, Quận 9',
        time: '20 ngày trước',
        price: '9 TRIỆU/THÁNG',
        area: '50',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://phongnhatro.com/upload/files/images/2017/02/original/20170219_084324_4ddaff41da0fea15f676f931b76d7df3.jpg',
        name: 'Chính chủ cho thuê phòng trọ quận 9',
        time: '6 ngày trước',
        price: '8.5 TRIỆU/THÁNG',
        area: '30',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://cdn.chotot.com/2SVvsDLf4ST8K5OjBxsQBwKassbN2QoMT9D1XNe8leo/preset:view/plain/e5143f4f73a5b648d68c5f39c041e88b-2746185214580354130.jpg',
        name: 'Cho thuê phòng trọ rộng rãi có sân riêng',
        time: '18 ngày trước',
        price: '7 TRIỆU/THÁNG',
        area: '45',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://thanhlymaylanh.net/upload/elfinder/phongtronhocogacnenlapdieuhoamaylanhthenaochophuhop1-4287.png',
        name: 'Phòng trọ cao cấp đường Lê Văn Việt, quận 9',
        time: '20 ngày trước',
        price: '2 TRIỆU/THÁNG',
        area: '60',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://cdn.nhatrotot.com/images/000042378/61-11-duong-hang-tre-phuong-long-thanh-my-quan-9-thanh-pho-ho-chi-minh-000042378001.jpg',
        name: 'Cho thuê phòng trọ quận 9 giá rẻ',
        time: '60 ngày trước',
        price: '1.5 TRIỆU/THÁNG',
        area: '45',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://cdn1.diachu.vn/files/resize/1366x768/2021/02/18/WvO/cho-thue-nha-tro-phong-tro-tai-phuong-tan-phu-quan-9-thanh-pho-ho-chi-minh.0.jpg',
        name: 'Phòng trọ cao câp, căn hộ mini quận 9 cho thuê',
        time: '40 ngày trước',
        price: '7.5 TRIỆU/THÁNG',
        area: '50',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://nhatro123.com/pictures/picfullsizes/2021/07/23/bkcucs1627011565.jpg',
        name: 'Phòng trọ quận 9 giá rẻ gần khu công nghiệp',
        time: '6 ngày trước',
        price: '7 TRIỆU/THÁNG',
        area: '40',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://muadatnenquan9.com/wp-content/uploads/2017/10/dat-xay-tro-tai-quan-9-3-1024x576.jpg',
        name: 'Cho thuê phòng trọ quận 9 gần cao đăng Kinh Tế Đối Ngoại và chợ Phước Bình',
        time: '10 ngày trước',
        price: '1.5 TRIỆU/THÁNG',
        area: '25',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdxFvQ9mJNpaJKzATA3eTnhWqgozt18ulcw&usqp=CAU',
        name: 'Nhà trọ quận 9, Thủ Đức',
        time: '6 ngày trước',
        price: '3 TRIỆU/THÁNG',
        area: '30',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },
    {
        image: 'https://blogcdn.muaban.net/wp-content/uploads/2019/07/phong-tro-quan-9-5.jpg',
        name: 'Cho thuê phòng trọ gần khu công nghệ cao',
        time: '6 ngày trước',
        price: '5 TRIỆU/THÁNG',
        area: '20',
        location: 'Quận 9, thành phố Hồ Chí Minh',
        link: '/realestate'
    },


]
const hotLocationList = [
    {
        title: 'CHO THUÊ CĂN HỘ CHUNG CƯ NỔI BẬT',
        hotLocationItems: [
            {
                displayName: 'Cho thuê căn hộ chung cư Hồ Chí Minh',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Hà Nội',
                num: '173',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Đà Nẵng',
                num: '173',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Khánh Hòa',
                num: '29',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bà Rịa Vũng Tàu',
                num: '27',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bình Dương',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Quảng Ninh',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Hải Phòng',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bắc Giang',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bình Định',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Thừa Thiên Huế',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Bình Thuận',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Thanh Hóa',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Kiên Giang',
                num: '4895',
                link: ''
            },
            {
                displayName: 'Cho thuê căn hộ chung cư Đồng Nai',
                num: '4895',
                link: ''
            },
        ]
    }
]
const newProjectList = [
    {
        link: '/realestate',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '/realestate',     //này là cái link gửi request mình BE nè
        img: 'https://zk812.com/wp-content/uploads/2021/08/mcp-parksunset-copy_rtil.jpg',
        name: 'THE KELWERY',
        location: 'Biên Hòa, Đồng Nai',
    },
    {
        link: '/realestate',     //này là cái link gửi request mình BE nè
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr724Z_AkbnBx8lqieDu8kZRggCGal7pNAvjFfl-xQzch8chnbDHT9sgFQoyR2onmwik4&usqp=CAU',
        name: 'THE PROMETHEUS',
        location: 'Quận 1, Hà Nội',
    },
    {
        link: '/realestate',     //này là cái link gửi request mình BE nè
        img: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/10/20/965669/Anh-1.jpg',
        name: 'THE LIGHT',
        location: 'Quận 10, Hồ Chí Minh',
    },
    {
        link: '/realestate',     //này là cái link gửi request mình BE nè
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANGehyZuU6e7GxUnv3IMpr_YAmWezEqI6LA&usqp=CAU',
        name: 'THE POSEIDON',
        location: 'Vũng Tàu',
    },
]


function SearchingList(props) {
    const [cards, setCards] = useState(cardList.slice(0, 100));
    const [pageNumber, setPageNumber] = useState(0)
    const [numOfCard, setNumOfCart] = useState(0)
    const cardsPerPage = 10
    const pagesVisited = pageNumber * cardsPerPage


    const displayCards = cards
        .slice(pagesVisited, pagesVisited + cardsPerPage)
        .map((card, index) => {
            return (
                <div key={index}>
                    <Card image={card.image} name={card.name} time={card.time} price={card.price} area={card.area} location={card.location} link={card.link} />
                </div>
            );
        })

    const pageCount = Math.ceil(cards.length / cardsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    const arrowRight = <span class="material-icons">
        arrow_forward_ios
    </span>
    const arrowLeft = <span class="material-icons">
        arrow_back_ios
    </span>

    const callBackMethod = () => {
        props.sendData(numOfCard);
    }


    return (
        <div className="body-searching-list">
            <SearchBar />
            <div className="search-list-container">
                <div className="main-content">
                    <div className="search-title">
                        <p>Cho thuê căn hộ chung cư | Thuê căn hộ chính chủ | Giá tốt T10/2021</p>
                    </div>
                    <SortedBy />
                    {
                        displayCards
                    }
                    {/* <ReactPaginate
                        previousLabel={arrowLeft}
                        nextLabel={arrowRight}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationBttns'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    /> */}
                </div>
                <div className="search-list-filter-container">
                    {filterList.map((item, index) => {
                        return (
                            <FilterBlock title={item.filterTitle} filterItems={item.filterItems} key={index} />
                        )
                    })}
                    {hotLocationList.map((item, index) => {
                        return (
                            <HotLocation title={item.title} hotLocationItems={item.hotLocationItems} key={index} />
                        )
                    })}
                    <NewProject newProjectItems={newProjectList} />
                </div>
            </div>
        </div>
    )
}

export default SearchingList