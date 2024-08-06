import React, { useState } from 'react'
import './projects.css'
import project1 from '../../assets/Project1.png'
import project2 from '../../assets/Project2.png'
import project3 from '../../assets/Project3.jpg'

const ProjectDetails = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div className="projects__container container grid">
            <div className="projects__content">
                <div>
                    <img className='project-img' src={project1} alt="" />
                    <h3 className="projects__title">Pizza Mania</h3>

                </div>

                <span className="projects__button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Pizza Mania</h3>
                        <p className="projects__modal-description">Pizza Selling Website</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Tech Stack: React, Bootstrap, Bootstrap Icons, React Router DOM</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Developed a dynamic front-end interface for a pizza selling website using React.js.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Utilized Bootstrap framework for rapid prototyping and responsive design, ensuring compatibility across various devices and
                                    screen sizes.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Implemented React Router DOM for efficient navigation between different pages, ensuring smooth user experience without full
                                    page reloads.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Designed and implemented various components including the homepage, menu, cart, and checkout using React’s
                                    component-based architecture.</p>
                            </li>

                        </ul>
                        <div class="projects__buttons">
                            <a href="https://pizzamania1809.vercel.app/" class="projects__button" target="_blank">
                                <span>Demo</span>
                                <i class="uil uil-link"></i>
                            </a>
                            <a href="https://github.com/PranjalShinde18/Pizza-Mania" class="projects__button" target="_blank">
                                <span>Github</span>
                                <i class="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            <div className="projects__content">
                <div>
                    <img className='project-img' src={project2} alt="" />
                    <h3 className="projects__title">CrypInfo</h3>

                </div>

                <span className="projects__button" onClick={() => toggleTab(2)}>View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">CrypInfo</h3>
                        <p className="projects__modal-description">Crypto Currency Website</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Tech Stack: React, Bootstrap, Bootstrap Icons, React Router DOM</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Implemented React Router DOM for seamless navigation between pages, providing an efficient and smooth user experience without full page reloads.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Integrated real-time market data and analytics through APIs, offering users up-to-date information on market trends and cryptocurrency performance.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Implemented interactive charts and historical data visualizations for individual cryptocurrencies using Chart.js.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Enhanced user interface with animations and transitions using Framer Motion, improving the overall user experience and engagement.</p>
                            </li>

                        </ul>
                        <div class="projects__buttons">
                            <a href="https://cripinfo1809.vercel.app/" class="projects__button" target="_blank">
                                <span>Demo</span>
                                <i class="uil uil-link"></i>
                            </a>
                            <a href="https://github.com/PranjalShinde18/CrypInfo-Crypto-Currency-Information-Application" class="projects__button" target="_blank">
                                <span>Github</span>
                                <i class="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            <div className="projects__content">
                <div>
                    <img className='project-img' src={project3} alt="" />
                    <h3 className="projects__title">Alumnet</h3>
                </div>

                <span className="projects__button" onClick={() => toggleTab(3)}>View More
                    <i className="uil uil-arrow-right projects__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                    <div className="projects__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Alumnet</h3>
                        <p className="projects__modal-description">Alumni Network App</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Tech Stack : Flutter , Dart , Firebase , Cloud Firestore</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Developed a Flutter app featuring a streamlined homepage for intuitive post/news feed browsing.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Implemented functionalities for users to effortlessly add posts.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Incorporated a seamless chat feature, which facilitates communication with friends directly within the app.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>
                                <p className="projects__ modal-info">Designed an interactive profile page for users to personalize their experience and manage their account details efficiently.</p>
                            </li>

                        </ul>

                        <div class="projects__buttons">
                            <a href="https://github.com/PranjalShinde18/Alumni_Net-App" class="projects__button" target="_blank">
                                <span>Github</span>
                                <i class="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProjectDetails