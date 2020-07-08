import React from "react"
import "./SubHeader.css"

const SubHeader: React.FC<{}> = (props) => {
  return (
    <>
			<section className="subheader-wrapper">
        <h1 className="nameheader">이 경호</h1>
        <p>프론트엔드 개발자</p>
        <img className="face" src={require(`../../assets/face.png`)} alt="face" />
			</section>
    </>
  )
}

export default SubHeader
