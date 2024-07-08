import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function noSpaceValidator(control:FormControl){

    if (control.value != null && control.value.indexOf(' ')== -1){
        return null
    } else {
        return {naspaceValidator:true}
    }
}

export function numbersOnlyValidator():ValidatorFn{
   return (control:AbstractControl):ValidationErrors|null=>{
        if(/^[0-9]*$/.test(control.value)){
         return null
        } else {
         return {numbersonly:true}
        }
     }
}


export function passwordValidator():ValidatorFn{
    return (control:AbstractControl):null|ValidationErrors=>{
       const uppercase = /[A-Z]/
       const containsLowercase = uppercase.test(control.value)

       const lowercase = /[a-z]/
       const containsUppercase = lowercase.test(control.value)

       const number = /[0-9]/
       const containsNumber = lowercase.test(control.value)

       const specialCharacter = /[!@#$%^&*(),.?":{}|<>+]/
       const containsSpecialCharacter = specialCharacter.test(control.value)

       const minimumChar = control.value.length >= 10

    //    const space = control.value.includes(' ')
    //    const spacevalidator = space.test(control.value)

       const isValid = containsLowercase&&containsUppercase&&containsNumber&&containsSpecialCharacter&&minimumChar;
       return isValid? null: {passwordValidator:true}

      
    }

}