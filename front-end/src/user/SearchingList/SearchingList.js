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
        image: 'https://abcland.vn/wp-content/uploads/2020/05/bat-dong-san-la-gi.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '20 ngày trước',
        price: '140 TRIỆU/THÁNG',
        area: '700',
        location: 'Biên Hòa, Đồng Nai',
        link: 'realestate'
    },
    {
        image: 'https://luatduonggia.vn/wp-content/uploads/2015/08/dong-san-va-bat-dong-san-theo-quy-dinh-cua-phap-luat-viet-nam.jpeg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '100 TRIỆU/THÁNG',
        area: '90',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://media.ex-cdn.com/EXP/media.taichinhdoanhnghiep.net.vn/files/news/2021/03/26/ha-noi-diem-danh-nhieu-ong-trum-bat-dong-san-tri-hoan-nop-tien-dat-134146.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '18 ngày trước',
        price: '140 TRIỆU/THÁNG',
        area: '800',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2021/4/14/photo1618390629705-1618390629826977577415.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '20 ngày trước',
        price: '200 TRIỆU/THÁNG',
        area: '80',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://baoquocte.vn/stores/news_dataimages/quangtung/082021/10/20/4246_228221946_550497939486560_5559808499518523630_n.jpg?rt=20210810204248',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '60 ngày trước',
        price: '38 TRIỆU/THÁNG',
        area: '90',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://st.nhipcaudautu.vn/staticFile/Subject/2019/12/23/batdongsan_231710228.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '40 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOtPXv6YQyuFNiZfW9aeJl91aWstGkPNFfA&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '180 TRIỆU/THÁNG',
        area: '90',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'http://hanoimoi.com.vn/Uploads/images/tuandiep/2020/05/07/co-phan-ta.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '1234 TRIỆU/THÁNG',
        area: '70',
        location: 'Thành phố HCM',
        link: 'realestate'
    },
    {
        image: 'https://nld.mediacdn.vn/291774122806476800/2021/9/6/11-chot-1630929874162447727574.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVghrfD9i3fLaUYNz-bzGwjTX23rjmdQpgnA&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhmeJ7a12ES4bZI-du6c_oq1MqIVeSpdREQ&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'Đồng Nai',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPs3tsEj_KZr03ednfH4jSNqS29iMnlM7PuQ&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'Bình Dương',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKHCbYx2IoVhYwR3S-RzhJlAosYx4dsfWCg&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'Đồng Nai',
        link: 'realestate'
    },
    {
        image: 'https://icdn.dantri.com.vn/thumb_w/640/2019/02/07/vinhomes-1549521123597.png',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'Hà Nội',
        link: 'realestate'
    },
    {
        image: 'https://globalway.vn/media/bat-dong-san/2020_12/bat-dong-san-my-1.png',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://static1.cafeland.vn/cafelandnew/hinh-anh/2021/05/10/156/image-20210510172515-1.jpeg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'Bình Dương',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKWl6AuybXiIsoHqkGeT9BjmQFkxXNqqeYA&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtM36iSpR2qxnXJLZlfbiISa798xweQvgFNw&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '98 ngày trước',
        price: '290 TRIỆU/THÁNG',
        area: '700',
        location: 'HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYt990ozCjjr0uYcnnrEVmeWYpCJ3YuAGoA&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'HÀ NỘI',
        link: 'realestate'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qdExxAwOEhtO880DRH6IBlXG1_kigugWYw&usqp=CAU',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '60 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '700',
        location: 'Hà Nội',
        link: 'realestate'
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
    const [numOfCard,setNumOfCart] = useState(0)
    const cardsPerPage = 10
    const pagesVisited = pageNumber * cardsPerPage
    
    
    const displayCards = cards
        .slice(pagesVisited, pagesVisited + cardsPerPage)
        .map((card) => {
            return (
                <div>
                <Card  image={card.image} name={card.name} time={card.time} price={card.price} area={card.area} location={card.location} link={card.link} />
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

    const callBackMethod= ()=>{
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
                    <ReactPaginate
                        previousLabel={arrowLeft}
                        nextLabel={arrowRight}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationBttns'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
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