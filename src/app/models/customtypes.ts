import { userRoles } from "./enums";
import { notification } from "./notification";
import { studentteacher } from "./studentteacher";
import { user } from "./user";

export type NumberNull = number | null;
export type StringNull = string | null;
export type BooleanNull = boolean | null;
export type DateNull = Date | null;
export type UserNull = user | null;
export type NotificationNull = notification | null;
export type StudentTeacherNull = studentteacher | null;
export type RoleNull = userRoles | null;