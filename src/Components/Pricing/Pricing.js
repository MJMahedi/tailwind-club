import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        {id : 1 , name : 'Free' , price : 0 , benefits : [
            'Free service ' , 
            'Life Time service' ,
             'Localized Service ' ,
              '24/7 days solution'
        ]},
        {id : 2 , name : 'Regular' , price : 7400 ,benefits : [
            'Free service ' , 
            'Life Time service' ,
             'Localized Service ' ,
              '24/7 days solution'
        ]},
        {id : 3 , name : 'Premium' , price : 9900 , benefits : [
            'EveryThing Free service ' , 
            'Life Time service' ,
             'Localized Service ' ,
              '24/7 days solution'
        ]},
        {id : 4 , name : 'Gold-Premium' , price : 11110 , benefits : [
            'Free service ' , 
            'Life Time service' ,
             'Localized Service ' ,
              '24/7 days solution'
        ]}
    ];
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the TOWN</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laborum quisquam debitis laudantium hic beatae.</p>
            <div className='grid md:grid-cols-4 gap-4 mt-8'>
                {
                pricingOption.map( option => <PricingOption
                key = {option.id}
                option = {option}
                >
                    
                    </PricingOption>)
                    }
            </div>
        </div>
    );
};

export default Pricing;