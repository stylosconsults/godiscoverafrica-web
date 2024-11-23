import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBarPage from '../pagess/navPage/NavBarPage';
import './index.css';
import {Footer} from '../components/footer';
import ScrollToTop from "react-scroll-to-top";

export const AppLayout = props => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='home-styles'>
			{/* <div
				className='top-bar-navbar'
				style={{ backgroundColor: 'red', color: '#fff' }}
			>
				<Container className='py-2'>
					<Row>
						<Col lg={8} xs={7} sm={7}>
							<div className='contact-top'>
								<a
									href='mailto:info@godiscoverafrica.rw'
									className='p-2 email-info'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='info@godiscoverafrica.rw'
								>
									<i className='fa fa-envelope mr-1'></i> info@godiscoverafrica.rw
								</a>
								<a
									href='tel:+250788332220'
									className='p-2 tel'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='‎+250 791 349 744'
								>
									<i className='fa fa-phone mr-1'></i> ‎+250 791 349 744
								</a>
							</div>
						</Col>

						<Col lg={4} xs={5} sm={5}>
							<div className='social-top float-right'>
								<a
									href='#'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Facebook'
								>
									<i className='fab fa-facebook'></i>
								</a>
								<a
									href='#'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Twitter'
								>
									<i className='fab fa-twitter'></i>
								</a>
								<a
									href='#'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Instagram'
								>
									<i className='fab fa-instagram'></i>
								</a>
								<a
									href='#'
									className='p-2'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Linkedin'
								>
									<i className='fab fa-linkedin'></i>
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</div> */}
			<ScrollToTop smooth color="#fff" style={{backgroundColor:"#186645"}}/>
			<NavBarPage />

			<main>{props.children}</main>

			{/* <Partner /> */}
			<Footer />
		</div>
	);
};
