type UserRole = "guest" | "member" | "admin";

type User = {
    username: string;
    role: UserRole;
};

let userRole: UserRole = "member";
