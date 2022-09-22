import IUser from './User';
interface ICourse {
  id: string;
  title: string;
  description: string;
  owner_id: string;
  students: Array<IUser>;
}

export default ICourse;
