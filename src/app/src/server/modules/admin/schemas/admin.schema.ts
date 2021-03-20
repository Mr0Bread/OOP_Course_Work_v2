import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import AdminInterface from 'Server/modules/admin/interfaces/admin.interface';

@Schema({ timestamps: true })
class Admin implements AdminInterface {
    @Prop({ required: true, unique: true })
    login: string

    @Prop({ required: true })
    password: string;
}

const AdminSchema = SchemaFactory.createForClass(Admin);

export default AdminSchema;
