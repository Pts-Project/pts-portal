import './footer.css';
import SimpleReactFooter from "simple-react-footer";
import { Container, Row, Col } from 'react-grid-system';



const description = "We help our members succeed by providing mentorships.";
const title = "";
const columns = [
    {
        title: "Quick links",
        resources: [
            {
                name: "About",
                link: "/about"
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
                                linkedin="fluffy_cat_on_linkedin"
                                facebook="fluffy_cat_on_fb"
                                twitter="fluffy_cat_on_twitter"
                                instagram="fluffy_cat_live"
                                youtube="UCFt6TSF464J8K82xeA?"
                                pinterest="fluffy_cats_collections"
                                copyright="&#169 PlatformTechSolution | All Rights Reserved"
                                iconColor="white"
                                backgroundColor="#363636"
                                fontColor="white"
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