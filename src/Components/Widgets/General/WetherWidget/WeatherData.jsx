import React, { Fragment } from 'react'
import { H4, P } from '../../../../AbstractElements'
import { WeatherWidgetData } from '../../../../Data/MockTable/WeatherWidgetData'

const WeatheData = () => {
    return (
        <Fragment>
            {WeatherWidgetData.map((data, i) =>
                <div className="media" key={i}>
                    {data.icon}
                    <div className="media-body align-self-center text-white">
                        <H4 attrH4={{ className: 'm-0 f-w-600 num' }}>{data.temp}</H4>
                        <P attrPara={{ className: 'm-0 f-14' }}>{data.city}</P>
                    </div>
                    
                </div>
            )}
        </Fragment>
    )
}
export default WeatheData