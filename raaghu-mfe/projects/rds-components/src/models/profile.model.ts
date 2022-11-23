import { TableHeader } from "./table-header.model";

export class Profile {
    public ProfileName: string;
    public emailAddress: string;
    public userName: string;
    public name:string;
    public CurrentPassword: string;
    public NewPassword: string;
    public ConFNewPassword: string;
}
export class success{

    filename !: string;
    filesize :number|undefined;
    iserror :boolean|undefined;
  }
  
  export class LinkedAccount {
    public TableHeader:TableHeader [];
    public tableData: Account[];
  } 
  export class UserDeligates {
    public TableHeader:TableHeader [];
    public UserDeligatesData:Deligates [];
    
  } 
  export class LoginAttempts {
    public TableHeader:TableHeader [];
    public LoginDatatable:Login [];
    
  } 
  export class Account{
    public userName: string;
    public Tenancyname: string;
    public Password: string;
  }
  export class Deligates{
    public UserName: string;
    public StartTime: string;
    public EndTime: string;
  }
  export class Login{
    public IpAddress: string;
    public Client: string;
    public Browser: string;
    public DateAndTime: string;
    public Result: string;
  }
  export class DownloadData{
    public DateofData: string;
    public NummberofDates: string;
    public downloadUrl: string;
    
  }
