// take note false is invalid
// true is valid 
// only in this context

export const validURL = (str) => {
        if(str === ""){
            return [false, "* url is required"]
        }

    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return [!!pattern.test(str), !!pattern.test(str) ? "" : "* invalid URL"];
}


export const validName = (str) => {
    if(str === ""){
        return [false, "* name is required"];
    } else if (str.trim().length < 4) {
        return [false, "* name length must be more than 3 character"]
    } else {
        return [true , ""]
    }
}

export const validArtWorkName = (str) => {
    if(str === ""){
        return [false, "* artwork name is required"];
    } else if (str.trim().length < 4) {
        return [false, "* artwork name length must be more than 3 character"]
    } else {
        return [true , ""]
    }
}

export const validDescription = (str) => {
    if (str === undefined || str === "") {
        return [false, "* description is required"]
    } else {
        return [true, ""]
    }
}

export const validMedium = (str) => {
    if (str.length <= 0) {
        return [false, "* please select at least one checkbox"]
    } else {
        return [true, ""]
    }
}

export const validCategory = (str) => {
   
    if (str) {
        return [true, ""]
    } else {
        return [false, "* please select an option"]
    }
}

export const validGender = (str) => {
    if (str === "") {
        return [false, "* please select a gender"]
    } else {
        return [true, ""]
    }
}

export const validContactNumber = (str) => {
    let phoneno = /^\d{8}$/;
    if(str === ""){
        return [false, "* phone number is required"]
    }else if (phoneno.test(str)) {
        return [true, ""]
    }
    else {
        return [false, "* please enter 8 digit phone number"]
    }
}

export const validateEmail = (email) => {

    if(email === ""){
        return [false, "* email is required"]
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return [true, ""]
    } else {
        return [false , "* invalid email, email must contain special character"]
    }
};


// To check a password between 6 to 20 characters which 
// contain at least one numeric digit, one uppercase and one lowercase letter

export const validatePassword = (str) => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (str.match(passw)) {
        return [true, ""]
    }
    else {
        return [false, "* required password length 6 to 20, contain at least one numeric digit, one uppercase and one lowercase letter"]
    }
}

export const validatePrice = (str) => {
    if (isNaN(str)) {
        return [false, "* this field is mandatory"]
    }else{
        return [true , ""]
    }
}