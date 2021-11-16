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
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '6 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '70',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
    },
    {
        image: 'https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg',
        name: 'Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th',
        time: '60 ngày trước',
        price: '14 TRIỆU/THÁNG',
        area: '700',
        location: 'QUẬN NAM TỪ LIÊM, HÀ NỘI',
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
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
    {
        link: '',     //này là cái link gửi request mình BE nè
        img: 'https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg',
        name: 'THE BEVERLY',
        location: 'Quận 9, Hồ Chí Minh',
    },
]


export default function SearchingList() {
    const [cards, setCards] = useState(cardList.slice(0, 100));
    const [pageNumber, setPageNumber] = useState(0)
    const cardsPerPage = 10
    const pagesVisited = pageNumber * cardsPerPage
    const displayCards = cards
        .slice(pagesVisited, pagesVisited + cardsPerPage)
        .map((card) => {
            return (
                <Card image={card.image} name={card.name} time={card.time} price={card.price} area={card.area} location={card.location} />
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
