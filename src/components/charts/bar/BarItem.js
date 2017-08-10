/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'

const BarItem = ({
    serie,
    xValue,
    yValue,
    x,
    y,
    width,
    height,
    color,
    showTooltip,
    hideTooltip,
}) => {
    const handleTooltip = e => {
        showTooltip(`${serie.id} - ${xValue}: ${yValue}`, e)
    }

    return (
        <rect
            className="nivo_bar_rect"
            x={x}
            y={y}
            width={width}
            height={height}
            style={{
                fill: color,
            }}
            onMouseEnter={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={hideTooltip}
        />
    )
}

BarItem.propTypes = {
    //value:  PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,

    showTooltip: PropTypes.func.isRequired,
    hideTooltip: PropTypes.func.isRequired,
}

export default pure(BarItem)