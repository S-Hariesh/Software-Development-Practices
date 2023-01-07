function validate()
{
    var specialchar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let name = document.forms["fun"]["name"].value;
    if(name == "")
    {
        alert("Enter all fields*");
        return false;
    }
    else if(name.length < 8)
    {
        alert("The name should be minimum 8 character length");
        return false;
    }
    else if(name.length > 15)
    {
        alert("The name should be maximum 15 character length");
        return false;
    }
    else if(name.indexof(" ") > 0)
    {
        alert("No space is allowed in animi name");
        return false;
    }
    else if(specialchar.test(name))
    {
        alert("No special character is allowed in animi name");
    }
}