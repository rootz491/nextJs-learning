import { useEffect, useRef } from "react"

export default function OwnerBanner() {
    const bannerRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            bannerRef.current.remove();
        }, 3000);
    }, [])

    return (
        <p ref={bannerRef} id="banner">
            you're the owner of this Job!

            <style jsx>{`
                #banner {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    padding: 1em 0;
                    text-align: center;
                    background: lightgreen;
                    color: darkgreen;
                    font-size: 1.3em;
                }
            `}</style>
        </p>
    )
}
