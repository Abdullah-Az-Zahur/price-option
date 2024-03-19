import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { price, name, features } = option;
    return (
        <div className='bg-blue-400 rounded-md p-4 text-white'>
            <h2 className='text-center'>
                <span className='text-5xl font-bold'>{price}</span>

            </h2>
            <h2 className='text-2xl text-center my-3'>{name}</h2>
            <div className='pl-6'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='btn mt-6 w-full py-2 font-bold hover:bg-gray-700'>Bye Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;