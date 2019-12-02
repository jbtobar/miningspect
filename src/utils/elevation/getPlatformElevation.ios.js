/* eslint-enable import/no-unresolved, import/extensions */

const getPlatformElevation = (elevation,shadowOpacity = 0.9,shadowOffset={height:1,width:0}) => {
  if (elevation === 0) {
    return {
      shadowColor: 'transparent',
      zIndex: 0,
    };
  }

  return {
    shadowColor: 'black',
    shadowOpacity: shadowOpacity,
    shadowRadius:  elevation/2,
    shadowOffset: shadowOffset,
    // we need to have zIndex on iOS, otherwise the shadow is under components that
    // are rendered later
    zIndex: 1,
  };
};

export default getPlatformElevation;
