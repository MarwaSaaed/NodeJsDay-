function BirthDate(name,birthdate)
{
    var today = new Date();
    if(birthdate.getFullYear()>=2023)
    {
        return "Invalid Data";
    }
    else
    {
    var age = today.getFullYear() - birthdate.getFullYear() - 
               (today.getMonth() < birthdate.getMonth() || 
               (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return `Welecome ${name} your Age is ${age}`;
    }
}

module.exports=BirthDate;