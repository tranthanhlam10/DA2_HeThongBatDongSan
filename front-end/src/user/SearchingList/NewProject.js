import React from 'react'
import './NewProject.css'
export default function NewProject(props) {
    const { newProjectItems } = props;
    return (
        <div className="new-project-container">
            <div className="new-project-title">
                <span class="material-icons">
                    apartment
                </span>
                <span>DỰ ÁN MỚI CẬP NHẬT</span>
            </div>
            <ul className="new-project-list">
                {
                    newProjectItems.map((item, index) => {
                        return (
                            <li className="new-project-item" key={index}>
                                <div className="new-project-img">
                                    <a href={item.link}>
                                        <img src={item.img} />
                                    </a>
                                </div>
                                <div className="new-project-info">
                                    <a href={item.link} className="new-project-name">
                                        {item.name}
                                    </a>
                                    <div className="new-project-location">
                                        <span className="material-icons">
                                            location_on
                                        </span>
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div >
    )
}
