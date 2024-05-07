
// import './assets/css/nucleo-icons.css';
// import './assets/css/nucleo-svg.css';
// import './assets/css/material-kit.css?v=3.0.4';



const PortfolioTemplate1 = () => {

return (
<>
<div className="blog-author bg-gray-200">
    {/* <!-- Navbar  --> */}
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent ">
        <div className="container">
            <a className="navbar-brand  text-white " href="shawndreifuss.com" rel="tooltip" title="Shawn Dreifuss Portfolio"
                data-placement="bottom" target="_blank">
                Shawn Dreifuss
            </a>
            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon mt-2">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                </span>
            </button>
            <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ms-lg-12 ps-lg-5" id="navigation">
                <ul className="navbar-nav navbar-nav-hover ms-auto">
                    <li className="nav-item dropdown dropdown-hover mx-2 ms-lg-6">
                        <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                            id="dropdownMenuPages8" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                            <img src="../assets/img/down-arrow-white.svg" alt="down-arrow"
                                className="arrow ms-2 d-lg-block d-none"/>
                            <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow"
                                className="arrow ms-2 d-lg-none d-block"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-lg mt-0 mt-lg-3"
                            aria-labelledby="dropdownMenuPages8">
                            <div className="d-none d-lg-block">
                                <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">
                                    {/* <!-- Navbar links for large screen -->  */}
                                </h6>
                                <a href="#about-me" className="dropdown-item border-radius-md">
                                    <span>About Me </span>
                                </a>
                                <a href=".#contact-me" className="dropdown-item border-radius-md">
                                    <span>Contact Me </span>
                                </a>
                                <a href="#work" className="dropdown-item border-radius-md">
                                    <span>My Work</span>
                                </a>
                            </div>
                            {/* <!-- Navbar links for small screens --> */}
                            <div className="d-lg-none">
                                <h6 className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1">

                                </h6>
                                <a href="#about-me" className="dropdown-item border-radius-md">
                                    <span>About Me </span>
                                </a>
                                <a href=".#contact-me" className="dropdown-item border-radius-md">
                                    <span>Contact Me </span>
                                </a>
                                <a href="#work" className="dropdown-item border-radius-md">
                                    <span>My Work</span>
                                </a>

                            </div>
                        </div>
                    </li>
                    {/* <!--  Links for large screens --> */}
                    <li className="nav-item dropdown dropdown-hover mx-2">
                        <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                            id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="material-icons opacity-6 me-2 text-md">view_day</i>
                            Links
                            <img src="../assets/img/down-arrow-white.svg" alt="down-arrow"
                                className="arrow ms-2 d-lg-block d-none"/>
                            <img src="../assets/img/down-arrow-dark.svg" alt="down-arrow"
                                className="arrow ms-2 d-lg-none d-block"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-animation dropdown-menu-end dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                            aria-labelledby="dropdownMenuBlocks">
                            <div className="d-none d-lg-block">
                                <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                                    <a className="dropdown-item py-2 ps-3 border-radius-md"
                                        href="https://github.com/shawndreifuss">
                                        <div className="w-100 d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6
                                                    className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                    Github</h6>
                                                <span className="text-sm">View my Github</span>
                                            </div>
                                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" className="arrow"/>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                                    <a className="dropdown-item py-2 ps-3 border-radius-md"
                                        href="https://www.linkedin.com/in/shawn-dreifuss-a1a60023b/">
                                        <div className="w-100 d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6
                                                    className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                    LinkedIn</h6>
                                                <span className="text-sm">View my LinkedIn</span>
                                            </div>
                                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" className="arrow"/>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                                    <a className="dropdown-item py-2 ps-3 border-radius-md"
                                        href="./images/ShawnDreifussResume.pdf" download>
                                        <div className="w-100 d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6
                                                    className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                    Resume</h6>
                                                <span className="text-sm">Download my Resume</span>
                                            </div>
                                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" className="arrow"/>
                                        </div>
                                    </a>
                                </li>
                            </div>

                            {/* <!-- Links For mobile screens --> */}
                            <div className="row d-lg-none">
                                <div className="col-md-12">
                                    <div className="d-flex mb-2">
                                        <div className="icon h-10 me-3 d-flex mt-1">
                                            <i className="ni ni-single-copy-04 text-gradient text-primary"></i>
                                        </div>
                                        <div className="w-100 d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6
                                                    className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                                    Links</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="dropdown-item ps-3 border-radius-md mb-1"
                                        href="https://github.com/shawndreifuss">
                                        Github
                                    </a>
                                    <a className="dropdown-item ps-3 border-radius-md mb-1"
                                        href="https://www.linkedin.com/in/shawn-dreifuss-a1a60023b/">
                                        LinkedIn
                                    </a>
                                    <a className="dropdown-item ps-3 border-radius-md mb-1"
                                        href="./images/ShawnDreifussResume.pdf" download>
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item ms-lg-auto">
                        <a className="nav-link nav-link-icon me-2" href="https://github.com/shawndreifuss" target="_blank">
                            <i className="fa fa-github me-1"></i>
                            <p className="d-inline text-sm z-index-1 font-weight-bold" data-bs-toggle="tooltip"
                                data-bs-placement="bottom" title="Star us on Github">Github</p>
                        </a>
                    </li>
                    <li className="nav-item my-auto ms-3 ms-lg-0">
                        <a href="/images/ShawnDreifussResume.pdf"
                            className="btn btn-sm  bg-gradient-info  mb-0 me-1 mt-2 mt-md-0 " download>Dowload Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    {/* <!-- End Navbar --> */}

    {/* <!-- -------- START HEADER IMAGE ------- --> */}
    <div>
        <div className="page-header min-height-400" style={{backgroundImage: "url('/assets/img/bg2.jpg');"}} />
            <span className="mask bg-gradient-primary opacity-4"></span>
        </div>
    </div>
    {/* // <!-- -------- END HEADER  ------- --> */}
    <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
        {/* <!-- START Testimonials w/ user image & text & info --> */}
        <section className="py-sm-7 py-5 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="mt-n8 mt-md-n9 text-center">
                            <img className="avatar avatar-xxl shadow-xl position-relative z-index-2"
                                src="/images/IMG_5935.jpeg" alt="shawn" />
                        </div>
                        <div className="row py-5">
                            <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h3 className="mb-0">Shawn Dreifuss</h3>
                                </div>
                                <p className="text-lg mb-0">
                                    Hi I'm Shawn Dreifuss Fueled by high energy levels and boundless enthusiasm, I'm
                                    easily inspired and more then willing to follow my fascinations wherever they take
                                    me. I'm passionate, expressive, multi-talented spirit with a natural ability to
                                    entertain and inspire. I'm never satisfied to just come up with ideas. Instead I
                                    have an almost impulsive need to act on them.

                                    My abundant energy fuels me in the pursuit of many interests, hobbies, areas of
                                    study and artistic endeavors. I'm a fast learner, able to pick up new skills and
                                    juggle different projects and roles with relative ease.

                                    I don't like to define myself by the work I've done. I define myself by the work I
                                    want to do. Skills can be taught, personality is inherent. I prefer to keep
                                    learning, continue challenging myself, and do interesting things that matter <br/>
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- END Testimonials w/ user image & text & info -->
        <!-- START Blogs w/ 4 cards w/ image & text & link --> */}
        <section className="py-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="mb-5">Check out my latest Projects</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="card card-plain">
                            <div className="card-header p-0 position-relative">
                                <a className="d-block blur-shadow-image">
                                    <img src="/images/chat-app-cover.png" alt="img-blur-shadow"
                                        className="img-fluid h-100 shadow border-radius-lg" />
                                </a>
                            </div>
                            <div className="card-body px-0">
                                <h5>
                                    <a href="https://github.com/shawndreifuss/chat-app" className="text-dark font-weight-bold">Real Time Chat App</a>
                                </h5>
                                <p>
                                    Created with React, HTML5, SCSS, Node.js, Express, Firebase and Socket.io. This app allows users to
                                </p>
                                <a href="https://github.com/shawndreifuss/chat-app" className="text-info text-sm icon-move-right">Read More
                                    <i className="fas fa-arrow-right text-xs ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card card-plain">
                            <div className="card-header p-0 position-relative">
                                <a className="d-block blur-shadow-image">
                                    <img src="/images/blog-cover.png" alt="img-blur-shadow"
                                        className="img-fluid shadow border-radius-lg" />
                                </a>
                            </div>
                            <div className="card-body px-0">
                                <h5>
                                    <a href="https://github.com/shawndreifuss/next.js-blog" className="text-dark font-weight-bold">Blog App</a>
                                </h5>
                                <p>
                                    Blog Application with an Admin Dashboard. Created with Next.js, HTML5, TailwindCss, Node.js, Express, and MongoDB 
                                </p>
                                <a href="https://github.com/shawndreifuss/next.js-blog" className="text-info text-sm icon-move-right">Read More
                                    <i className="fas fa-arrow-right text-xs ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="card card-plain">
                            <div className="card-header p-0 position-relative">
                                <a className="d-block blur-shadow-image">
                                    <img src="/images/ai-image.png" alt="img-blur-shadow"
                                        className="img-fluid shadow border-radius-lg" />
                                </a>
                            </div>
                            <div className="card-body px-0">
                                <h5>
                                    <a href="https://github.com/shawndreifuss/ai-project" className="text-dark font-weight-bold">AI learning App
                                        </a>
                                </h5>
                                <p>
                                    Ai learning app that uses machine learning to help users learn anything asked of it. Created with HTML5, CSS and JavaScript
                                </p>
                                <a href="https://github.com/shawndreifuss/ai-project" className="text-info text-sm icon-move-right">Read More
                                    <i className="fas fa-arrow-right text-xs ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-12">
                        <div className="card card-blog card-background cursor-pointer">
                            <div className="full-background"
                                style={{backgroundImage: "url('data:image/jpeg;base64,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')"}} >

                                </div>
                            <div className="card-body">
                                <div className="content-left text-start my-auto py-4">
                                    <h2 className="card-title text-white">Check out more of my Projects</h2>
                                    <p className="card-description text-white"> </p>
                                    <a href="https://github.com/shawndreifuss" className="text-white text-sm icon-move-right">Read More
                                        <i className="fas fa-arrow-right text-xs ms-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
    </div>
    <section className="py-lg-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card box-shadow-xl overflow-hidden mb-5">
                        <div className="row">
                            <div className="col-lg-5 position-relative bg-cover px-0"
                                style={{backgroundImage: "url('/images/contact.jpeg')"}} >
                                <div
                                    className="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                                    <div className="mask bg-gradient-dark opacity-8"></div>
                                    <div className="p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
                                        <h3 className="text-white">Contact Information</h3>
                                        <p className="text-white opacity-8 mb-4">Please Fill out the form and I will get back
                                            to you!</p>
                                        <div className="d-flex p-2 text-white">
                                            <div>
                                                <i className="fas fa-phone text-sm"></i>
                                            </div>
                                            <div className="ps-3">
                                                <span className="text-sm opacity-8">(760) 470-0245</span>
                                            </div>
                                        </div>
                                        <div className="d-flex p-2 text-white">
                                            <div>
                                                <i className="fas fa-envelope text-sm"></i>
                                            </div>
                                            <div className="ps-3">
                                                <span className="text-sm opacity-8">ShawnDreifuss@icloud.com</span>
                                            </div>
                                        </div>
                                        <div className="d-flex p-2 text-white">
                                            <div>
                                                <i className="fas fa-map-marker-alt text-sm"></i>
                                            </div>
                                            <div className="ps-3">
                                                <span className="text-sm opacity-8">San Diego, CA</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <button type="button"
                                                className="btn btn-icon-only btn-link text-white btn-lg mb-0"
                                                data-toggle="tooltip" data-placement="bottom"
                                                data-original-title="Log in with Facebook">
                                                <i className="fab fa-facebook"></i>
                                            </button>
                                            <button type="button"
                                                className="btn btn-icon-only btn-link text-white btn-lg mb-0"
                                                data-toggle="tooltip" data-placement="bottom"
                                                data-original-title="Log in with Twitter">
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button type="button"
                                                className="btn btn-icon-only btn-link text-white btn-lg mb-0"
                                                data-toggle="tooltip" data-placement="bottom"
                                                data-original-title="Log in with Dribbble">
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                            <button type="button"
                                                className="btn btn-icon-only btn-link text-white btn-lg mb-0"
                                                data-toggle="tooltip" data-placement="bottom"
                                                data-original-title="Log in with Instagram">
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <form className="p-3" id="contact-form">
                                    <div className="card-header px-4 py-sm-5 py-3">
                                        <h2>Say Hi!</h2>
                                        <p className="lead"></p>
                                    </div>
                                    <div className="card-body pt-1">
                                        <div className="row">
                                            <div className="col-md-12 pe-2 mb-3">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>My name is</label>
                                                    <input type="text" className="form-control" placeholder="Full Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pe-2 mb-3">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>I'm looking for</label>
                                                    <input type="text" className="form-control" placeholder="Hiring, Services..."/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 pe-2 mb-3">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>Your message</label>
                                                    <textarea name="message" className="form-control" id="message"
                                                        placeholder="I want to say that..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 text-end ms-auto">
                                                <button  className="btn bg-gradient-info mb-0">Send
                                                    Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- -------- START FOOTER 5 w/ DARK BACKGROUND ------- --> */}
    <footer className="footer py-5">
        <div className="container z-index-1 position-relative">
            <div className="row">
                
            </div>
        </div>
    </footer>
  
  
   
   </>

    )
}

export default PortfolioTemplate1
