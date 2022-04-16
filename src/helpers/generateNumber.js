// Generate Random Number from 100 to 255 - For RGB Colors
export const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 