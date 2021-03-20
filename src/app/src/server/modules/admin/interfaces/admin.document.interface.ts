import AdminInterface from 'Server/modules/admin/interfaces/admin.interface';
import { Document } from 'mongoose';

export default interface AdminDocumentInterface extends AdminInterface, Document {
    readonly login: string;
    readonly password: string;
}
