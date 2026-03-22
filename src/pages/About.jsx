export default function About() {
    return (
        <>
            <header className="pageHeader">
                <h1>자기소개</h1>
                <p className="pageIntro">
                    나를 소개합니다.
                </p>
            </header>

            <section className="pageSection" aria-labelledby="sec-whoami">
                <h2 id="sec-whoami">나는 누구인가?</h2>
                <p>저는 대덕소프트웨어마이스터고등학교 3학년 4반에 재학중입니다.</p>
                <p>저는 취업을 하는것이 목표입니다.</p>
            </section>

            <section className="pageSection" aria-labelledby="sec-history">
                <h2 id="sec-history">연혁</h2>
                <ol>
                    <li>문화초등학교 입학</li>
                    <li>둔원초등학교 입학</li>
                    <li>둔원초등학교 졸업</li>
                    <li>괴정중학교 입학</li>
                    <li>괴정중학교 졸업</li>
                    <li>대덕소프트웨어마이스터고등학교 입학</li>
                </ol>
            </section>
        </>
    )
}