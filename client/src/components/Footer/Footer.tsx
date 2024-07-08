import { Container, Row, Col, List } from 'reactstrap';
import { Link } from 'react-router-dom';
import BookLandLogo from '../../app/assets/logos/bookLandLogo2.svg';
import facebookIcon from '../../app/assets/icons/facebook.png'
import instagramIcon from '../../app/assets/icons/instagram.png';
import linkedInIcon from '../../app/assets/icons/linkedin.png';
import twitter from '../../app/assets/icons/twitter.png';
import youtube from '../../app/assets/icons/youtube.png';
import phone from '../../app/assets/icons/phone.svg';
import mapMarker from '../../app/assets/icons/map-marker.svg';
import mail from '../../app/assets/icons/mail.svg';


const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <h6>+ Books categories</h6>
                    <Col xs={6}>
                        <List type="unstyled">
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/directory/Architecture'>Architecture</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Art'>Art</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Action'>Action</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Biography & Autobiography'>Biography & Autobiography</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Body, Mind & Spirit'>Body, Mind & Spirit</Link>
                                </li>
                            </ul>
                        </List>
                    </Col>
                    <Col xs={6}>
                        <List type="unstyled">
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/directory/Business & Economics'>Business & Economics</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Children Fiction'>Children Fiction</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Children Non-Fiction'>Children Non-Fiction</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Comics & Graphics Novels'>Comics & Graphics Novels</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Cooking'>Cooking</Link>
                                </li>
                            </ul>
                        </List>
                    </Col>
                    <Col xs={6}>
                        <List type="unstyled">
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/directory/Craft & hobbies'>Craft & hobbies</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Design'>Design</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Drama'>Drama</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Education'>Education</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Family & Relationships'>Family & Relationships</Link>
                                </li>
                            </ul>
                        </List>
                    </Col>
                    <Col xs={6}>
                        <List type="unstyled">
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/directory/Fiction'>Fiction</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Foreign Language Study'>Foreign Language Study</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Games'>Games</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Gardening'>Gardening</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Health & Fitness'>Health & Fitness</Link>
                                </li>
                            </ul>
                        </List>
                    </Col>
                    <Col xs={6}>
                        <List type="unstyled">
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/directory/History'>History</Link>
                                </li>
                                <li>
                                    <Link to='/directory/House & Home'>House & Home</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Humor'>Humor</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Literary Collections'>Literary Collections</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Mathematics'>Mathematics</Link>
                                </li>
                            </ul>
                        </List>
                    </Col>
                    <Col xs={6}>
                        <List type="unstyled">
                            <ul className='list-unstyled'>
                                <li>
                                    <Link to='/directory/Medical'>Medical</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Nature'>Nature</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Performing Arts'>Performing Arts</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Pets'>Pets</Link>
                                </li>
                                <li>
                                    <Link to='/directory/Show others'>Show others</Link>
                                </li>
                            </ul>
                        </List>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div>
                            <img src={BookLandLogo} alt='bookland logo' />
                        </div>
                        <div>
                            <p>
                                Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                            </p>
                        </div>
                        <div className='text-center'>
                            <a
                                href='http://instagram.com/'
                            >
                                <img src={instagramIcon} alt='instagram icon' />
                            </a>{' '}
                            <a
                                href='http://www.facebook.com/'
                            >
                                <img src={youtube} alt='instagram icon' />
                            </a>{' '}
                            <a
                                href='http://twitter.com/'
                            >
                                <img src={twitter} alt='instagram icon' />
                            </a>{' '}
                            <a
                                href='http://youtube.com/'
                            >
                                <img src={linkedInIcon} alt='instagram icon' />
                            </a>
                            <a
                                href='http://youtube.com/'
                            >
                                <img src={instagramIcon} alt='instagram icon' />
                            </a>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <Row>
                            <Col xs='12'>
                                <div className='d-flex align-items-center'>
                                    <img src={mapMarker} alt='phone icon' />
                                    <p className='mb-0'>
                                        832 Thompson Drive, San Francisco, CA 94107, United States
                                    </p>
                                </div>
                            </Col>
                            <Col xs='12'>
                                <div className='d-flex align-items-center'>
                                    <img src={phone} alt='phone icon' />
                                    <p className='mb-0'>
                                        +123 345123 556
                                    </p>
                                </div>
                            </Col>
                            <Col xs='12'>
                                <div className='d-flex align-items-center'>
                                    <img src={mail} alt='phone icon' />
                                    <p className='mb-0'>
                                        support@bookland.id
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row>
                            <Col xs='12'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25231.524700477697!2d-122.42899680326146!3d37.767991257975055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e33daff4f83%3A0xefec46d45c4ebfe3!2sSan%20Francisco%2C%20CA%2094107%2C%20USA!5e0!3m2!1sen!2sph!4v1720447597611!5m2!1sen!2sph"
                                    width="600"
                                    height="450"
                                    style={{ border: '0' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Bookland Book Store Ecommerce Website -
                            © 2020 All Rights Reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
