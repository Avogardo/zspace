import React from 'react';
import { CircularProgress } from 'material-ui';

export const FullPageLoader = () =>
    <CircularProgress
        style={{
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}
    />
;

export default FullPageLoader;
