import * as vl from 'vega-lite-api';

export const viz = vl.markPoint({fill: true, stoke: false, size: 100, opacity: 0.5})
    .encode(
        vl.x().fieldQ('accelaration').scale({zero: false}),
        vl.y().fieldQ('horepower').scale({zero: false}),
        vl.tooltip().fieldN('car_company')
    );