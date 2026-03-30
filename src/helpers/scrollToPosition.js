/**
 * Scroll To Specific Position of the Window
 * @param {Number} yPosition 
 * @param {Number} xPosition 
 */
const scrollToPosition = (yPosition = 0, xPosition = 0) => {
    window.scrollTo(yPosition, xPosition);
}
export default scrollToPosition;

/**
 * Scroll to a specific Element (Div) 
 * @param {String} elementId - Div Id, for scroll to that section  
 */
export const scrollToElement = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: "start" });
}