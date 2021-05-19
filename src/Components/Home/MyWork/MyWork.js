import React, { useEffect, useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import AllProject from './AllProject/AllProject';
import './MyWork.css';


const MyWork = () => {
        const [key, setKey] = useState('home');
        
    
    return (
        <div id="mywork" style={{backgroundColor: 'black', paddingTop: '5rem', paddingBottom: '5rem'}}>
            <Container>
                <div data-aos="fade-up"  className="works">
                        <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        >
                        <Tab eventKey="home" title="Home">
                        <AllProject></AllProject>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque recusandae, quidem omnis ut, cum expedita necessitatibus pariatur deserunt ipsum, unde alias id aperiam autem. Similique praesentium dolorum amet perferendis quisquam magnam ea minus voluptatibus ratione, est deleniti explicabo eaque. Quidem sit similique, incidunt ab reiciendis officiis amet alias ratione?</p>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque recusandae, quidem omnis ut, cum expedita necessitatibus pariatur deserunt ipsum, unde alias id aperiam autem. Similique praesentium dolorum amet perferendis quisquam magnam ea minus voluptatibus ratione, est deleniti explicabo eaque. Quidem sit similique, incidunt ab reiciendis officiis amet alias ratione?</p>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </div>
    );
};

export default MyWork;