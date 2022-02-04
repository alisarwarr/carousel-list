//MATERIAL-UI
import Typography from '@mui/material/Typography';
//REACT-CAROURSEL
import Carousel from "react-elastic-carousel";
//REACT-RESPONSIVE
import { useMediaQuery } from 'react-responsive';
//STYLE
import './index.css';


function Lists({ item }) {
    const matches1100 = useMediaQuery({ query: '(min-width:1100px)' });
    const matches1000 = useMediaQuery({ query: '(min-width:1000px)' });
    const matches464 = useMediaQuery({ query: '(min-width:464px)' });
    const matches344 = useMediaQuery({ query: '(min-width:344px)' });
    const matches760 = useMediaQuery({ query: '(min-width:760px)' });
    const matches700 = useMediaQuery({ query: '(min-width:700px)' });
    const matches670 = useMediaQuery({ query: '(min-width:670px)' });


    return (
        <>
            {
                matches670 ? (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "30rem",
                            marginLeft: matches700?(matches1100?"7rem":"12.5rem"):"14rem"
                        }}
                    >
                        <table
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                marginLeft: "-10rem"
                            }}
                        >
                            <tbody>
                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem")
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Title </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.medical_insurance_title}
                                        </span>
                                    </div>
                                </tr>

                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Insurance Provider </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.medical_insurance_provider}
                                        </span>
                                    </div>
                                </tr>

                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Group ID </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.group_id}
                                        </span>
                                    </div>
                                </tr>

                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Phone Number </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.country_code + item.mobile_number}
                                        </span>
                                    </div>
                                </tr>

                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Email </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.email}
                                        </span>
                                    </div>
                                </tr>
                            </tbody>
                        </table>

                        <table
                            style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                marginLeft: matches760?(matches1000?180:190):140,
                            }}
                        >
                            <tbody>
                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Plan Code </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.plan_code}
                                        </span>
                                    </div>
                                </tr>

                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Policy Number </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.policy_number}
                                        </span>
                                    </div>
                                </tr>

                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Effective Date </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.effective_date}
                                        </span>
                                    </div>
                                </tr>

                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Expiry Date </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.expiry_date}
                                        </span>
                                    </div>
                                </tr>

                                <tr
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                    }}
                                >
                                    <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            flexDirection: "column",
                                            marginLeft: "0.9375rem"
                                        }}
                                    >
                                        <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Website </Typography>
                                        <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                            {item.website}
                                        </span>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <table
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column"
                        }}
                    >
                        <tbody>
                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Title </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.medical_insurance_title}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Insurance Provider </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.medical_insurance_provider}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Group ID </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.group_id}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Phone Number </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.country_code + item.mobile_number}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Email </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.email}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Plan Code </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.plan_code}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Policy Number </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.policy_number}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Effective Date </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.effective_date}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Expiry Date </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.expiry_date}
                                    </span>
                                </div>
                            </tr>

                            <tr
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: matches464 ? "1rem" : (matches344 ? "0.485rem" : "0.545rem"),
                                }}
                            >
                                <img src="https://www.pngrepo.com/png/122102/512/bacteria.png" alt="bacteria" style={{ width: "2rem", height: "1.9rem" }} />
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column",
                                        marginLeft: "0.9375rem"
                                    }}
                                >
                                    <Typography style={{ color: "#000000", fontWeight: "bold", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }} variant="p"> Website </Typography>
                                    <span style={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: "1.5rem", marginTop: "-0.225rem", fontSize: matches464 ? "1rem" : (matches344 ? "0.8rem" : "0.625rem") }}>
                                        {item.website}
                                    </span>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                )
            }
        </>
    )
}



function MedicalInsurance({
    data,
    backgroundColor
}) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
    ];


    if (!data) {
        return null;
    }

    return (
        <div
            style={{
                height: "660px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: backgroundColor
            }}
            className="medicalinsurance"
        >
            <h2
                style={{ letterSpacing: "-0.03125rem" }}
                className="heading"
            >
                MEDICAL INSURANCE
            </h2>

            <Carousel breakPoints={breakPoints} itemsToShow={1} itemsToScroll={1} style={{ width: "85%" }} showArrows={false}>
                {
                    data.map((item, i) => (
                        <Lists
                            key={i}
                            item={item}
                        />
                    ))
                }
            </Carousel>
        </div>
    )
}

export default MedicalInsurance;