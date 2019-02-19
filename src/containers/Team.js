import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import catherine from "../assets/images/catherine.png";
import icon_1 from "../assets/images/icon-1.png";
import icon_2 from "../assets/images/icon-2.png";
import yellow_fuzz from "../assets/images/yellow_fuzz.png";
import icon_3 from "../assets/images/icon-3.png";

class Home extends React.Component {
  render() {
    return (
      <div
        className="style-wrapper"
        to="/about-the-team"
        style={{ marginTop: "20px" }}
      >
        <div
          className="logo-container"
          to="/about-us"
          style={{ backgroundImage: "url(" + yellow_fuzz + ")" }}
        >
          <h3 className="description-language" style={{ color: "#c5a1c9" }}>
            Who we are{" "}
          </h3>
          <h3 className="description-language" style={{ color: "#c5a1c9" }}>
            We're a loving team of independent, creative collaborators. We abide
            by mindful storytelling, doing less to achieve more, and living a
            life that's full of intention. We get things done and promise to
            enjoy the ride from beginning to end. What can we say, we bloom
            among the wild!
          </h3>
        </div>
        <div className="style-container tight-container">
          <Row>
            <Col lg={{ span: 24 }} md={{ span: 24 }} sm={{ span: 24 }}>
              <div className="content-container">
                <div className="content-header">
                  <p>THE TEAM</p>
                </div>
                <Row>
                  <div className="content-block">
                    <img
                      src={catherine}
                      alt="Catherine"
                      style={{
                        margin: "auto",
                        maxWidth: "300px",
                        textAlign: "center"
                      }}
                    />
                  </div>
                  <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>
                    <div className="content-block">
                      <p className="content-title">THE JOURNEY</p>
                      <p className="content-paragraph">
                        I experienced my divine awakening (a health scare) at
                        the age of 23. After being misdiagnosed and over-treated
                        in emergency surgery where I lost my left ovary out of
                        "precaution", I opted out of undergoing “preventive
                        chemotherapy” (out of pure intuition, support, and good
                        research — thank you forever Kris Carr!) and changed my
                        life and diet from the inside out. I asked myself how a
                        young body, with no signs of malignancy, could undergo
                        such severe and invasive treatment...and so began my
                        life-changing journey, starting by listening within.
                        <br />
                        <br />
                        I now know, that it is not our experience that makes our
                        lives, it is what we do with the experiences. After the
                        health scare, I packed my bags in New York, moved to
                        Miami to fulfill my dreams of working on a presidential
                        campaign, went raw vegan, started juicing overnight, had
                        breakfast every morning under the warm sun (and didn't
                        wake up looking at my iPhone!), got fresh air daily, met
                        the love of my life, and subsequently, started to feel
                        whole again. I gave myself the opportunity to live
                        slower and with more intention. This, in turn, shifted
                        my perspective, and perspective is, really, all that
                        matters.
                        <br />
                        <br />I am proud to say that I was named a "top food
                        tech entrepreneur to watch in New York City" by Alley
                        Watch after launching my first startup, GreenHopping,
                        and was featured all-around from Vogue to SELF to
                        Cosmopolitan to Harper's Bazaar to People en Español. I
                        was a semi-finalist of NYU'S $200,000 competition,
                        selected by SXSW for the Startup Village Spotlight, and
                        TechWeek's launch competitor in 2013. I launched
                        GreenHopping out of my own personal necessity to live
                        greener. GreenHopping wouldn't have been possible
                        without the support of my family, friends, and partners
                        who then became family. It didn't "make it" but it
                        opened me up to a whole new world and set of skillsets.
                        It allowed me to expand my creativity and search for new
                        paths. Ultimately, bringing me "home" to me through
                        knowledge, meditation, a daily practice, and leadership.
                      </p>
                    </div>
                  </Col>
                  <Col lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>
                    <div className="content-block">
                      <p className="content-title">THE CREDENTIALS</p>
                      <p className="content-paragraph">
                        Catherine is wildflower's founder and head publicist.
                        She's been working in communications for nearly a
                        decade. Her passion for communications stems from the
                        desire to help build, unite, create, and inspire.
                        Catherine served as assistant press secretary in Tampa,
                        Florida during President Barack Obama's reelection
                        campaign in 2012 - and acted as the press secretary for
                        Judge Rita Mella during her race for Surrogate Court in
                        New York City, which she won. She's worked on the social
                        corporate responsibility teams for the Hispanic Agencies
                        of Record (The Vox Collective and MullenLowe Profero)
                        representing General Motors, PepsiCo, Sanofi Pasteur,
                        HSN, Jägermeister, Ralph Lauren, Macy's, among others.
                        Her first job after college was as a production
                        assistant for MTV's Video Music Awards, which is where
                        she fell in love with the hustle and bustle of New York
                        City.
                        <br />
                        <br />
                        Independently, Catherine spearheaded the branding and
                        launch of accelerator programs empowering women of color
                        in technology, start-ups promoting healthy eating, and
                        non-profits focused on legal assistance. Catherine has
                        expertise in landing high-profile public engagements,
                        ranging from interviews to panels.
                        <br />
                        <br />
                        Catherine earned her BA in International Relations and
                        Politics from Coventry University, England and will soon
                        complete her MA in Food Studies, Culture, and Policy
                        from New York University. She is American but grew up in
                        Santo Domingo, Geneva, and Brussels, partially. She is
                        trilingual in English, Spanish and French. Catherine is
                        a 2016 Aspen Institute Scholar (Executive Seminar on
                        Leadership, Values, and the Good Society), a 2017 Aspen
                        Institute 'Ideas Festival' Scholar (Spotlight Health)
                        and was most recently published by TIME and Thrive
                        Global. You can follow her journey on Instagram here.
                        <br />
                        <br />
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={{ span: 24 }} md={{ span: 24 }} sm={{ span: 24 }}>
              <div className="content-container icon-container-thing">
                <div className="content-header">
                  <p>THE COLLABORATORS</p>
                </div>
                <Row>
                  <Col md={{ span: 8 }} sm={{ span: 24 }}>
                    <div className="content-block">
                      <img
                        src={icon_1}
                        alt="Icon"
                        className="content-small-icon"
                      />
                      <p className="content-title">CONTENT CREATION</p>
                      <p className="content-paragraph">
                        carissa-ann santos
                        <br />
                        veronica cintron
                        <br />
                        stephanie cowan
                        <br />
                      </p>
                    </div>
                  </Col>
                  <Col md={{ span: 8 }} sm={{ span: 24 }}>
                    <div className="content-block">
                      <img
                        src={icon_2}
                        alt="Icon"
                        className="content-small-icon"
                      />
                      <p className="content-title">DESIGN</p>
                      <p className="content-paragraph">
                        andreas de camps
                        <br />
                        hélène de lourdes
                        <br />
                        claudia gerena
                        <br />
                      </p>
                    </div>
                  </Col>
                  <Col md={{ span: 8 }} sm={{ span: 24 }}>
                    <div className="content-block">
                      <img
                        src={icon_3}
                        alt="Icon"
                        className="content-small-icon"
                      />
                      <p className="content-title">PUBLICISTS</p>
                      <p className="content-paragraph">
                        rocio guzman
                        <br />
                        georeen tanner
                        <br />
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
