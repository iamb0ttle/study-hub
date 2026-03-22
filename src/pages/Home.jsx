import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <header className="pageHeader">
                <h1>스터디 허브 Study Hub</h1>
                <p className="pageIntro">
                    국어·수학·사회·과학에서 배운 내용을 웹으로 정리한 개인 프로젝트입니다.
                </p>
            </header>

            <section className="pageSection" aria-labelledby="sec-features-description">
                <h2 id="sec-features-description">이 사이트에서 무엇을 할 수 있나요?</h2>
                <ul>
                    <li>자기소개 보기</li>
                    <li>과목별 정리 보기</li>
                    <li>네비게이션 이동</li>
                </ul>
            </section>

            <section className="pageSection" aria-labelledby="sec-subject-nav">
                <h2 id="sec-subject-nav">과목별 바로가기</h2>
                {/* Link는 react-router-dom 라이브러리에서 제공하는 컴포넌트로, 페이지 간 이동을 구현한다. */}
                {/* to 속성은 이동할 페이지의 경로를 지정한다. */}
                <Link to={"/korean"}>국어</Link> <br />
                <Link to={"/math"}>수학</Link> <br />
                <Link to={"/social"}>사회</Link> <br />
                <Link to={"/science"}>과학</Link>
            </section>
        </>
    )
}