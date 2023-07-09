import './Profile.css';
import Typewriter from 'typewriter-effect';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href="#">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-twitter-square'></i>
                        </a>

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello , I am <span className='highlighted-text'>Anwar Jahid</span>
                        </span>

                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typewriter
                                    options={{
                                        strings: ['MERN Full Stack','Front and   Back End Development', 'Web Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h1>
                        </span>

                    </div>
                    <div className='profile-role-tagline'>
                        <p>Knock of Building Front and Back End Operation</p>

                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn hire-me'>
                            {""}
                            Hire Me{""}
                        </button>
                        <a href="anwar.pdf" download="anwar jahid.pdf">
                            <button className='btn btn-danger  primary-btn'>Download Resume</button>
                        </a>

                    </div>

                </div>
                <div className='profile-picture'>
                    <div className='profile-background'>
                        
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Profile;