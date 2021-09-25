import { Error } from "mongoose"

export class ResponseRequest {

    public errorStatus(err:Error): object {
        return {
            status: 'fail',
            message: err.message
        }
    }
    
    public successStatus(data:object): object {
        return {
            status: 'success',
            data: data
        }
    }
    
    public sorryStatus(): object {
        return {status: 'sorry'} 
    }
    
}