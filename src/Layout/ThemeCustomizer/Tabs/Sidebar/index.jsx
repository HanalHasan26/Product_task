import React, { Fragment } from 'react';
import SidebarType from './SidebarType';
import LayoutType from './LayoutType';
import AnimationFade from './AnimationFade';
import SidebarSettingsClass from './SidebarSettingsClass';
import ColorsComponent from './Color';
import MixLayoutComponent from './MixLayout';

const SidebarCusmizer = () => {

    return (
        <Fragment>
            <LayoutType />
            <SidebarType />
            <SidebarSettingsClass />
            <AnimationFade />
            <ColorsComponent />
            <MixLayoutComponent />
        </Fragment>
    );
};

export default SidebarCusmizer;