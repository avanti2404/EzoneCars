import React from 'react'

const Banner = ({bannerImgUrl, bannerHeader}) => {
    return (
        <div className="h-[18rem] md:h-[23rem] w-full aspect-video relative bg-cover bg-center flex items-center md:items-start" style={{ backgroundImage: `url(${bannerImgUrl})` }}>
            <div className=" absolute inset-0 bg-black/40"></div>
            <div className="text-center w-full h-full relative text-white flex items-center justify-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-heading uppercase">{bannerHeader}</h2>
            </div>
        </div>
    )
}

export default Banner