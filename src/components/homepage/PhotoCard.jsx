import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const PhotoCard = ({animal}) => {
    return (
        <Card className=''>
            <Image src={animal.image} alt={animal.name} height={300} width={300}></Image>
            <p>{animal.name}</p>
        </Card>
    );
};

export default PhotoCard;