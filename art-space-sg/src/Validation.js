

export const validURL = (str) => {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}


export const validName = (str) => {
    if (str.length < 4) {
        return false
    } else {
        return true
    }
}

export const validDescription = (str) => {
    if (str === undefined || str === "") {
        return false
    } else {
        return true
    }
}

export const validMedium = (str) => {
    if (str === undefined || str === "") {
        return false
    } else {
        return true
    }
}

export const validCategory = (str) => {
    str = str || [];
    if (str) {
        return true
    } else {
        return false
    }
}

export const validSex = (str) => {
    if (str === "male" || "female") {
        return true
    } else {
        return false
    }
}

export const validContactNumber = (str) => {
    let phoneno = /^\d{8}$/;
    if (str.match(phoneno)) {
        return true;
    }
    else {
        return false;
    }
}

export const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
    } else {
        return false
    }
};


// To check a password between 6 to 20 characters which 
// contain at least one numeric digit, one uppercase and one lowercase letter

export const validatePassword = (str) => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (str.match(passw)) {
        return true;
    }
    else {
        return false;
    }
}

export const validPrice = (str) => {
    if (isNaN(str)) {
        return false;
    }else{
        return true;
    }
}