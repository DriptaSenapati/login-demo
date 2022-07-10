const confirmpassword = (password,cpassword) => {
    if (password !== cpassword){
        return "Password is not matching"
    }else{
        return true;
    }
}

export default confirmpassword;