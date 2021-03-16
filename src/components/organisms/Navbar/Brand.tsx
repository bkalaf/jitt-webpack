import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Item from './Item';
import Block from '@atoms/Block';
    
export interface IBrandLink {
    label: string;
    route: string;
    icon?: IconDefinition;
}
export interface IBrandProps extends IProps {
    brandName: string;
    icon: IconDefinition;
}

export default function Brand(props: IBrandProps) {
    const { brandName, icon, ...spread } = pipe(props)(put('navbar-brand'));
    
    return (
        <div {...spread}>
            <Item href="#" hasDropdown={false}>
                <Block> 
                    <span className='content mr-2'>{brandName}</span>
                    {icon ? <FontAwesomeIcon icon={icon} /> : null}
                </Block>
            </Item>
        </div>
    );
}
