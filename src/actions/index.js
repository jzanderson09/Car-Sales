export const BUY_FEATURE = 'BUY_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const buyFeature = feature => {
    return {
        type: BUY_FEATURE, payload: feature
    }
}

export const removeFeature = feature => {
    return {
        type: REMOVE_FEATURE, payload: feature
    }
}