import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef()

    useEffect(() => {

        if (videoRef.current) videoRef.current.playbackRate = 2
        return () => {

        }
    }, [])

    return (
        <section id="hero">
            <div className="">
                <h1 className="">MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Pro Title" className="" />
            </div>
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline className="" />
            <button className="">Buy</button>
            <p className="">From $1599 or $ 133/mo for 12 months</p>
        </section>
    )
}

export default Hero