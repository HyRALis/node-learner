import * as fs from 'fs';

/**
 * Creates a file with the specified name and writes the provided data to it.
 * Once the write operation is complete, the onFinish callback is executed.
 *
 * @param name - The name of the file to be created.
 * @param data - The data to be written to the file.
 * @param onFinish - A callback function that is called once the file write operation is completed.
 */
const createFile = (name: string, data: string, onFinish: () => void) => {
    const fileName = name.split('+').join('_');
    const fileContent = data.split('+').join(' ');

    return fs.writeFile(fileName, fileContent, onFinish);
};

export default createFile;
