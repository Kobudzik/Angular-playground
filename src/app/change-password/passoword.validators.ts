import { AbstractControl } from '@angular/forms';
export class PasswordValidators{

    static invalidOldPassword(control:AbstractControl){
        return new Promise((resolve)=>{
            if(control.value!=="1234"){
                resolve({invalidOldPassword:true});
            }            
            resolve(null);
            
        })
    }

    static passwordsShouldMatch(control:AbstractControl){
        let newpassword=control.get("newPassword");
        let confirmPassword=control.get("confirmPassword");

        if(newpassword.value!==confirmPassword.value)
        {
            return{passwordsShouldMatch:true};
        }
        return null;
    }
}