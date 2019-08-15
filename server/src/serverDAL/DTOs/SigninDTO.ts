export interface SigninDTO{
    Fullname: string;
    Phone: string;
    Email: string;
    Password: string;
    Status: number;  
}

export interface UserUpdate{
    Id: number,
    FullName: string,
    Email: string,
    DateOfBirth: Date,
    Phone: string,
    Status: number,
    Departament: string,
    City: string,
    Street: string,
    Neighborhood: string
}