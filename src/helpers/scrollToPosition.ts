const scrollToPosition = (yPosition = 0, xPosition = 0) => {
    window.scrollTo(yPosition, xPosition);
};
export default scrollToPosition;

export const scrollToElement = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
