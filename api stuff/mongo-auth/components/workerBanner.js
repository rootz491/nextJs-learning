import { useEffect, useRef } from "react"

export default function WorkerBanner() {
    const bannerRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            bannerRef.current.remove();
        }, 3000);
    }, [])

    return (
        <p ref={bannerRef} id="banner">
            you've already joined this Job!

            <style jsx>{`
                #banner {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    padding: 1em 0;
                    text-align: center;
                    background: yellow;
                    color: darkgreen;
                    font-size: 1.3em;
                }
            `}</style>
        </p>
    )
}
