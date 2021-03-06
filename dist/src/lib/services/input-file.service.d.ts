import { InputFile } from '../dto/input-file';
import { InputFileConfig } from '../interfaces/input-file-config';
export declare class InputFileService {
    private _config;
    constructor(_config: InputFileConfig);
    readonly config: InputFileConfig;
    /**
     * Whether the limit is not reached.
     * @param files
     */
    limitGuard(files: Array<InputFile>, fileLimit: any): boolean;
    /**
     * Whether the file size is not bigger than the limit.
     * @param file
     * @param sizeLimit
     */
    sizeGuard(file: File, sizeLimit: number): boolean;
    /**
     * Whether the type of the file is enabled.
     * @param file
     * @param fileAccept
     */
    typeGuard(file: File, fileAccept: string): boolean;
}
