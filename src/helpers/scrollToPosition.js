/**
 * Scroll To Specific Position of the Window
 * @param {Number} yPosition 
 * @param {Number} xPosition 
 */
const scrollToPosition = (yPosition = 0, xPosition = 0) => {
    window.scrollTo(yPosition, xPosition);
}

export default scrollToPosition;