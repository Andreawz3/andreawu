import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/Yori.module.css";
import { useState, useEffect} from "react";

// Components
import Header from "@/components/Header"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";

// Data
import { yoriData } from "@/data/yoriData";

export default function Project() {
  const [data, setData] = useState(yoriData);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isBrowser = () => typeof window !== 'undefined'; 

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <Image 
              src="/images/leaf-left.png"
              width={70}
              height={70}
              alt="portfolio-image"
            />
            <h1 className={styles.title}>YORI</h1>
          </div>
          {
            data && data.about.map((d, index) => {
              return (
                <div key={index}>
                  <p className={styles.projectDesc}>{d.info}</p>
                  <div className={styles.linksContainer}>
                    <div className={styles.linksSubcontainer}>
                      <p>View code</p>
                      <Link className={styles.projectLink} href={`${d.gitHubLink}`} target="_blank">GitHub</Link>
                    </div>
                    <div className={styles.linksSubcontainer}>
                      <p>View</p>
                      <Link className={styles.projectLink} href={`${d.websiteLink}`} target="_blank">App</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className={styles.PromoContainer}>
            <Image 
              className={styles.promoBackground}
              src="/images/yori/background.png"
              width={1115}
              height={656}
              alt="spurt-background"
            />
            <div className={styles.promoVideoContainer}>
              <Image 
                src="/images/pixel-6.png"
                width={236}
                height={528}
                alt="pixel6-frame"
              />
              <video className={styles.promoVideo} src="/videos/yori-promo-video.mp4" autoplay="autoplay" loop="loop" muted="muted"></video>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subContainerTitle}>
            <h1 className={styles.title}>Project Overview</h1>
          </div>
          { 
            data && data.overview.map((d, index) => {
              return (
                <div key={index} style={{display: "flex"}} className={styles.overviewContainer}>
                  <div className={styles.overviewInfo}>
                    <p className={styles.overviewTitle}>Problem Statement</p>
                    <p style={{textAlign: "justify"}}>{d.problem}</p>
                  </div>
                  <div className={styles.overviewInfo}>
                    <p className={styles.overviewTitle}>Possible Solution</p>
                    <p style={{textAlign: "justify"}}>{d.solution}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subContainerTitle}>
            <h1 className={styles.title}>User Persona</h1>
          </div>
          <Image 
            src='/images/user-persona.png'
            width={1070}
            height={625}
            alt="user-persona"
          />
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subContainerTitle}>
            <h1 className={styles.title}>Design Process</h1>
          </div>
          <div className={styles.designProcessInfo}>
            <Image 
              src="/images/designProcess.png"
              width={940}
              height={165}
              alt="design-process"
            />
            <div className={styles.designProcessText}>
              <div style={{textAlign: 'center'}}>
                <p style={{margin: "10px 0 5px 0"}}>Discover</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>User Research</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Competitive Analysis</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <p style={{margin: "10px 0 5px 0"}}>Define</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Survey</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>User Persona</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <p style={{margin: "10px 0 5px 0"}}>Ideate</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Brainstorm Ideas</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>User Flow</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Happy Path</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <p style={{margin: "10px 0 5px 0"}}>Design</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Wireframes</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Visual Design</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Branding</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <p style={{margin: "10px 0 5px 0"}}>Test</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Usability Test</p>
                <p style={{fontSize: "var(--xsmall-font)", margin: 0}}>Implementing Feedback</p>
              </div>
            </div>
            <div style={{display: "flex", gap: "250px", marginTop: "80px"}}>
              <div>
                <p style={{fontSize: "var(--medium-font)"}}>Project Duration</p>
                <div style={{display: "flex", gap: "70px"}}>
                  <p className={styles.projectDurationText}>TIME<span>10</span>weeks</p>
                  <p className={styles.projectDurationText}>RESULT OF<span>20+</span>screen</p>
                </div>
              </div>
              <div>
                <p style={{fontSize: "var(--medium-font)"}}>Tools Used</p>
                <div style={{display: "flex", gap: "24px"}}>
                  {
                    data && data.tool.map((d, index) => {
                      return (
                        <div key={index} className={styles.toolsInfo}>
                          <Image 
                            src={d.image}
                            width={70}
                            height={70}
                            alt={d.name}
                          />
                          <p>{d.name}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subContainerTitle}>
            <h1 className={styles.title}>Sketches</h1>
          </div>
          <div className={styles.sketchesContainer}>
            {
              data && data.skecthes.map((d, i) => {
                return (
                  <div key={i}>
                    <Image 
                      src={d.image}
                      width={115}
                      height={250}
                      alt={d.name}
                    />
                    <p style={{textAlign: "center", fontSize: "var(--xsmall-font)"}}>{d.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.subContainerTitle}>
            <h1 className={styles.title}>Style Guide & Branding</h1>
          </div>
          <div className={styles.brandingContainer}>
            <p className={styles.logo}>Logo</p>
            <p className={styles.logoDesc}>
              Leaf-heart symbol - this icon is to portray a vibrant mood and the subtle 
              heart shape with the leaf is to showcase our app promoting healthy lifestyle. 
              Yori (요리) meaning “to cook” in Korean language. Warm, peach undertone red for 
              the word-mark - as this color associates with movement and excitement to encourage appetite.
            </p>
            <Image 
              className={styles.logoImg}
              src="/images/yori/logo.png"
              width={475}
              height={148}
              alt="portfolio-image"
            />
          </div>
          <hr className={styles.horizontalLine}/>
          <div  className={styles.colorContainer}>
            <p className={styles.colorPalette}>Color Palette</p>
            <p className={styles.colorPaletteDesc}>
              It aims to create a visually stimulating and engaging environment that resonates with 
              children's senses while promoting a sense of excitement and creativity. This diverse 
              colours create a visually appealing and harmonious design scheme that captivates 
              young users and inspires them to embark on a colourful culinary journey.
            </p>
            <div className={styles.colorDisplay}>
              {
                data && data.color.map((d, i) => {
                  return (
                    <div key={i} className={styles.colorInfo}>
                      <div className={styles.color} style={{backgroundColor:`${d.color}`}}></div>
                      <p style={{margin: "10px 0 0 0", fontSize: "var(--xsmall-font)"}}>{d.color}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <hr className={styles.horizontalLine}/>
          <div  className={styles.typoContainer}>
            <p className={styles.typography}>Typography</p>
            <p className={styles.typographyDesc}>
              Capuche and Lato's fonts offer a balanced and visually engaging typographic experience. 
              Capuche's playful and peculiar style adds a touch of fun and creativity to the titles, 
              capturing the attention of young users and inviting them to explore the recipes. Lato's 
              clean and modern sans-serif design provides excellent readability and clarity for the body 
              text, ensuring that users can easily follow the instructions and ingredient lists without distraction.
            </p>
            <div style={{display: "flex", gap: "100px", marginBottom: "60px"}}>
              <div>
                <p className={styles.typoTitle}>Title Header</p>
                <Image 
                  src="/images/capuche.png"
                  width={340}
                  height={325}
                  alt="portfolio-image"
                />
              </div>
              <div>
                <p className={styles.typoTitle}>Body Text</p>
                <Image 
                  src="/images/lato.png"
                  width={340}
                  height={325}
                  alt="portfolio-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.upBtnContainer}>
          <button id={styles.upBtn} className={`... scrollToTopButton ${isVisible ? 'visible' : ''}`} onClick={scrollToTop} >
            <i class="fa fa-arrow-up"></i>
          </button>
        </div>
        <Footer />
      </main>
    </>
  )
}