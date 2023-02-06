import React, { useEffect, useState } from "react"
import "./Intro.scss"

const introText = [
  { id: 0, text: "HI!", glitch: false, duration: 3000 },
  { id: 1, text: "", glitch: false, duration: 1000 },
  { id: 2, text: "I'm Nikola Đorđević", glitch: true, duration: 2000 },
  { id: 3, text: "", glitch: false, duration: 1000 },
  { id: 4, text: "I'm a Frontend Developer", glitch: false, duration: 2000 },
  { id: 5, text: "", glitch: false, duration: 1000 },
  { id: 6, text: "Welcome to my portfolio!", glitch: true, duration: 2000 },
  { id: 7, text: "", glitch: false, duration: 1000 },
  {
    id: 8,
    text: "Let me guide you through some of my work",
    glitch: false,
    duration: 2000,
  },
  { id: 5, text: "", glitch: false, duration: 3000 },
]

const Intro = () => {
  const [index, setIndex] = useState(0)

  const disableScroll = () => {
    document.body.style.overflow = "hidden"
  }

  const enableScroll = () => {
    document.body.style.overflow = "auto"
  }

  const hideIntro = () => {
    setTimeout(() => {
      const introWrapper = document.querySelector(".introWrapper")
      introWrapper.style.display = "none"
    }, 1000)
  }

  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    let timerId
    if (index < introText.length - 1) {
      disableScroll()
      timerId = setTimeout(() => {
        setIndex(index + 1)
      }, introText[index].duration || 2000)
    } else {
      enableScroll()
      scrollDown()
      hideIntro()
    }
    return () => {
      clearTimeout(timerId)
    }
  }, [index])

  return (
    <div className="introWrapper">
      <div className="introContent">
        <div className="introText">
          <div className="introTextItem">
            <h1 className={introText[index].glitch ? "glitch" : ""}>
              {introText[index].text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
