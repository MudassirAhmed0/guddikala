import dd_courses from '../../../assets/imgs/dd-courses.jpg';
import dd_glossary from '../../../assets/imgs/dd-glossary.jpg';
import dd_services from '../../../assets/imgs/dd-services.jpg';
import dd_politics from '../../../assets/imgs/dd-politics.jpg';
import dd_more_due_diligence from '../../../assets/imgs/dd-more-due-diligence.jpg'
import Image from 'next/image';

const EmpowerImages = () => {
    return (
        <>
            <div className="abcd_row abcd_wrap row-gap-2_abcd mt-5_abcd">
                <div className="abcd_col-6 full-width_abcd display-set_abcd">
                    <Image className="b-rad-12_abcd" src={dd_courses} alt="dd courses" />
                    <p className="text-center_abcd p_abcd">TRAM SEO Course</p>
                </div>
                <div className="abcd_col-6 full-width_abcd display-set_abcd">
                    <Image className="b-rad-12_abcd" src={dd_glossary} alt="dd glossary" />
                    <p className="text-center_abcd p_abcd">Education</p>
                </div>
                <div className="abcd_col-6 full-width_abcd display-set_abcd">
                    <Image className="b-rad-12_abcd" src={dd_services} alt="dd services" />
                    <p className="text-center_abcd p_abcd">Marketing Services</p>
                </div>
                <div className="abcd_col-6 full-width_abcd display-set_abcd">
                    <Image className="b-rad-12_abcd" src={dd_politics} alt="dd Politics" />
                    <p className="text-center_abcd p_abcd">Politics</p>
                </div>
                <div className="abcd_col-12 mbl-display_abcd">
                    <Image className="b-rad-12_abcd" src={dd_more_due_diligence}
                        alt="dd More Due Diligence" />
                    <p className="text-center_abcd p_abcd">Other Due Diligence Stocks</p>
                </div>
            </div>
        </>
    )
}

export default EmpowerImages
