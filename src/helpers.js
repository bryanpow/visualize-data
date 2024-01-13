export  const getColor = (rentIncreasePercentage) => {
    if (rentIncreasePercentage < 5) {
        return ' #1aff09'
    } else if (rentIncreasePercentage< 10) {
        return '#6eef00'
    } else if (rentIncreasePercentage < 15) {
        return '#94df00'
    } else if (rentIncreasePercentage < 20) {
        return '#b0cd00'
    } else if (rentIncreasePercentage < 25) {
        return '#c7ba00'
    } else if (rentIncreasePercentage< 30) {
        return ' #d9a600'
    } else if (rentIncreasePercentage < 35) {
        return '#e79100'
    } else if (rentIncreasePercentage < 40) {
        return ' #f27a00'
    } else if (rentIncreasePercentage < 45) {
        return '#fa6000'
    } else if (rentIncreasePercentage < 50) {
        return '#fe4100'
    } else if (rentIncreasePercentage < 55) {
        return '#ff0c0c'
    } else {
        return '#cc0a0a'
    }
}