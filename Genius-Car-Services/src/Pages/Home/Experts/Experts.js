import Expert from "../Expert/Expert";

import expertImg1 from '../../../images/Experts/expert-1.jpg';
import expertImg2 from '../../../images/Experts/expert-2.jpg';
import expertImg3 from '../../../images/Experts/expert-3.jpg';
import expertImg4 from '../../../images/Experts/expert-4.jpg';
import expertImg5 from '../../../images/Experts/expert-5.png';
import expertImg6 from '../../../images/Experts/expert-6.jpg';

const experts = [
    { id: 1, name: 'Will Smith', img: expertImg1 },
    { id: 2, name: 'Jhon Carter', img: expertImg2 },
    { id: 3, name: 'Dwane Rock', img: expertImg3 },
    { id: 4, name: 'Leonel Messi ', img: expertImg4 },
    { id: 5, name: 'Cristiano Ronaldo ', img: expertImg5 },
    { id: 6, name: 'Michel Jack', img: expertImg6 }
];

const Experts = () => {

    return (
        <div id="experts" className="experts-container">
            <h3 className="text-primary text-center">Our Experts</h3>

            <div className="container">
                <div className="row experts mx-auto">
                    {
                        experts.map(expert =>
                            <Expert
                                expert={expert}
                                key={expert.id}
                            ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;