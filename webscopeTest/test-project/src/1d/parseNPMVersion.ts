export const parseNPMVersion = (data: string): object => {
    if (data[0] === '@') {
        return {
            name:`@${data.split('@')[1]}`,
            version: data.split('@')[2]
        }
    }

    return {
        name: data.split('@')[0],
        version: data.split('@')[1]
    }
}
