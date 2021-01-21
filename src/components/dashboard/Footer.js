import './footer.css';
import SimpleReactFooter from "simple-react-footer";
import { Container, Row, Col } from 'react-grid-system';



const description = "We help our members succeed by providing mentorships. \n Patform is here to help you get industry ready, via student engaged skill development along with team management.";
const title = "Platform Techs";
const columns = [
    {
        title: "links",
        resources: [
            {
                name: "About",
                link: "#about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Events",
                link: "/event"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Reach Us",
        resources: [
            {
                name: "Panjab University SSG Regional Center ",
                link: "/locations"
            },
            {
                name: "Hoshiarpur, India, 146023",
                link: "/locations"
            },
            {
                name: "student@platformtechs.in",
                link: "mailto:student@platformtechs.in"
            }
        ]
    }
];



const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <SimpleReactFooter className="hovera"
                                description={description}
                                title={title}
                                columns={columns}
                                facebook="platform.techs.31"
                                twitter="platformtechs"
                                instagram="page2platform"
                                linkedin="platform-tech-solutions-086323197"
                                pinterest="sss"
                                youtube="sss"
                                copyright="PlatformTechSolution | All Rights Reserved"
                                iconColor="white"
                                backgroundColor="#302e2ece"
                                fontColor="lightcyan"
                                copyrightColor="darkgrey"
                            />;
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
}

export default Footer;