import {ErrorHandler} from '@angular/core'

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert("GLOBAL ERROR HANDLER ERROR")
        console.error('GLOBAL ERROR HANDLER ERROR' + error)
    }
}