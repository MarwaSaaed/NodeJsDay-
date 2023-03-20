function Sub(a,b)
{
    if(isNaN(a)||isNaN(b))
    {
        
        return "Wrong Data";
        
    }
    else
    {
        return a-b;

    }
}

module.exports=Sub;