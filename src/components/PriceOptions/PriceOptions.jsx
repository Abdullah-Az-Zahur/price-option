import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30/month",
            "features": [
                "Access to cardio machines",
                "Access to weightlifting area",
                "Group fitness classes"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$50/month",
            "features": [
                "All Basic Membership features",
                "Access to sauna and steam room",
                "Personal training session once a week"
            ]
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "price": "$100/month",
            "features": [
                "All Premium Membership features",
                "Unlimited personal training sessions",
                "Towel service",
                "Access to VIP lounge"
            ]
        }
    ]


    return (
        <div>
            <h2 className='text-5xl'>Best Prices in the town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;