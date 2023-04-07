import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: " lorem ipsum dolor sit amet consectetur adipiscing elit. Ex officiis molestie quod tempor invid laums "
        },
        {
            img: profilePic2,
            review: " lorem ipsum dolor sit amet consectetur adipiscing elit. Ex officiis molestie quod tempor invid laums "
        },
        {
            img: profilePic3,
            review: " lorem ipsum dolor sit amet consectetur adipiscing elit. Ex officiis molestie quod tempor invid laums "
        },
        {
            img: profilePic4,
            review: " lorem ipsum dolor sit amet consectetur adipiscing elit. Ex officiis molestie quod tempor invid laums "
        },


    ]


    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Amazing Works</span>
                <span>from me ....</span>
                <div className="blur t-blur1"
                    style={{ background: "var( --purple )" }}>
                </div>
                <div className="blur tblur2"
                    style={{ background: 'skyblue', }}>
                </div>
            </div>

            <Swiper
                modules={[Pagination]}
                sliderPreview={1}
                pagination={{ clickable: true }}

            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>

                        </SwiperSlide>
                    )
                })}

            </Swiper>

        </div>
    )
}

export default Testimonials