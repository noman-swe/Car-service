import './Services.css';
import Service from '../Service/Service';
import useServices from '../../../hooks/useServices';

const Services = () => {
    const [services] = useServices();

    return (
        <div className="container" id='services'>
            <div className='services-container'>
                <h3 className='text-primary text-center'>Our Services</h3>
                <div className="services row">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service._id}
                        ></Service>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Services;