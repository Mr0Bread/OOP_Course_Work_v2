import AdminInterface from 'Server/modules/admin/interfaces/admin.interface';

export default class AdminDto implements AdminInterface {
    readonly login: string;

    readonly password: string;
}
