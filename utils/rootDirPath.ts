import path from 'path';

const roodDirPath = () => {
    return path.dirname(require.main!.filename);
};

export default roodDirPath;
