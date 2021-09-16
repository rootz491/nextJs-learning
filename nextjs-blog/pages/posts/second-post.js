import Image from "next/image";
import Layout from "../../components/layout";

export default function firstPost() {
    return (
        <Layout title="Second Post" home={false}>
            <div className="main">
                <h1>John Wick</h1>
                <p>Have you watched <em>John Wick</em> yet?</p>
                
                <Image src="/john-skull.png" height={300} width={200} alt="john wick art" />

                <p>If not, Then you're in for the treat!</p>
            </div>
            <div className="story">
                <h3>NOTICE: SPOILER ALERT</h3>
                <p>
                    It is a movie named on it's main character <span>John Wick</span>. Where Hero is a x-profession assassin who've
                    worked for some very dangerous people.
                    <br/><br/>
                    He left that work and his past behind after he met a woman, to whom, he has falled in love with.
                    <br/>
                    They spent some good time together then she got cancer and soon after, she died.
                    <br/><br/>
                    She had set-up a parcel for John which he recieved after her death. with parcel, there was a puppy which he'ad left for him to look afer and be happy as her last with.
                    <br/>
                    Time passed by, and then one day. In a Gas station, he ran bunch of people who liked his car but he refused to see. So they we were on their for time being.
                    Those guys came back for his car the same night as precious scene happened. John as sleeping but he woke a suddenly, by dog's whining.
                    He went down stairs, and before he could realize anything Someone hit him in back of his head with a baseball bat and almost knocked him out.
                    <br/><br/>
                    His dog was crying (making noises) so those guys killed the little puppy and took his car.
                    <br/>
                    Next day, John burried the puppy and went after those guys.
                    <br/><br/>
                    very intense action happened and He killed many guys in his way to kill that bastard. 
                    <br/>
                    Finally he killed him and took the revenge.
                    <br/><br/>
                    Then comes <strong>second part</strong>, where he takes back his car from some other guy who had it, and fights more people.
                    <br/><br/>
                    And story goes on ...
                    <br/><br/><br/><br/><br/>
                    Thankyou for reading,
                    <br/>
                    <em>~ Sayonara</em>
                </p>
            </div>

            <style jsx>{`
                span {
                    color: grey;
                    font-style: italic;
                }
                .main {
                    text-align: center;
                }
                .story {
                    width: 70%;
                    margin: auto;
                }
                @media screen and (max-width: 600px) {
                    .story {
                        width: 95%;
                    }
                }
            `}</style>

        </Layout>
    )


}
