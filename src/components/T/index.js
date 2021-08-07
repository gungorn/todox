import React from 'react';
import { Text, TextPropTypes } from 'react-native';
import propTypes from 'prop-types';
import { fontFamily, fontSize } from '~configs';

export const T = props => {
    const { children, font, size , style} = props;

    return (
        <Text
            {...props}
            style={[
                style,
                {
                    fontWeight: null,
                    fontFamily: fontFamily[font],
                    fontSize: fontSize[size]
                }
            ]}
        >
            {children}
        </Text>
    );
};

T.defaultProps = {
    font: 'm',
    size: 'm'
};

T.propTypes = {
    ...TextPropTypes,
    font: propTypes.string,
    size: propTypes.string,
};