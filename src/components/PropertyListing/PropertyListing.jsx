import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import { getAllProperties } from '../../api/properties';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    const fetchProperties = async () => {
        const data = await getAllProperties();
        setProperties(data);
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    return (
        <ul className="PropertyListing">
            {properties
                .map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
