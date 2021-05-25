// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => driver.startsWith(name))
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name)
}